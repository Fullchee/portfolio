import { type ProjectInfo, ProjectList } from "./ProjectList";

export const MainProjects = ({ skip }: { skip?: string }) => {
	const projects: ProjectInfo[] = [
		{
			title: "Working at Forma",
			description: `My time as a full-stack developer at Forma.ai`,
			image: {
				alt: "Forma logo",
				path: "/assets/images/projects/forma/f-logo.png",
				placeholder:
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMUz74HwAETAI7zNe8cAAAAABJRU5ErkJggg==",
			},
			linkLabel: "My Forma.ai story",
			url: "/project/forma",
		},
		{
			title: "Working at IBM",
			description: `My time as a front-end developer at IBM Canada`,
			image: {
				alt: "IBM's original eight stripe logo",
				path: "/assets/images/projects/ibm/IBM_logo.svg",
				placeholder:
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUitz8HwAD4gInyYWRnAAAAABJRU5ErkJggg==",
			},
			linkLabel: "My IBM story",
			url: "/project/ibm",
		},
		{
			title: "Toronto water monitor",
			description: `Check your Toronto water usage and send an email if usage spikes`,
			image: {
				alt: "screenshot of my Toronto water monitor project",
				path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224465/portfolio/toronto-water-monitor/toronto-water-monitor_nogsmd.png",
				placeholder:
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89vz3fwAJDAO5snBJQwAAAABJRU5ErkJggg==",
			},
			linkLabel: "View project",
			url: "/project/toronto-water-monitor",
		},
		{
			title: "Hong Fa Granite website",
			description: `Static site for a local business in English and Chinese`,
			image: {
				alt: "screenshot of hong fa granite.com",
				path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650223661/portfolio/hong-fa-granite/hong-fa-granite_zgtsd1.png",
				placeholder:
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP88eX9fwAJowPcYNPZ7gAAAABJRU5ErkJggg==",
			},
			linkLabel: "View project",
			url: "/project/hong-fa-granite",
		},
		{
			title: "Reminders",
			description: `Save and play videos and podcasts with personal notes`,
			image: {
				alt: "screenshot of my Reminders project",
				path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224525/portfolio/reminders/reminders_ayjw5d.png",
				placeholder:
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+uz7fwAJfQPTibFsiQAAAABJRU5ErkJggg==",
			},
			linkLabel: "View project",
			url: "/project/reminders",
		},
		{
			title: "Batch calendar events",
			description: `Create batch calendar events to Google Calendar in seconds`,
			image: {
				alt: "screenshot of my Batch calendar events project",
				path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224576/portfolio/batch-calendar-events/batch-calendar-events_x1fjcv.png",
				placeholder:
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8+fznfwAJFAO6gSu5LgAAAABJRU5ErkJggg==",
			},
			linkLabel: "View project",
			url: "/project/batch-calendar-events",
		},
	];

	return <ProjectList projects={projects} skip={skip} />;
};

export default MainProjects;
