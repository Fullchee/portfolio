const AboutMe = () => {
  return (
    <section className="ease-in">
      <h2 className="font-mono-display tracking-wider text-2xl">About me</h2>
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
        <ul>
          <li>Develop and document with Storybook</li>
          <li>
            Singlehandedly created our internal Docs as Code solution with
            MKDocs
            <ul>
              <li>
                See <a href="https://fullcheezhang.com">my Notes website</a> to
                get a sense of what it looks like
              </li>
              <li>30k+ words of docs</li>
            </ul>
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
