import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="ease-in">
      <h2 className="font-monoDisplay text-2xl">about me</h2>
      <div className="grid sm:grid-cols-2 sm:space-x-16">
        <div>
          <p>
            I'm super grateful to be able to scratch my own itch and solve
            problems with web development 🙏.
          </p>
          <ul>
            <li>A family friend wants a new site for their business?</li>
            <li className="nested-li">
              <Link href="/project/hong-fa-granite">
                <a className="animated-link">I can design and implement it!</a>
              </Link>
            </li>
            <li>I want to track my home water usage?</li>
            <li className="nested-li">
              <Link href="/project/toronto-water-monitor">
                <a>I can build a web app for that!</a>
              </Link>
            </li>
          </ul>
          <p>I'm excited to see what problems I can solve as my skills grow!</p>
        </div>
        <div>
          <p className="">
            Pre-quarantine, I was an avid dragon boat paddler 🛶.
          </p>
          <p className="">During quarantine-times, I've been busy</p>
          <ul>
            <li>leveling up my web dev skills</li>
            <li>
              learning French and Chinese with{" "}
              <a href="https://apps.ankiweb.net/">Anki</a>
            </li>
            <li>meditating</li>
            <li>doing yoga</li>
          </ul>
          <p className="py-4"></p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
