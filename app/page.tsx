import { AboutMe } from "#components/homePage/aboutMe";
import { Intro } from "#components/homePage/intro";
import { Skills } from "#components/homePage/skills";
import { ProjectList } from "#components/project/ProjectList";
import { buildMetadata, siteBaseUrl } from "#lib/metadata";
import { RoleList } from "#components/role/RoleList";

export const metadata = buildMetadata({
  title: "Full-stack developer | Fullchee Zhang",
  description:
    "Fullchee Zhang is a full-stack developer who makes teams faster with docs, tooling and teaching.",
  path: "/",
});

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Fullchee Zhang",
    jobTitle: "Full-stack developer",
    worksFor: { "@type": "Organization", name: "Citylitics", url: "https://www.citylitics.com" },
    url: siteBaseUrl,
    image: `${siteBaseUrl}/professional-face.jpg`,
    sameAs: ["https://github.com/Fullchee", "https://www.linkedin.com/in/fullchee"],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // oxlint-disable-next-line eslint-react/dom-no-dangerously-set-innerhtml -- JSON-LD needs raw script text; escaping "<" stops it closing the tag
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replaceAll("<", String.raw`\u003c`),
        }}
      />
      <Intro />
      <AboutMe />
      <Skills />
      <h2 className="font-mono-display tracking-wider pb-8 text-2xl">Experience</h2>
      <RoleList />
      <h2 className="font-mono-display tracking-wider py-8 text-2xl">Projects</h2>
      <ProjectList />
    </>
  );
}
