import Layout from "../../components/layout";
import Link from "next/link";
import { ProjectOverview } from "../../components/project/ProjectOverview";
import Image from "next/image";

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
      <h3>What kind of site is best for the client</h3>
      <p>
        The first thing to do was determining if building a Gatsby site was the
        right thing to do for the client. Or if a website builder meets their
        needs better.
      </p>
      <p>
        It turns out that website builders really expensive (compared to my free
        labour). As of January 2021, Squarespace's cheapest plan is{" "}
        <a href="https://www.squarespace.com/pricing">
          $12 USD/month = $200+ CAD/year
        </a>
        . Wix isn't that much cheaper at $10 USD/month for their cheapest plan.
        None of these plans come with email long-term which can get pricey.
      </p>

      <p>
        Now that I was convinced that building a Gatsby site was the way to go,
        I had to design it. I asked my client a lot of questions to get a sense
        of what kind of brand Hong Fa Granite was.
        <ul>
          <li>What the company does</li>
          <li>the company's selling point</li>
          <li>how we want the customers to perceive the company</li>
          <li>the target audience (user personas)</li>
        </ul>
      </p>
      <h3>Logo design</h3>
      <h4>Old logo</h4>
      <Image
        src="/assets/images/projects/hong-fa-granite/old-logo.png"
        alt="Old Hong Fa Granite logo"
        width={300}
        height={84}
      />
      <p>Logo design plan</p>
      <ol>
        <li>Decide on a serif font for the logo</li>
        <li>Update the logo to be favicon friendly</li>
      </ol>

      <h4>New logo</h4>
      <Image
        src="/assets/images/projects/hong-fa-granite/new-logo.png"
        alt="New Hong Fa Granite logo"
        width={313}
        height={107}
      />

      <p>
        I went through serif fonts on Google Fonts to find a font that the
        client liked. I limited it to serif fonts to convey a classic style to
        reflect the classic nature of stone counter tops. Similarly, I went
        through logos of stone related companies and I decided on a geometric
        design with an H in the middle. I kept the brown color scheme of the old
        logo
      </p>
      <h3>Site design</h3>
      <p>
        The Gatsby theme I started with came with the Bulma CSS framework so I
        used Bulma components.
      </p>
      <p>
        Google Maps integration was fairly straightforward because of existing
        npm packages and because I had already some experience with Google APIs
        from my{" "}
        <Link href="/project/batch-calendar-events">
          <a>Batch calendar events project.</a>
        </Link>
      </p>
      <h3>Deploying</h3>
      <p>
        I deployed to a free Netlify site to get feedback from the client. Once
        the site was ready for deployment.
      </p>
      <p>
        Switching from Bell Hosting to Netlify was predictably the hardest and
        least fun part of this project. Eventually, I switched to another domain
        provider and connected it with Netlify so that HongFaGranite.com was
        live!
      </p>
      <h2>Lessons learned</h2>
      {/* What did you learn from doing this project? How has it affected the work you’ve done
since then? */}
    </Layout>
  );
};

export default HongFaGranitePage;
