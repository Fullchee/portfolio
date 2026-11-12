import Image from "next/image";
import Link from "next/link";
import { projectImageProps, projectUrl, type Project } from "#lib/projects";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={projectUrl(project)}
      className="group transform duration-300 shadow-md hover:shadow-xl hover:scale-105 focus:shadow-xl focus:scale-105 no-underline hover:text-current focus:text-current"
    >
      <Image className="object-cover" {...projectImageProps(project.image)} />
      <div className="px-8 lg:px-12 pb-8">
        <h3 className="text-xl pt-4 font-bold">{project.title}</h3>
        <p className="py-4">{project.description}</p>
        <p className="underline group-hover:text-brand-500">{project.linkLabel}</p>
      </div>
    </Link>
  );
};
