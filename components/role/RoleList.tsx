import { CaseStudyList } from "#components/caseStudy/CaseStudyList";
import { roles, roleUrl } from "#lib/roles";

export const RoleList = ({ skipSlug }: { skipSlug?: string }) => (
  <CaseStudyList
    caseStudies={roles}
    href={roleUrl}
    linkLabel="Read case study"
    skipSlug={skipSlug}
  />
);
