import Layout from "../../components/layout";

const TorontoWaterMonitorPage = () => {
  return (
    <Layout
      title="Projects - Fullchee Zhang"
      description="Projects I've been working on"
    >
      <h1>Toronto water monitor</h1>
      {/* Why is this project important to you? What inspired it? Why did you choose to build
this?  */}
      <h2>Why</h2>
      <p>
        My family got a high water bill from a leaking toilet. This project will
        prevent that from happening again. I also hope to share it with others
        so that they don't get high water bills.
      </p>
      <h2>Features</h2>
      {/* What are the major features that make it unique? How does it compare to existing
products like it?  */}
      - screenshot of main page, completed page, emails
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
      <p>
        Emailing is really expensive. I looked at Twilio's SendGrid and they had
        nice docs. However, I eventually implemented everything with Nodemailer,
        a Node.js package that sends emails for these reasons.
      </p>
      <ul>
        <li>I would have to keep track of two email lists</li>
        <ul>
          <li>in my database</li>
          <li>with the external service</li>
        </ul>
        <li>I wanted to keep things simple</li>
        <li>I didn't like the daily 100 email limit</li>
        <li>I don't need additional features like the click through rate</li>
      </ul>
      <h3>Unsubscribe link</h3>
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
      {/* image */}
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
      <h2>Summary of lessons learned</h2>
      {/* What did you learn from doing this project? How has it affected the work you’ve done
since then? */}
      <p>I learned that email HTML is different.</p>
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
    </Layout>
  );
};

export default TorontoWaterMonitorPage;
