import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="">
      <h2 className="font-monoDisplay text-2xl">about me</h2>
      <div className="grid grid-cols-2 space-x-16">
        <div>
          <p>
            I'm super grateful to be able to scratch my own itch and solve
            problems with web development 🙏.
            <ul>
              <li>Got a high water bill from a leaky toilet?</li>
              <ul>
                <li>I can build a web app for that!</li>
              </ul>
              <li>A family friend wants a new site for their business?</li>
              <ul>
                <li>I can design and implement it!</li>
              </ul>
              <li>Want to create google calendar events even faster?</li>
              <ul>
                <li>I can design and build a web app for that!</li>
              </ul>
            </ul>
            I'm excited to see what problems I can solve as my skills grows!
          </p>
        </div>
        <div>
          <p className="">
            Pre-quarantine, I was an avid dragon boat paddler 🛶.
          </p>
          <p className="">
            During quarantine, I've been busy in my bubble
            <ul>
              <li>leveling up my web dev skills</li>
              <li>learning French and Chinese with Anki (spaced repetition)</li>
              <li>meditating 🧘</li>
              <li>doing yoga</li>
              <li>losing muscle mass (trade-offs) 💪</li>
            </ul>
          </p>
          <p className="py-4"></p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
