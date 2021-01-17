import { ReactNode } from "react";
import Link from "next/link";

import Layout from "../../components/layout";
import Image from "next/image";

type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
  onRight?: boolean;
};

type DescriptionProps = {
  children?: ReactNode;
  image: Image;
};

const ProjectDescription = ({ children, image }: DescriptionProps) => {
  return (
    <div className="grid sm:grid-cols-2 sm:grid-rows-1 items-center py-12">
      <div className={`${image.onRight ? "order-1 justify-self-end" : ""}`}>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
        ></Image>
      </div>
      <div className={`${image.onRight ? "" : ""}`}>{children}</div>
    </div>
  );
};

const IBMPage = () => {
  return (
    <Layout
      title="Working at IBM - Fullchee Zhang"
      description="My experience working as a front-end developer at IBM Canada"
      imageProps={{
        url: "/assets/images/projects/ibm/IBM_logo.svg",
        width: 1000,
        height: 400,
        alt: "old 8 stripe IBM logo",
      }}
    >
      <h1>Working at IBM</h1>
      <p>
        I've been doing front-end work (a lot of JavaScript and CSS) at IBM
        since June 2019 (1.5+ years).
      </p>

      <h2>Contributions</h2>
      <p>
        I work hard to build great user experiences for users. I worked with
        designers and the documentation team to ensure that the site is
      </p>
      <ul>
        <li>accessible (a11y)</li>
        <li>localized (i18n)</li>
        <li>responsive and mobile friendly</li>
        <li>
          Consistent with the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.carbondesignsystem.com/"
          >
            IBM Carbon Design system
          </a>
        </li>
      </ul>
      <p>
        If you're curious, you can{" "}
        <Link href="/project/ibm#baw-background">
          <a>
            scroll down to read background info on what kind of Business
            Automation work our team does
          </a>
        </Link>
      </p>

      <h2>Making the developer experience better</h2>
      <p>
        In addition to the work that was expected of me, I also worked hard to
        solve developer problems and make the developer experience better.
      </p>

      <ProjectDescription
        image={{
          src: "/assets/images/projects/ibm/ubuntu-logo.svg",
          width: 256,
          height: 256,
          alt: "logo of Ubuntu",
          onRight: false,
        }}
      >
        <h3>Changing the dev environment to Linux</h3>
        <h4>Problem</h4>
        <p>A lot of time would be spent waiting for</p>
        <ul>
          <li>your server to rebuild (5+ hours)</li>
          <li>Your server to restart (~10 minutes)</li>
          <li>Waiting for your Windows VM to unfreeze</li>
        </ul>
        <p>
          Additionally, during the on-boarding process before I started working,
          I picked a Mac as my laptop. That meant that I was using a mac to work
          on my Windows VM. (Our server doesn't run on Mac)
        </p>
        <p>
          Side note: I mastered switching between Mac and Windows shortcuts. 👨‍💻
        </p>
        <h4>Solution</h4>
        <p>
          Our software builds and redeploys more than twice as fast on Linux
          than on Windows. This means less time waiting and higher productivity.
        </p>
        <p>
          The challenge was not only making it possible but also making the
          switch easy and obvious. This involved writing easy to follow
          documentation and automating the setup in dot files.
        </p>
      </ProjectDescription>

      <ProjectDescription
        image={{
          src: "/assets/images/projects/ibm/puppeteer.png",
          width: 290,
          height: 422,
          alt: "logo of Puppeteer",
          onRight: true,
        }}
      >
        <h3>Automating manual processes with Puppeteer</h3>
        <h4>Problem</h4>
        <p>
          We use{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=j5bCvffQZbY"
          >
            IBM Web Process Designer
          </a>
          {". "}To develop a custom solution, the fastest way to do things
          involves manual steps. For example, to update your CSS file, you would
          typically have to
        </p>
        <ol>
          <li>Download a zip folder with a specific file structure</li>
          <li>Update that zip folder with your LESS file</li>
          <li>Upload the zip folder</li>
          <li>Refresh the page</li>
        </ol>

        <h4>Solution</h4>
        <p>
          Puppeteer is a great tool for browser automation. It's more reliable
          than Selenium and when you install it as an NPM package, it installs a
          version of Chromium that will work.
        </p>
        <p>
          Anything that our team manually did frequently with WebPD was
          automated. For example, the command to update the CSS took a dozen
          seconds and you didn't have to break your train of thought.
        </p>
        <p>
          One tricky thing when using oclif was being able to install directly
          from a GitHub URL. Our software is proprietary so I want to ensure
          that the tools don't leak into the public. To ensure that it worked on
          both Linux and Windows, I just added the JS to the repository because
          installing directly from GitHub seemed to have issues installing
          dependencies.
        </p>
      </ProjectDescription>

      <ProjectDescription
        image={{
          src: "/assets/images/projects/ibm/diff.jpg",
          width: 358,
          height: 196,
          alt: "diff of two XML files",
          onRight: false,
        }}
      >
        <h3>Human readable diffs</h3>
        <h4>Problem</h4>
        <p>
          Our layouts are stored as minified XML files. When we make a change to
          the layout, we could accidentally override someone else's changes
          without knowing.
        </p>
        <h4>Solution</h4>
        <p>
          I created a Node.js and TypeScript CLI (with{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://oclif.io/">
            oclif
          </a>
          ) that integrated with our version control system (we use{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jazz.net/products/workflow-management/"
          >
            RTC
          </a>{" "}
          instead of Git) to
        </p>
        <ol>
          <li>un-minify the XML file</li>
          <li>Open a tool (VSCode or Meld) to view the diff</li>
        </ol>
        <p>
          The greatest obstacle was definitely learning how RTC worked and
          integrating the CLI as an external compare tool.
        </p>
      </ProjectDescription>

      <ProjectDescription
        image={{
          src: "/assets/images/projects/ibm/eslint.svg",
          width: 240,
          height: 120,
          alt: "diff of two XML files",
          onRight: true,
        }}
      >
        <h3>ESLint</h3>
        <h4>Problem</h4>
        <p>
          ESLint is a great linter that finds and fixes problems in JavaScript.
          Our code style across the team wasn't consistent. Additionally, a few
          of our team members already used ESLint locally.
        </p>
        <h4>Solution</h4>
        <p>
          I prepared a presentation to help win over my team to use ESLint, a
          linting tool and added the .eslintrc to the code repository to make
          our code more consistent. This lead to increased productivity.
        </p>
      </ProjectDescription>

      <ProjectDescription
        image={{
          src: "/assets/images/projects/ibm/write-the-docs.png",
          width: 200,
          height: 200,
          alt: "diff of two XML files",
          onRight: false,
        }}
      >
        <h3>Documentation</h3>
        <p>
          I've written thousands of words of documentation as I've understood
          the product better. Our team has a consistent rotation of interns and
          the documentation will improve the on-boarding experience and time.
        </p>
        <p>
          Many of the projects above were inspired to simplify the docs as well.
        </p>
      </ProjectDescription>

      <h2 id="baw-background">Business Automation</h2>
      <p>
        Tl;dr:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/playlist?list=PL_4RxtD-BL5uzRHELwZz1-3YiczQV9UXU"
        >
          watch a video our team made explaining workstreams and Workplace
        </a>
      </p>
      <p>
        I am working on the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ibm.com/support/knowledgecenter/SSYHZ8_19.0.x/com.ibm.dba.workstream/topics/con_rwf_overview.html"
        >
          workstreams
        </a>
        , and Workplace team.
      </p>
      <p>
        As an example of a process (also called workflow), we have a mortgage
        approval. These are some oversimplified steps.
      </p>
      <ol>
        <li>Hiring manager submits a form with all the hiring details</li>
        <li>HR employee updates job description</li>
        <li>HR employee posts an opening on job boards</li>
        <li>
          HR employee approves or rejects the candidate after the first round
          interview.
        </li>
        <li>
          Hiring manager automatically gets a calendar invite for the second
          round interview
        </li>
      </ol>
      <p>
        Before computers, we would have the process written on paper. Computers
        allowed us to not only document those processes but run them as well.
        Imagine you're the HR employee and you get a notification as soon as the
        hiring manager completes step 1 so that you can now do step 2.
      </p>

      <p>
        Normally with IBM BAW, you hire IT pros specialized with IBM BAW who
        create the processes. So they usually create the biggest bang for the
        buck complex processes. What sells BAW is how it can handle all of
        life's complexities. The problem is that it has a high learning curve.
      </p>
      <p className="">
        What workstreams enables is any regular business user to create their
        own workstream in five minutes or less.
      </p>
      <p>
        The challenge was to enable this functionality with the existing legacy
        IBM BAW processes.
      </p>
      <p>
        IBM Workplace is an app with a modern UI where business users can do
        their process, case and workstreams work.
      </p>
    </Layout>
  );
};

export default IBMPage;
