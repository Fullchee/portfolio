import { ProjectList, ProjectInfo } from './ProjectList';

export const MainProjects = ({ skip }: { skip?: string }) => {
  const projects: ProjectInfo[] = [
    {
      title: 'Working at Forma',
      description: `Read about my time as a full-stack developer at Forma.ai`,
      image: {
        alt: 'Forma logo',
        path: '/assets/images/projects/forma/f-logo.png',
        placeholder:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMUz74HwAETAI7zNe8cAAAAABJRU5ErkJggg==',
      },
      linkLabel: 'Read my Forma.ai story',
      url: '/project/forma',
    },
    {
      title: 'Working at IBM',
      description: `Read about my time as a front-end developer at IBM Canada`,
      image: {
        alt: "IBM's original eight stripe logo",
        path: '/assets/images/projects/ibm/IBM_logo.svg',
        placeholder:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUitz8HwAD4gInyYWRnAAAAABJRU5ErkJggg==',
      },
      linkLabel: 'Read my IBM story',
      url: '/project/ibm',
    },
    {
      title: 'Toronto water monitor',
      description: `Check your Toronto water usage and send an email if usage spikes`,
      image: {
        alt: 'screenshot of my Toronto water monitor project',
        path: '/assets/images/projects/toronto-water-monitor/toronto-water-monitor.png',
        placeholder:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89vz3fwAJDAO5snBJQwAAAABJRU5ErkJggg==',
      },
      linkLabel: 'View project tour',
      url: '/project/toronto-water-monitor',
    },
    {
      title: 'Hong Fa Granite website',
      description: `Static site for a local business in English and Chinese`,
      image: {
        alt: 'screenshot of hong fa granite.com',
        path: '/assets/images/projects/hong-fa-granite/hong-fa-granite.png',
        placeholder:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP88eX9fwAJowPcYNPZ7gAAAABJRU5ErkJggg==',
      },
      linkLabel: 'View project tour',
      url: '/project/hong-fa-granite',
    },
    {
      title: 'Reminders',
      description: `Save and play videos and podcasts with personal notes`,
      image: {
        alt: 'screenshot of my Reminders project',
        path: '/assets/images/projects/reminders/reminders.png',
        placeholder:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+uz7fwAJfQPTibFsiQAAAABJRU5ErkJggg==',
      },
      linkLabel: 'View project tour',
      url: '/project/reminders',
    },
    {
      title: 'Batch calendar events',
      description: `Create batch calendar events to Google Calendar in seconds`,
      image: {
        alt: 'screenshot of my Batch calendar events project',
        path: '/assets/images/projects/batch-calendar-events/batch-calendar-events.png',
        placeholder:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8+fznfwAJFAO6gSu5LgAAAABJRU5ErkJggg==',
      },
      linkLabel: 'View project tour',
      url: '/project/batch-calendar-events',
    },
  ];

  return <ProjectList projects={projects} skip={skip} />;
};

export default MainProjects;
