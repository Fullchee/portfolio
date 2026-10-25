import { cardInfo as batchCalendarEvents } from "#app/project/batch-calendar-events/card-info";
import { cardInfo as formaInfo } from "#app/project/forma/card-info";
import { cardInfo as hongFaGranite } from "#app/project/hong-fa-granite/card-info";
import { cardInfo as ibmInfo } from "#app/project/ibm/card-info";
import { cardInfo as reminders } from "#app/project/reminders/card-info";
import { cardInfo as torontoWaterMonitor } from "#app/project/toronto-water-monitor/card-info";
import { ProjectList } from "./ProjectList";

export const MainProjects = ({ skip }: { skip?: string }) => {
  const projects = [
    formaInfo,
    ibmInfo,
    torontoWaterMonitor,
    hongFaGranite,
    reminders,
    batchCalendarEvents,
  ];

  return <ProjectList projects={projects} skip={skip} />;
};
