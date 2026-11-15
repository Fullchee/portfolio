import type { ReactNode } from "react";
import { ProjectList } from "#components/project/ProjectList";
import { RoleList } from "#components/role/RoleList";
import type { Role } from "#lib/roles";

export const RolePage = ({ children, role }: { children: ReactNode; role: Role }) => {
  return (
    <>
      <h1>{role.title}</h1>
      {children}
      <h2 className="pt-12 pb-6">Other roles</h2>
      <RoleList skipSlug={role.slug} />
      <h2 className="pt-12 pb-6">Projects</h2>
      <ProjectList />
    </>
  );
};
