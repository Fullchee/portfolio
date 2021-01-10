import Layout from "../../components/layout";

const BatchCalendarEventsPage = () => {
  return (
    <Layout title="Batch calendar events - Fullchee Zhang" description="">
      <h1>Batch calendar events</h1>
      {/* Why is this project important to you? What inspired it? Why did you choose to build
this?  */}
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
      <h2>Features</h2>
      <p>screenshots</p>
      <h2>Tech stack</h2>
      {/* What did you start with? Was this built from scratch? Did you have a team? If so,
which parts did you do? Where did the design come from? Was there any
collaboration?  */}
      <h2>Thought process</h2>
      {/* What was the hardest part of building this product? Where did you get stuck along the
way?  */}
      {/* When you did get stuck, how did you resolve it? How did you overcome the obstacles
you faced?  */}
      <p>
        The biggest challenge was integrating with Google Calendar and getting
        the appropriate connections
      </p>
      <h2>Lessons learned</h2>
      {/* What did you learn from doing this project? How has it affected the work you’ve done
since then? */}
      <h2>Next steps</h2>I could polish up the design. My font sizes are v units
      which isn't ideal
      <p>because their containers are in rems.</p>
      <p>
        I also think that I don't even need a modal to create shifts. Instead, I
        can just have the times directly on the home page.
      </p>
      <p>
        Once it's more polished up, I can post it on a few subreddits and see
        how the reception is. It would be nice to help people.
      </p>
    </Layout>
  );
};

export default BatchCalendarEventsPage;
