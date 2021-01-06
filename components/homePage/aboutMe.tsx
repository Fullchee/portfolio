import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="flex flex-wrap flex-col sm:flex-row my-16">
      <p className="py-4 pr-4 sm:w-1/2 ">
        I'm grateful to be able to scratch my own itch and solve problems. 🙏
      </p>
      <p className="py-4 pr-4 sm:w-1/2">
        Pre-quarantine, I was an avid dragon boat paddler.
      </p>
      <p className="py-4 pr-4 sm:w-1/2">
        During quarantine, I've been leveling up my web dev skills and learning
        French and Chinese with Anki.
      </p>
      <p className="py-4 sm:w-1/2">
        A lot of my side projects were started because they solve personal
        problems <em>(click the projects to see a summary and reflection)</em>
      </p>
      <p>
        After a family member got a high water bill from a leaky toilet so I
        built a{" "}
        <Link href="/projects/toronto-water-monitor">
          <a href="/projects/toronto-water-monitor">
            web app that detects high water usage.
          </a>
        </Link>
      </p>
      When my sister worked at a supermarket and only got her schedule once
      every week, I built an app to create batch Google Calendar events under 30
      seconds.
    </section>
  );
};

export default AboutMe;
