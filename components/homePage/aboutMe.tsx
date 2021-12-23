import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="ease-in">
      <h2 className="font-monoDisplay tracking-wider text-2xl">about me</h2>
      <div>
        <p>
          I'm super grateful to be able to scratch my own itch and{" "}
          <Link href="/project">
            <a>solve problems with web development</a>
          </Link>{" "}
          🙏
        </p>
        <p className="">
          I get dopamine hits from writing scan-able documentation so I take
          notes in the open, whether that's how I use React components in
          Storybook or how to a feature works in Bookstack
        </p>
        <p className="">
          During these quarantine-times, I've been busy in Toronto
        </p>
        <ul>
          <li>
            leveling up my web dev skills (learning{" "}
            <a href="https://epicreact.dev/">Epic React</a> atm)
          </li>
          <li>
            learning French, Chinese and web dev with{" "}
            <a href="https://apps.ankiweb.net/">Anki</a>
          </li>
          <li>
            meditating, lifting, running and biking in preparation for the next
            dragon boat season 🛶
          </li>
        </ul>
        <p className="py-4"></p>
      </div>
    </section>
  );
};

export default AboutMe;
