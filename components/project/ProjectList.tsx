import Image from "next/legacy/image";
import Link from "next/link";

type SafeNumber = number | `${number}`;

export interface ProjectInfo {
  description: string;
  linkLabel: string;
  title: string;
  url: string;
  image: {
    alt: string;
    path: string;
    width?: SafeNumber;
    height?: SafeNumber;
    placeholder?: string;
  };
}

const ProjectCard = ({
  project: {
    description,
    linkLabel,
    title,
    url,
    image: { alt, path, width, height, placeholder },
  },
}: {
  project: ProjectInfo;
}) => {
  return (
    <Link
      href={url}
      className="group transform duration-300 shadow-md hover:shadow-xl hover:scale-105 focus:shadow-xl focus:scale-105 no-underline hover:text-current focus:text-current"
    >
      <Image
        className="object-cover"
        src={path}
        alt={alt}
        width={width || 500}
        height={height || 300}
        placeholder="blur"
        blurDataURL={
          placeholder ||
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89vz3fwAJDAO5snBJQwAAAABJRU5ErkJggg=="
        }
      />
      <div className="px-8 lg:px-12 pb-8">
        <h3 className="text-xl pt-4 font-bold">{title}</h3>
        <p className="py-4">{description}</p>
        <Link href={url} legacyBehavior>
          <p className="underline group-hover:text-blue-500">{linkLabel}</p>
        </Link>
      </div>
    </Link>
  );
};

export const ProjectList = ({
  projects,
  skip,
}: {
  projects: ProjectInfo[];
  skip?: string;
}) => {
  const displayedProjects = projects.filter(({ title }) => title !== skip);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {displayedProjects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};
