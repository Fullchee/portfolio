import Layout from "../../components/layout";
import Link from "next/link";

const HongFaGranitePage = () => {
  return (
    <Layout
      title="Projects - Fullchee Zhang"
      description="Projects I've been working on"
    >
      <h1>Hong Fa Granite</h1>
      {/* Why is this project important to you? What inspired it? Why did you choose to build
this?  */}
      <h2>Why</h2>
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
        Google Maps integration was fairly straightforward because of existing
        npm packages and because I had already some experience with Google APIs
        from my{" "}
        <Link href="/project/batch-calendar-events">
          <a href="/project/batch-calendar-events">
            Batch calendar events project.
          </a>
        </Link>
      </p>
      <h2>Lessons learned</h2>
      {/* What did you learn from doing this project? How has it affected the work you’ve done
since then? */}
    </Layout>
  );
};

export default HongFaGranitePage;
