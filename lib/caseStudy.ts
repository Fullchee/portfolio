import { buildMetadata } from "#lib/metadata";

export interface CaseStudyImage {
  alt: string;
  path: string;
  width: number;
  height: number;
  placeholder?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  image: CaseStudyImage;
  ogImage?: CaseStudyImage;
}

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

export const findCaseStudy = <T extends CaseStudy>(caseStudies: T[], slug: string): T => {
  const caseStudy = caseStudies.find((candidate) => candidate.slug === slug);

  if (!caseStudy) throw new Error(`Unknown case study: ${slug}`);

  return caseStudy;
};

export const caseStudyMetadata = (caseStudy: CaseStudy, path: string) => {
  const image = caseStudy.ogImage ?? caseStudy.image;

  return buildMetadata({
    title: caseStudy.title,
    description: caseStudy.description,
    path,
    images: [{ url: image.path, width: image.width, height: image.height, alt: image.alt }],
  });
};
