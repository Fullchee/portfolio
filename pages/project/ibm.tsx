import { ReactNode } from "react";

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
      <div className={`${image.onRight ? "order-1 justify-self-center" : ""}`}>
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
    >
      <h1>Working at IBM</h1>
      <p>I've been doing front-end work at IBM since June 2019.</p>
      <p>
        I work hard to build great user experiences for users. I communicated
        with designers and the documentation team to ensure that the product was
        accessible, responsive and consistent with the IBM Carbon design system.
      </p>
      <p>I was very productive and have completed 200+ work items so far.</p>
      <p>Right now, I'm on the IBM Workplace team</p>
      <h2>Contributions</h2>
      <p>I've really learned about the fundamentals of front-end.</p>
      <h2>Making the developer experience better</h2>
      <p>
        In addition to the work that was expected of me, I also worked hard to
        solve developer problems and make the developer experience better.
      </p>

      <ProjectDescription
        key={0}
        image={{
          src: "/assets/images/projects/ubuntu-logo.svg",
          width: 256,
          height: 256,
          alt: "logo of Ubuntu",
          onRight: true,
        }}
      >
        <h3>Changing the dev environment to Linux</h3>
        <h4>Problem</h4>
        <p>A lot of time would be spent waiting for</p>
        <ul className="list-inside list-disc pl-4">
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
          than on Windows.
        </p>
      </ProjectDescription>

      <ProjectDescription
        key={1}
        image={{
          src: "/assets/images/projects/puppeteer.png",
          width: 290,
          height: 422,
          alt: "logo of Puppeteer",
          onRight: false,
        }}
      >
        <h3>Automating manual processes with Puppeteer</h3>
        <h4>Problem</h4>
        <p>
          We use{" "}
          <a href="https://www.youtube.com/watch?v=j5bCvffQZbY">
            IBM Web Process Designer
          </a>
          {". "}To develop a custom solution, the fastest way to do things
          involves manual steps. For example, to update your CSS file, you would
          typically have to
        </p>
        <ol className="list-inside list-decimal pl-4">
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
          from a GitHub URL. Oclif makes it really easy to deploy to the public
          NPM repository. However, since these repos might leak how it was I
          wanted to have more real looking test data.{" "}
        </p>
      </ProjectDescription>

      <h3>Improve layout diffs</h3>
      <h4>Problem</h4>
      <p>
        Our layouts are stored as minified XML files. When we make a change to
        the layout, we could accidentally override someone else's changes
        without knowing.
      </p>
      <h4>Solution</h4>
      <p>
        I created a Node.js and TypeScript CLI (with{" "}
        <a href="https://oclif.io/">oclif</a>) that integrated with our version
        control system (we use{" "}
        <a href="https://jazz.net/products/workflow-management/">RTC</a> instead
        of Git) to
      </p>
      <ol className="list-inside list-decimal pl-4">
        <li>un-minify the XML file</li>
        <li>Open a tool (VSCode or Meld) to view the diff</li>
      </ol>
      <p>
        The greatest obstacle was definitely learning how RTC worked and
        integrating the CLI as an external compare tool.
      </p>

      <h3>ESLint</h3>
      <h4>Problem</h4>
      <p>
        ESLint is a great linter that finds and fixes problems in JavaScript.
        Our code style across the team wasn't consistent. Additionally, a few of
        our team members already used ESLint locally.
      </p>
      <h4>Solution</h4>
      <p>
        I prepared a presentation to help win over my team to use ESLint, a
        linting tool and added the .eslintrc to the code repository to make our
        code more consistent. This overall lead to slightly more productivity.
      </p>
      <p>
        I've written thousands of words of documentation as I've understood the
        product better. Our team has a consistent rotation of interns and the
        documentation will improve the on-boarding experience and time.
      </p>

      <h2>Background on Business Automation software</h2>
      <p>
        <a href="https://www.ibm.com/support/knowledgecenter/SSYHZ8_19.0.x/com.ibm.dba.workstream/topics/con_rwf_overview.html">
          workstreams
        </a>
      </p>
    </Layout>
  );
};

export default IBMPage;
