import { CaseStudyList } from "#components/caseStudy/CaseStudyList";
import { projects, projectUrl } from "#lib/projects";

export const ProjectList = ({ skipSlug }: { skipSlug?: string }) => (
  <CaseStudyList
    caseStudies={projects}
    href={projectUrl}
    linkLabel="View project"
    skipSlug={skipSlug}
  />
);
