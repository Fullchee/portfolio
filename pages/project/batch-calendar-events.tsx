import React from "react";
import { ProjectLayout } from "../../components/project/ProjectLayout";
import Image from "next/legacy/image";

const mainImageProps = {
  src: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224576/portfolio/batch-calendar-events/batch-calendar-events_x1fjcv.png",
  alt: "Screenshot of the batch calendar events project on a mobile and desktop",
  width: 960,
  height: 596,
  placeholder: "blur",
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8+fznfwAJFAO6gSu5LgAAAABJRU5ErkJggg==",
};

const BatchCalendarEventsPage = () => {
  const skills = [
    { icon: "react", label: "React" },
    { icon: "js", label: "JavaScript" },
    { icon: "css", label: "CSS" },
  ];
  return (
    <ProjectLayout
      title="Batch calendar events"
      description="Project to create batch calendar events in less than 30 seconds"
      demoUrl="https://calendar-shifts.netlify.app/"
      githubProject="calendar-shifts"
      skills={skills}
      imageProps={mainImageProps}
    >
      {/* Why is this project important to you? What inspired it? Why did you choose to build
this?  */}
      <Image {...mainImageProps} placeholder="blur" />
      <h2>Why</h2>
      <p>
        This project was inspired when my sister was working part-time at a
        supermarket and at a hospital. She would get her schedule every other
        week and she mentioned how annoying it was to add her shifts to Google
        Calendar because her schedule would be different every week.
      </p>
      <p>
        My aim of this project was enable my sister to batch create calendar
        events within 30 seconds.
      </p>
      {/* What did you start with? Was this built from scratch? Did you have a team? If so,
which parts did you do? Where did the design come from? Was there any
collaboration?  */}
      <h2>Thought process</h2>
      {/* What was the hardest part of building this product? Where did you get stuck along the
way?  */}
      {/* When you did get stuck, how did you resolve it? How did you overcome the obstacles
you faced?  */}
      <ol>
        <li>Login with google</li>
        <li>Create a calendar event</li>
        <li>
          Create a UI to generalize the logic of setting the event details
        </li>
      </ol>
      <Image
        src="/assets/images/projects/batch-calendar-events/login.png"
        alt=""
        width={654}
        height={256}
      />
      <p>
        The biggest challenge was integrating with Google Calendar and getting
        the appropriate connection. Despite that, a lot of the magic is already
        done for you.
      </p>

      <Image
        src="/assets/images/projects/batch-calendar-events/google-api.png"
        alt=""
        width={421}
        height={305}
      />
      <p>
        This was my first time using CSS Grid (which I learned from{" "}
        <a href="https://cssgrid.io/">Wes Bos' free CSS Grid course</a> that I
        really like) and this form was good practice.
      </p>
      <h2>Next steps</h2>
      <p>
        I have a rather complicated UI for creating shifts. I can simplify it I
        had it set to my sister's hospital shifts by default (day, evening and
        night shifts). Then, for power users, I have an option to create default
        shifts and keep the modal.
      </p>
      <p>
        Once it's more polished up, I can post it on a few subreddits and see
        how the reception is. It would be nice to help people. As a caveat
        though, I would have to learn more about Google Cloud pricing and how it
        works.
      </p>
    </ProjectLayout>
  );
};

export default BatchCalendarEventsPage;
