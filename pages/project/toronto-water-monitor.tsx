import { ProjectLayout } from "../../components/project/ProjectLayout";
import Image from "next/image";

const mainImageProps = {
  src: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224467/portfolio/toronto-water-monitor/desktop_shadow_kn9zco.png",
  width: 960,
  height: 624,
  alt: "Screenshot of toronto water monitor project on the Safari browser",
  placeholder: "blur",
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89vz3fwAJDAO5snBJQwAAAABJRU5ErkJggg==",
};

const TorontoWaterMonitorPage = () => {
  const skills = [
    { icon: "react", label: "React" },
    { icon: "typescript-icon.svg", label: "TypeScript" },
    { icon: "sass", label: "SASS" },
    { icon: "node-js", label: "Node.js" },
    { icon: "database", label: "SQL" },
  ];
  return (
    <ProjectLayout
      title="Toronto water monitor"
      description="Project that checks your Toronto water usage and sends you an email if usage spikes"
      skills={skills}
      githubProject="toronto-water-monitor-backend"
      demoUrl="https://toronto-water-monitor.netlify.app/"
      imageProps={mainImageProps}
    >
      {/* Why is this project important to you? What inspired it? Why did you choose to build
this?  */}
      <Image {...mainImageProps} placeholder="blur" />
      <h2>Why</h2>
      <p>
        My family got a high water bill from a leaking toilet. This project will
        prevent that from happening again. I also hope to share it with others
        so that they don't get high water bills.
      </p>

      <h2>Tech stack</h2>
      {/* What did you start with? Was this built from scratch? Did you have a team? If so,
which parts did you do? Where did the design come from? Was there any
collaboration?  */}
      <p>
        Back-end: I want to refine my fundamentals so I used Node.js,
        TypeScript, Express and PostgreSQL. To deploy, I used Heroku, which
        brings all of these technologies under one roof.
      </p>
      <p>
        Front-end: I used React (create-react-app), Formik and Material UI. I
        really like how the label shrinks when you select a form input (video).
        However, I hit a limit to the design: a tooltip can't be added in-line
        because once minified, the tooltip would be too small to be interacted
        with on a touch device.
      </p>

      <h2>Thought process</h2>
      {/* What was the hardest part of building this product? Where did you get stuck along the
way?  */}
      {/* When you did get stuck, how did you resolve it? How did you overcome the obstacles
you faced?  */}
      <p>
        First, I looked for existing solutions. There are affordable alarms that
        detect flooding but wouldn't catch a leaking toilet. There are also
        really expensive solutions that can measure water usage. Finally, I
        discovered that the city of Toronto has a tool called MyWaterToronto
        where you can look at your water usage.
      </p>
      <p>
        The next step was getting the right API calls to get the data. With
        Postman, it was really easy. I didn't have to login and didn't need to
        use Puppeteer to automate any UI steps!
      </p>

      <h3>Emailing</h3>
      <Image
        src="/assets/images/projects/toronto-water-monitor/emails-shadow.png"
        width={604}
        height={113}
        alt="Screenshot emails sent by the app"
      />
      <p>
        Emailing is really expensive. I looked at Twilio's SendGrid and they had
        nice docs. However, I eventually implemented everything with Nodemailer,
        a Node.js package that sends emails for these reasons.
      </p>
      <ul>
        <li>I would have to keep track of two email lists</li>
        <li className="nested-li">in my database</li>
        <li className="nested-li">with the external service</li>
        <li>I wanted to keep things simple</li>
        <li>I didn't like the daily 100 email limit</li>
        <li>I don't need additional features like the click through rate</li>
        <li>
          Twilio SendGrid's aim appears to be catered towards sending batch
          emails which this app does not do
        </li>
      </ul>

      <h3>Unsubscribe link</h3>
      <Image
        src="/assets/images/projects/toronto-water-monitor/welcome-email-shadow.png"
        width={623}
        height={323}
        alt="Screenshot of the welcome email"
      />
      <p>
        Another challenge was the unsubscribe link in the email. I don't fully
        understand how MailChimp and other mail clients do single click
        unsubscribe. I know that the single click is critical to delivering a
        better user experience. However, I don't know how MailChimp handles the
        scenario where the email client pre-fetches URLs. I also know that GET
        requests should never make a change to the database and MailChimp seems
        to be getting away with this violation by redirecting the GET request to
        a POST request.
      </p>
      <p>
        So I did what felt was the right thing to do: have the unsubscribe email
        link direct the user to a page with a form where they have to enter
        their email
      </p>

      <h3>Testing</h3>
      <p>I have unit tests for the validation of incoming data.</p>
      <p>
        I have a test that I can manually enable that will send the two types of
        emails to my personal email address.
      </p>
      <p>Finally, I test the database operations.</p>
      <p>
        Heroku doesn't have a cron job so I used the Heroku daily scheduler to
        check make the Toronto API calls.
      </p>
      <h2>Next steps</h2>
      <p>
        I am preparing to talk to people from{" "}
        <a href="http://civictech.ca/">Civic Tech Toronto</a> and determine what
        improvements should be made.
      </p>
      <p>
        I'm also going to make a post on the{" "}
        <a href="https://www.reddit.com/r/toronto/">r/Toronto subreddit</a>.
      </p>
    </ProjectLayout>
  );
};

export default TorontoWaterMonitorPage;
