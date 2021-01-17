import Layout from "../components/layout";

import AboutMe from "../components/homePage/aboutMe";
import Intro from "../components/homePage/intro";
import { MainProjects } from "../components/project/MainProjects";
import Skills from "../components/homePage/skills";

const Index = () => {
  return (
    <Layout
      title="Fullchee Zhang - Front end developer"
      description="Portfolio made with love by Fullchee Zhang"
    >
      <Intro />
      <AboutMe />
      <Skills />
      <h2 className="font-monoDisplay pb-8 text-2xl">projects</h2>
      <MainProjects />
    </Layout>
  );
};

export default Index;
