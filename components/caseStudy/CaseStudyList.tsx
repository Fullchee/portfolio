import Image from "next/image";
import Link from "next/link";
import { caseStudyImageProps, type CaseStudy } from "#lib/caseStudy";

interface CardProps {
  caseStudy: CaseStudy;
  href: string;
  linkLabel: string;
}

const CaseStudyCard = ({ caseStudy, href, linkLabel }: CardProps) => {
  return (
    <Link
      href={href}
      className="group transform bg-card no-underline shadow-md duration-300 hover:text-current hover:shadow-xl focus:text-current focus:shadow-xl motion-safe:hover:scale-105 motion-safe:focus:scale-105 dark:ring-1 dark:ring-white/10"
    >
      <Image className="object-cover" {...caseStudyImageProps(caseStudy.image)} />
      <div className="px-8 pb-8 lg:px-12">
        <h3 className="pt-4 text-xl font-bold">{caseStudy.title}</h3>
        <p className="py-4">{caseStudy.description}</p>
        <p className="underline group-hover:text-link-hover">{linkLabel}</p>
      </div>
    </Link>
  );
};

interface ListProps<T extends CaseStudy> {
  caseStudies: T[];
  href: (caseStudy: T) => string;
  linkLabel: string;
  skipSlug?: string | undefined;
}

export const CaseStudyList = <T extends CaseStudy>({
  caseStudies,
  href,
  linkLabel,
  skipSlug,
}: ListProps<T>) => {
  const displayed = caseStudies.filter(({ slug }) => slug !== skipSlug);

  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
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
