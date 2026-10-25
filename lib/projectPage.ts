import type { ProjectInfo } from "#components/project/ProjectCard";
import { buildMetadata } from "#lib/metadata";

export const projectImageProps = ({ image }: ProjectInfo) => ({
  src: image.path,
  alt: image.alt,
  width: Number(image.width),
  height: Number(image.height),
  placeholder: "blur" as const,
  blurDataURL: image.placeholder,
});

export const buildProjectMetadata = (info: ProjectInfo) => {
  const { src, width, height, alt } = projectImageProps(info);
  return buildMetadata({
    title: info.title,
    description: info.description,
    path: info.url,
    images: [{ url: src, width, height, alt }],
  });
};
