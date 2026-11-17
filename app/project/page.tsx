import { CaseStudyList } from "#components/caseStudy/CaseStudyList";
import { buildMetadata } from "#lib/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Projects I've been working on",
  path: "/project",
});

export default function ProjectIndexPage() {
  return (
    <>
      <h1>Projects</h1>
      <CaseStudyList kind="project" />
    </>
  );
}
