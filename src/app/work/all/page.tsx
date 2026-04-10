import type { Metadata } from "next";
import { getWorkListing } from "@/data/work-projects";
import { WorkAllView } from "./work-all-view";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore all work by Stab — creative production for CGI, 3D motion, AI and digital experiences.",
  openGraph: {
    title: "Stab | Work",
    description:
      "Explore all work by Stab — creative production for CGI, 3D motion, AI and digital experiences.",
  },
};

export default function WorkAllPage() {
  const items = getWorkListing();
  return <WorkAllView items={items} />;
}
