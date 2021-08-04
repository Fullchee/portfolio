import Layout from '../../components/layout';
import { ProjectDescription } from './ProjectDescription';
import { calculateSejour } from './utilities';

const FormaPage = () => {
  return (
    <Layout
      title="Working at Forma"
      description="My experience working as a full stack developer at Forma.ai"
      imageProps={{
        url: '/assets/images/projects/forma/forma-logo.png',
        width: 1000,
        height: 400,
        alt: 'Forma.ai logo',
      }}
    >
      <h1>Working at Forma.ai</h1>
      <p>
        I've been a full-stack React and Django developer at Forma.ai since March 2021. (
        {calculateSejour})
      </p>

      <ProjectDescription
        image={{
          src: '/assets/images/projects/forma/react.svg',
          width: 256,
          height: 256,
          alt: 'logo of Storybook',
          onRight: false,
        }}
      >
        <h3>Taking ownership of our Storybook instance</h3>
        <h4>Problem</h4>
        <p>Our team was growing really quickly and we needed a way to </p>
        <p>We also wanted a way to work more closely with the design team.</p>
      </ProjectDescription>

      <ProjectDescription
        image={{
          src: '/assets/images/projects/forma/storybook.png',
          width: 256,
          height: 256,
          alt: 'logo of Storybook',
          onRight: false,
        }}
      >
        <h3>Taking ownership of our Storybook instance</h3>
        <h4>Problem</h4>
        <p>Our team was growing really quickly and we needed a way to </p>
        <p>We also wanted a way to work more closely with the design team.</p>
      </ProjectDescription>
    </Layout>
  );
};

export default FormaPage;
