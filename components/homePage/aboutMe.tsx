import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="">
      <h2 className="font-monoDisplay text-2xl">about me</h2>
      <div className="grid sm:grid-cols-2 sm:space-x-16">
        <div>
          <p>
            I'm super grateful to be able to scratch my own itch and solve
            problems with web development 🙏.
          </p>
          <ul>
            <li>Got a high water bill from a leaky toilet?</li>
            <li className="nested-li">I can build a web app for that!</li>
            <li>A family friend wants a new site for their business?</li>
            <li className="nested-li">I can design and implement it!</li>
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
            <li>learning French and Chinese with Anki (spaced repetition)</li>
            <li>meditating 🧘</li>
            <li>doing yoga</li>
            <li>losing muscle (trade-offs) 💪</li>
          </ul>
          <p className="py-4"></p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
