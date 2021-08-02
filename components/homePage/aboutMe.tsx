import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="ease-in">
      <h2 className="font-monoDisplay text-2xl">about me</h2>
      <div>
        <p>
          I'm super grateful to be able to scratch my own itch and{" "}
          <Link href="/project">
            <a>solve problems with web development</a>
          </Link>{" "}
          🙏.
        </p>
        <p className="">
          Pre-quarantine, I was an avid dragon boat paddler 🛶.
        </p>
        <p className="">During these quarantine-times, I've been busy</p>
        <ul>
          <li>leveling up my web dev skills</li>
          <li>
            learning French, Chinese and web dev with{" "}
            <a href="https://apps.ankiweb.net/">Anki</a>
          </li>
          <li>running, biking and meditating</li>
        </ul>
        <p className="py-4"></p>
      </div>
    </section>
  );
};

export default AboutMe;
