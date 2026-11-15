import Image from "next/image";

export const Intro = () => {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col flex-wrap pb-8 ease-in">
        <h1 id="hi" className="pb-4 font-display text-6xl">
          Hi! I'm Full
          <wbr />
          chee
        </h1>
        <p id="job-title" className="max-w-lg pt-2 pb-4 font-display text-2xl">
          Full-stack developer at <a href="https://www.citylitics.com">Citylitics</a>
        </p>
        <p className="max-w-lg pt-4 text-xl">
          I make teams faster with docs, tooling and teaching.
        </p>
      </div>
      <div className="rounded-full ease-in">
        <Image
          className="relative rounded-full"
          src="/professional-face.jpg"
          width={150}
          height={150}
          alt="Headshot of Fullchee Zhang in a suit"
        ></Image>
      </div>
    </section>
  );
};
