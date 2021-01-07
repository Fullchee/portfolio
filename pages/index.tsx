import Layout from "../components/layout";

import AboutMe from "../components/homePage/aboutMe";
import Intro from "../components/homePage/intro";
import Projects from "../components/homePage/projects";
import Skills from "../components/homePage/skills";

const Index = () => {
  return (
    <Layout
      title="Fullchee Zhang - Front end developer"
      description="Portfolio and blog"
    >
      <Intro />
      <AboutMe />
      <Projects />
      <Skills />
    </Layout>
  );
};

export default Index;
