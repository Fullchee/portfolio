import Layout from "../../components/layout";
import { MainProjects } from "../../components/project/MainProjects";

const ProjectPage = () => {
  return (
    <Layout title="Projects" description="Projects I've been working on">
      <h1>Projects</h1>
      <MainProjects />
    </Layout>
  );
};

export default ProjectPage;
