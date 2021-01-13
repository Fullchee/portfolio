import Layout from "../components/layout";

import AboutMe from "../components/homePage/aboutMe";
import Intro from "../components/homePage/intro";
import { MainProjects } from "../components/project/MainProjects";
import Skills from "../components/homePage/skills";

const Index = () => {
  return (
    <Layout
      title="Fullchee Zhang - Front end developer"
      description="Portfolio and blog"
    >
      <Intro />
      <AboutMe />
      <h2 className="font-monoDisplay pb-8">projects</h2>
      <MainProjects />
      <Skills />
    </Layout>
  );
};

export default Index;
