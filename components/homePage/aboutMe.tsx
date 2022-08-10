const AboutMe = () => {
  return (
    <section className="ease-in">
      <h2 className="font-monoDisplay tracking-wider text-2xl">About me</h2>
      <article>
        <h3>Learner 💡</h3>
        <ul>
          <li>Leading a monthly Dev Article Club at Forma</li>
          <li>
            biggest contributer to slack channels like <code>#dev-til</code>,{" "}
            <code>#til-sql</code>, <code>#life-sql</code>,{" "}
            <code>#development</code>
          </li>
        </ul>
      </article>
      <article>
        <h3>Docs writer 📄 ✍️</h3>
        <p>Ensure code is maintainable and others can quickly contribute.</p>
        <ul>
          <li>Develop and document with Storybook</li>
          <li>
            Singlehandedly created our internal Docs as Code solution with
            MKDocs
          </li>
          <li>20k+ words of documentation</li>
          <li>
            See my <a href="fullchee.github.io/notes">Notes website</a> where I
            learn in public.
          </li>
        </ul>
      </article>
      <article>
        <h3>Dragon boat paddler 🐉 🛶</h3>
        <ul>
          <li>paddling, lifting, biking, running and meditating</li>
        </ul>
        <p className="py-4"></p>
      </article>
    </section>
  );
};

export default AboutMe;
