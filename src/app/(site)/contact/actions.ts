"use server";

import { Resend } from "resend";

export type ContactState = {
  ok: boolean;
  error: string | null;
};

const MAX_MESSAGE = 10_000;
const MAX_FIELD = 500;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const trap = String(formData.get("website") ?? "").trim();
  if (trap !== "") {
    return { ok: true, error: null };
  }

  if (formData.get("privacy") !== "on") {
    return { ok: false, error: "Please accept the privacy policy to continue." };
  }

  const name = String(formData.get("name") ?? "").trim().slice(0, MAX_FIELD);
  const company = String(formData.get("company") ?? "").trim().slice(0, MAX_FIELD);
  const email = String(formData.get("email") ?? "").trim().slice(0, MAX_FIELD);
  const subject = String(formData.get("subject") ?? "").trim().slice(0, MAX_FIELD);
  const budget = String(formData.get("budget") ?? "").trim().slice(0, MAX_FIELD);
  const message = String(formData.get("message") ?? "").trim().slice(0, MAX_MESSAGE);

  if (!name || !email || !subject || !message) {
    return { ok: false, error: "Please fill in all required fields." };
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "contact@stab.agency";
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Contact form: missing RESEND_API_KEY or CONTACT_FROM_EMAIL");
    return {
      ok: false,
      error:
        "Message could not be sent. Please email us directly at contact@stab.agency.",
    };
  }

  const text = [
    `Name: ${name}`,
    company ? `Company / project: ${company}` : null,
    `Email: ${email}`,
    `Budget: ${budget || "Not specified"}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <p><strong>Name</strong><br />${escapeHtml(name)}</p>
    ${
      company
        ? `<p><strong>Company / project</strong><br />${escapeHtml(company)}</p>`
        : ""
    }
    <p><strong>Email</strong><br /><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Budget</strong><br />${escapeHtml(budget || "Not specified")}</p>
    <p><strong>Message</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `[stab.agency] ${subject}`,
    text,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      ok: false,
      error:
        "Could not send your message. Please try again or email contact@stab.agency.",
    };
  }

  return { ok: true, error: null };
}
