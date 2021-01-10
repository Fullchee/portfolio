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
        It's amazing how the skills I learn from the projects and at work
        compound.
      </p>
    </section>
  );
};

export default AboutMe;
