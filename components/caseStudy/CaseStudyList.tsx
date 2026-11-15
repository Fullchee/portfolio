import Image from "next/image";
import Link from "next/link";
import { caseStudyImageProps, type CaseStudy } from "#lib/caseStudy";

type CardProps = { caseStudy: CaseStudy; href: string; linkLabel: string };

const CaseStudyCard = ({ caseStudy, href, linkLabel }: CardProps) => {
  return (
    <Link
      href={href}
      className="group bg-card transform duration-300 shadow-md hover:shadow-xl motion-safe:hover:scale-105 focus:shadow-xl motion-safe:focus:scale-105 no-underline hover:text-current focus:text-current dark:ring-1 dark:ring-white/10"
    >
      <Image className="object-cover" {...caseStudyImageProps(caseStudy.image)} />
      <div className="px-8 lg:px-12 pb-8">
        <h3 className="text-xl pt-4 font-bold">{caseStudy.title}</h3>
        <p className="py-4">{caseStudy.description}</p>
        <p className="underline group-hover:text-link-hover">{linkLabel}</p>
      </div>
    </Link>
  );
};

type ListProps<T extends CaseStudy> = {
  caseStudies: T[];
  href: (caseStudy: T) => string;
  linkLabel: string;
  skipSlug?: string;
};

export const CaseStudyList = <T extends CaseStudy>({
  caseStudies,
  href,
  linkLabel,
  skipSlug,
}: ListProps<T>) => {
  const displayed = caseStudies.filter(({ slug }) => slug !== skipSlug);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {displayed.map((caseStudy) => (
        <CaseStudyCard
          key={caseStudy.slug}
          caseStudy={caseStudy}
          href={href(caseStudy)}
          linkLabel={linkLabel}
        />
      ))}
    </div>
  );
};
