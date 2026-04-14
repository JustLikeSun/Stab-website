import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  WORK_SLUG_ORDER,
  getWorkNeighbors,
  getWorkProject,
} from "@/data/work-projects";
import { WorkCaseView } from "./work-case-view";

export function generateStaticParams() {
  return WORK_SLUG_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getWorkProject(slug);
  if (!p) return { title: "Work" };
  return {
    title: {
      absolute: `${p.title} | Stab`,
    },
    description: p.description,
    openGraph: p.ogImage
      ? { images: [{ url: p.ogImage, alt: `${p.title} cover` }] }
      : undefined,
  };
}

export default async function WorkCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) notFound();

  const { prev, next } = getWorkNeighbors(slug);

  return <WorkCaseView project={project} prev={prev} next={next} />;
}
