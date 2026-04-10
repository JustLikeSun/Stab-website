import type { Metadata } from "next";
import { getWorkListing } from "@/data/work-projects";
import { WorkAllView } from "./work-all-view";

export const metadata: Metadata = {
  title: "Anubi | Work",
  description:
    "Explore all work by Anubi, an Italian creative studio focused on CGI, 3D motion, AI and creative websites.",
  openGraph: {
    title: "Anubi | Work",
    description:
      "Explore all work by Anubi, an Italian creative studio focused on CGI, 3D motion, AI and creative websites.",
  },
};

export default function WorkAllPage() {
  const items = getWorkListing();
  return <WorkAllView items={items} />;
}
