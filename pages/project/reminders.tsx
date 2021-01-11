import Layout from "../../components/layout";
import { ProjectOverview } from "../../components/project/ProjectOverview";

const RemindersPage = () => {
  const skills = [
    { icon: "react", label: "React" },
    { icon: "js", label: "JavaScript" },
    { icon: "sass", label: "SASS" },
    { icon: "node-js", label: "Node.js" },
    { icon: "database", label: "SQL" },
  ];
  return (
    <Layout
      title="Projects - Fullchee Zhang"
      description="Projects I've been working on"
    >
      <h1>Reminders</h1>

      <ProjectOverview
        githubProject="reminders-frontend"
        demoUrl="https://fullchee-reminders.netlify.app/"
        skills={skills}
      />

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
      <h2>Lessons learned</h2>
      {/* What did you learn from doing this project? How has it affected the work you’ve done
since then? */}
    </Layout>
  );
};

export default RemindersPage;
