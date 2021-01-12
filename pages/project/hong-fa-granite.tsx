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
      <Image
        src="/assets/images/projects/hong-fa-granite/hong-fa-granite.png"
        alt="Hong fa granite.com home page"
        width={500}
        height={313.25}
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
      <Image
        src="/assets/images/projects/hong-fa-granite/why-us.jpg"
        alt="home page scrolled down"
        height={300}
        width={450}
      />
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
      <h4>Logo design plan</h4>
      <ol>
        <li>Decide on a serif font for the logo</li>
        <li>Update the logo to be favicon friendly</li>
      </ol>

      <h4>New logo</h4>
      <Image
        src="/assets/images/projects/hong-fa-granite/new-logo.png"
        alt="New Hong Fa Granite logo"
        width={300}
        height={100}
      />

      <p>
        I went through serif fonts on Google Fonts to find a font that the
        client liked. I limited it to serif fonts to convey a classic style to
        reflect the classic nature of stone counter tops. Similarly, I went
        through logos of stone related companies and I decided on a symmetric
        geometric design with an H in the middle. I kept the brown color scheme
        of the old logo.
      </p>
      <h3>Site design</h3>
      <p>
        The Gatsby theme I started with came with the Bulma CSS framework so I
        used Bulma components. The home page had a hero button
      </p>

      <h3>Internationalization (i18n)</h3>
      <Image
        src="/assets/images/projects/hong-fa-granite/i18n.jpg"
        alt="chinese home page of hong fa granite.com"
        height={300}
        width={450}
      />
      <p>
        An important demographic for the company was chinese speaking so I had
        to enable language support for Chinese and English. The Workplace and
        Workstreams products at IBM support multiple locales so I knew some
        tricks. I decided on using react-intl. There are a lot of ways to
        implement i18n. The way that worked for me was adding a /zh/ prefix to
        every path. I'm only dealing with two languages so I created a{" "}
        <code>&lt;LocalizedLink&gt;</code> wrapper on top of the Gatsby Link
        component and I placed my strings in JSON files.
      </p>

      <h3>Products page</h3>
      <Image
        src="/assets/images/projects/hong-fa-granite/products-page.jpg"
        alt="Products page of Hong fa granite.com"
        height={300}
        width={450}
      />
      <p>
        I added a filter feature (which just uses an ES6 Array filter) to filter
        the types of stone products
      </p>

      <h3>Contact us page</h3>
      <Image
        src="/assets/images/projects/hong-fa-granite/contact-us.jpg"
        alt="Contact us page of Hong Fa Granite.com"
        height={300}
        width={450}
      />
      <p>
        I used Netlify Forms to handle the contact us page. I used Yup to
        validate the form. The contact info uses the same component as in the
        footer with CSS Flexbox.
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
        the site was ready for deployment, I had to switch from Bell to Netlify.
        Switching was predictably the hardest and least fun part of this
        project. Eventually, I switched to another domain provider and connected
        it with Netlify so that HongFaGranite.com was live!
      </p>
    </Layout>
  );
};

export default HongFaGranitePage;
