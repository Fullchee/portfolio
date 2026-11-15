import Link from "next/link";

const Emoji = ({ children }: { children: string }) => <span aria-hidden="true">{children}</span>;

export const AboutMe = () => {
  return (
    <section className="pb-4 ease-in">
      <h2 className="font-mono-display text-2xl tracking-wider">About me</h2>
      <article>
        <h3>
          Docs writer <Emoji>📄 ✍️</Emoji>
        </h3>
        <ul>
          <li>
            Built Forma's internal docs-as-code site with MkDocs, on my own
            <ul>
              <li>30k+ words of docs</li>
              <li>
                <a href="https://fullcheezhang.com">My public notes</a> use the same setup
              </li>
            </ul>
          </li>
          <li>Develop and document components with Storybook</li>
        </ul>
      </article>
      <article>
        <h3>
          Teacher and learner <Emoji>💡</Emoji>
        </h3>
        <ul>
          <li>Led a monthly Dev Article Club at Forma</li>
          <li>
            Top contributor to Slack channels like <code>#dev-til</code>, <code>#til-sql</code>,{" "}
            <code>#life-sql</code> and <code>#development</code>
          </li>
        </ul>
      </article>
      <article>
        <h3>
          Tooling tinkerer <Emoji>🛠️</Emoji>
        </h3>
        <ul>
          <li>
            <Link href="/uses">The tools I use</Link>
          </li>
          <li>
            <Link href="/llm/tooling">My LLM tooling</Link>
          </li>
        </ul>
      </article>
      <article>
        <h3>
          Dragon boat paddler <Emoji>🐉 🛶</Emoji>
        </h3>
        <ul>
          <li>Paddling, lifting, biking, running and meditating</li>
        </ul>
      </article>
    </section>
  );
};
