import type { ReactNode } from "react";
import { CaseStudyList } from "#components/caseStudy/CaseStudyList";
import type { Role } from "#lib/roles";

export const RolePage = ({ children, role }: { children: ReactNode; role: Role }) => {
  return (
    <>
      <h1>{role.title}</h1>
      {children}
      <h2 className="pt-12 pb-6">Other roles</h2>
      <CaseStudyList kind="role" skipSlug={role.slug} />
      <h2 className="pt-12 pb-6">Projects</h2>
      <CaseStudyList kind="project" />
    </>
  );
};
