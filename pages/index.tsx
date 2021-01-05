import Container from "../components/container";
import Head from "next/head";
import Layout from "../components/layout";

import AboutMe from "../components/homePage/aboutMe";
import Intro from "../components/homePage/intro";
import Projects from "../components/homePage/projects";
import Skills from "../components/homePage/skills";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Fullchee Zhang - Front end developer</title>
        </Head>
        <Container>
          <Intro />
          <AboutMe />
          <Projects />
          <Skills />
        </Container>
      </Layout>
    </>
  );
};

export default Index;
