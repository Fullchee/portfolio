import Image from "next/image";
import Link from "next/link";
import {
  caseStudiesOf,
  caseStudyImageProps,
  caseStudyUrl,
  type CaseStudy,
  type CaseStudyKind,
} from "#lib/caseStudy";

const linkLabels: Record<CaseStudyKind, string> = {
  project: "View project",
  role: "Read case study",
};

const CaseStudyCard = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  return (
    <Link
      href={caseStudyUrl(caseStudy)}
      className="group transform bg-card no-underline shadow-md duration-300 hover:text-current hover:shadow-xl focus:text-current focus:shadow-xl motion-safe:hover:scale-105 motion-safe:focus:scale-105 dark:ring-1 dark:ring-white/10"
    >
      <Image className="object-cover" {...caseStudyImageProps(caseStudy.image)} />
      <div className="px-8 pb-8 lg:px-12">
        <h3 className="pt-4 text-xl font-bold">{caseStudy.title}</h3>
        <p className="py-4">{caseStudy.description}</p>
        <p className="underline group-hover:text-link-hover">{linkLabels[caseStudy.kind]}</p>
      </div>
    </Link>
  );
};

interface ListProps {
  kind: CaseStudyKind;
  skipSlug?: string;
}

export const CaseStudyList = ({ kind, skipSlug }: ListProps) => {
  const displayed = caseStudiesOf(kind).filter(({ slug }) => slug !== skipSlug);

  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
      {displayed.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
      ))}
    </div>
  );
};
