import { caseStudyMetadata, findCaseStudy, type CaseStudy } from "#lib/caseStudy";

export type Role = CaseStudy;

export const roles: Role[] = [
  {
    slug: "forma",
    title: "Working at Forma",
    description: "My time as a full-stack developer at Forma.ai",
    image: {
      alt: "Forma logo",
      path: "/assets/images/projects/forma/f-logo.png",
      width: 500,
      height: 300,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMUz74HwAETAI7zNe8cAAAAABJRU5ErkJggg==",
    },
  },
  {
    slug: "ibm",
    title: "Working at IBM",
    description: "My time as a front-end developer at IBM Canada",
    image: {
      alt: "IBM's original eight stripe logo",
      path: "/assets/images/projects/ibm/IBM_logo.svg",
      width: 500,
      height: 300,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUitz8HwAD4gInyYWRnAAAAABJRU5ErkJggg==",
    },
    ogImage: {
      alt: "old 8 stripe IBM logo",
      path: "/assets/images/projects/ibm/ibm-logo.png",
      width: 1000,
      height: 400,
    },
  },
];

export const getRole = (slug: string) => findCaseStudy(roles, slug);

export const roleUrl = (role: Role) => `/role/${role.slug}`;

export const roleMetadata = (role: Role) => caseStudyMetadata(role, roleUrl(role));
