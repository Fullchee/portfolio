import React from "react";
import { ProjectLayout } from "../../components/project/ProjectLayout";
import Image from "next/legacy/image";

const mainImageProps = {
  src: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224525/portfolio/reminders/reminders_ayjw5d.png",
  alt: "screenshot of the reminders project",
  width: 960,
  height: 596,
  placeholder: "blur",
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+uz7fwAJfQPTibFsiQAAAABJRU5ErkJggg==",
};

const RemindersPage = () => {
  const skills = [
    { icon: "react", label: "React" },
    { icon: "js", label: "JavaScript" },
    { icon: "sass", label: "SASS" },
    { icon: "node-js", label: "Node.js" },
    { icon: "database", label: "SQL" },
  ];
  return (
    <ProjectLayout
      title="Reminders"
      description="Project to remind myself of meaningful podcasts and YouTube videos"
      githubProject="reminders-frontend"
      demoUrl="https://fullchee-reminders.netlify.app/"
      skills={skills}
      imageProps={mainImageProps}
    >
      <h1>Reminders</h1>
      <Image {...mainImageProps} placeholder="blur" />
      <h2>Why</h2>
      <Image
        src="/assets/images/projects/reminders/forgetting-curve.svg"
        alt="screenshot of the reminders project"
        width={277}
        height={237}
      />
      <p>
        I used to use spaced repetition to learn Chinese, French and web dev
        with Anki. I applied the same concept to podcasts and YouTube videos
        where I periodically re-watch and re-listen to podcasts and videos I
        found meaningful.
      </p>
      <h2>Thought process</h2>
      <h3 className="pt-2">Design</h3>
      <p>
        I wanted to have a relatively small width to increase readability. So I
        added some padding to the form. In the remaining horizontal space, I
        added a linear gradient. Finally, I added a subtle SVG pattern from{" "}
        <a href="https://www.heropatterns.com/">heropatterns.com</a>
      </p>
      <h3>Data</h3>
      <p>
        The first part was figuring out what data I wanted to store. The first
        is the title of the video/podcast. Secondly, I wanted to store the last
        time I visited the link to implement spaced repetition.
      </p>
      <h3>Playing videos and podcasts</h3>
      <Image
        src="https://res.cloudinary.com/dnboci3v7/image/upload/v1650224524/portfolio/reminders/audio_lbvyxy.png"
        alt="screenshot of the reminders project playing a podcast"
        width={917}
        height={486}
      />
      <p>
        Thirdly, it's pricey to store videos and podcasts, I decided on only
        storing URLs to the podcasts and videos. I had a wrapper component that
        combines a react-player module that played YouTube videos and a custom
        component that played the components
      </p>
      <h3>Keywords</h3>
      <Image
        src="https://res.cloudinary.com/dnboci3v7/image/upload/v1650224524/portfolio/reminders/keywords_xqotx4.png"
        alt="screenshot of adding a keyword in the reminders project"
        width={803}
        height={327}
      />
      <p>
        Next, I have the keywords to categorize and index when searching. I used
        a react-dropdown-select npm module where which had the functionality of
        adding new items.
      </p>
      <h3>Taking notes</h3>
      <p>
        Finally, I decided on adding notes. This is to have different versions
        of myself making notes to get the most insight out of each item of
        media. I also use this section to write down specific times moments for
        longer videos/podcasts.
      </p>
      <h3>Initial back-end: GraphQL</h3>
      <p></p>
      <p>
        As a prototype, I actually started off with a GraphQL backend with JSON
        as a datastore. I was working with Gatsby at the time and I wanted to
        understand more concretely why GraphQL was always praised. Here's my old
        abandoned{" "}
        <a href="https://github.com/Fullchee/values-graphql-yoga-json">
          GitHub repo
        </a>
        . I decided to not continue using GraphQL because my app is a really
        simple CRUD app (only a few database calls) and connecting GraphQL,
        GraphQL Yoga and PostgreSQL ended up being a lot more complicated than I
        liked.
      </p>
      <h3>Final back-end</h3>
      {/* When you did get stuck, how did you resolve it? How did you overcome the obstacles
you faced?  */}
      <p>
        I stuck with the tried and true PostgreSQL, Node.js and Express. Here's
        the{" "}
        <a href="https://github.com/Fullchee/reminders-backend">GitHub repo</a>.
        I wanted to practice my fundamental SQL skills and focus on delivering
        the product rather than playing around with new tech (as fun as it is).
        The end product is a lot simpler because there are only a handful of API
        calls and no need to implement and maintain a GraphQL layer.
      </p>
    </ProjectLayout>
  );
};

export default RemindersPage;
