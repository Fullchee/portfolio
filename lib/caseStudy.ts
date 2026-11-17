import { buildMetadata } from "#lib/metadata";
import { projects, type Project } from "#lib/projects";
import { roles, type Role } from "#lib/roles";

export interface CaseStudyImage {
  alt: string;
  path: string;
  width: number;
  height: number;
  placeholder?: string;
}

export interface CaseStudyFields {
  slug: string;
  title: string;
  description: string;
  image: CaseStudyImage;
  ogImage?: CaseStudyImage;
}

export type CaseStudy = Project | Role;

export type CaseStudyKind = CaseStudy["kind"];

type CaseStudyOf<K extends CaseStudyKind> = Extract<CaseStudy, { kind: K }>;

export const caseStudies: CaseStudy[] = [...roles, ...projects];

export const caseStudiesOf = <K extends CaseStudyKind>(kind: K) =>
  caseStudies.filter((caseStudy): caseStudy is CaseStudyOf<K> => caseStudy.kind === kind);

export const getCaseStudy = <K extends CaseStudyKind>(kind: K, slug: string): CaseStudyOf<K> => {
  const caseStudy = caseStudiesOf(kind).find((candidate) => candidate.slug === slug);

  if (!caseStudy) throw new Error(`Unknown ${kind}: ${slug}`);

  return caseStudy;
};

/** The app/<kind>/<slug>/page.tsx folder layout mirrors this; caseStudy.test.ts checks it. */
export const caseStudyUrl = ({ kind, slug }: CaseStudy) => `/${kind}/${slug}`;

const defaultBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89vz3fwAJDAO5snBJQwAAAABJRU5ErkJggg==";

export const caseStudyImageProps = ({ alt, path, width, height, placeholder }: CaseStudyImage) => ({
  src: path,
  alt,
  width,
  height,
  placeholder: "blur" as const,
  blurDataURL: placeholder ?? defaultBlurDataURL,
});

const ogImage = (caseStudy: CaseStudy) =>
  caseStudy.ogImage ??
  (caseStudy.kind === "project" ? caseStudy.hero : undefined) ??
  caseStudy.image;

export const caseStudyMetadata = (caseStudy: CaseStudy) => {
  const image = ogImage(caseStudy);

  return buildMetadata({
    title: caseStudy.title,
    description: caseStudy.description,
    path: caseStudyUrl(caseStudy),
    images: [{ url: image.path, width: image.width, height: image.height, alt: image.alt }],
  });
};
