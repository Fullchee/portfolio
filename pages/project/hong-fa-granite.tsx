import Layout from "../../components/layout";
import Link from "next/link";
import { ProjectOverview } from "../../components/project/ProjectOverview";

const HongFaGranitePage = () => {
  const skills = [
    { icon: "gatsby.svg", label: "Gatsby" },
    { icon: "react", label: "React" },
    { icon: "js", label: "JavaScript" },
    { icon: "sass", label: "SASS and Bulma" },
  ];
  return (
    <Layout
      title="Projects - Fullchee Zhang"
      description="Projects I've been working on"
    >
      <h1>Hong Fa Granite</h1>
      <ProjectOverview
        demoUrl="https://www.hongfagranite.com"
        skills={skills}
      />

      {/* Why is this project important to you? What inspired it? Why did you choose to build
this?  */}
      <h2>Why</h2>
      <p>
        A family friend has a stone fabricator business. They had a slow
        Wordpress website that was costing them $20+ a month with Bell Hosting.
      </p>
      <h2>Features</h2>
      <p>screenshots</p>
      <p></p>
      <h2>Tech stack</h2>
      {/* What did you start with? Was this built from scratch? Did you have a team? If so,
which parts did you do? Where did the design come from? Was there any
collaboration?  */}
      <p>
        There isn't a lot of dynamic content so I decided to use a static site
        generator. Gatsby creates "blazing fast websites" and React. I really
        liked using Gatsby when making my 2020 portfolio so I went with Gatsby
        (Next.js came out with static site generation after I already started
        the project)
      </p>
      <p>
        I built this site from the Gatsby template. I decided to use Bulma
        because it is responsive and I want to try different CSS frameworks to
        learn from their design systems for inspiration.
      </p>
      <h2>Thought process</h2>
      {/* What was the hardest part of building this product? Where did you get stuck along the
way?  */}
      {/* When you did get stuck, how did you resolve it? How did you overcome the obstacles
you faced?  */}
      <p>
        My first course of action was to see if building a Gatsby site was the
        right thing to do for the client. I listen to a ton of podcasts and
        watch a ton of "educational" (fun to learn but not really useful)
        YouTube and I always see Squarespace and Wix ads.
      </p>
      <p>
        It turns out that they're really expensive (compared to my free labour).
        As of January 2021, Squarespace's cheapest plan is{" "}
        <a href="https://www.squarespace.com/pricing">
          $12 USD/month = $200+ CAD/year
        </a>
        . Wix isn't that much cheaper at $10 USD/month for their cheapest plan.
        None of these plans come with email long-term which is the real cost and
        switching email providers can be quite difficult.
      </p>

      <p>
        Now that I was convinced that building a Gatsby site was the way to go,
        I had to design it. I asked my client a lot of questions to get a sense
        of what kind of brand Hong Fa Granite was.
        <ul>
          <li></li>
          <li></li>
        </ul>
        , My go to strategy was sending my client logos. After they picked one,
      </p>
      <p>
        Google Maps integration was fairly straightforward because of existing
        npm packages and because I had already some experience with Google APIs
        from my{" "}
        <Link href="/project/batch-calendar-events">
          <a>Batch calendar events project.</a>
        </Link>
      </p>
      <p>
        Switching from Bell Hosting to Netlify was predictably the hardest and
        least fun part of this project.
      </p>
      <h2>Lessons learned</h2>
      {/* What did you learn from doing this project? How has it affected the work you’ve done
since then? */}
    </Layout>
  );
};

export default HongFaGranitePage;
