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
        I've been a full-stack React and Django developer at Forma.ai since March 2021 (
        {calculateSejour('2021-03-01')}).
      </p>

      <ProjectDescription
        image={{
          src: '/assets/images/projects/forma/react.png',
          width: 320,
          height: 226,
          alt: 'React logo',
          onRight: false,
        }}
      >
        <h3>Building Dashboards</h3>
        <p>
          I build modern incentive compensation dashboards and core components to help sales people
          understand how they're getting paid.
        </p>
      </ProjectDescription>

      <ProjectDescription
        image={{
          src: '/assets/images/projects/forma/storybook.png',
          width: 256,
          height: 256,
          alt: 'Storybook logo',
          onRight: false,
        }}
      >
        <h3>Taking ownership of our Storybook instance</h3>
        <p>
          Our team was growing really quickly and we needed a way to communicate and document our
          components. I took initiative to update Storybook and add our components.
        </p>
        <p>
          We also wanted a way to work more closely with the design team. So I integrated Figma
          iframes into Storybook.
        </p>
      </ProjectDescription>

      <ProjectDescription
        image={{
          src: '/assets/images/projects/ibm/eslint.svg',
          width: 240,
          height: 120,
          alt: 'ESLint logo',
          onRight: false,
        }}
      >
        <h3>ESLint</h3>
        <p>
          Spearheaded the push to update ESLint to support more modern features to make the
          developer experience nicer (eg: support for optional chaining)
        </p>
      </ProjectDescription>
    </Layout>
  );
};

export default FormaPage;
