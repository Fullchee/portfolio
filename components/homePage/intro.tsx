import Image from "next/image";

const Intro = () => {
  return (
    <section className="flex justify-between">
      <div className="flex-col flex flex-wrap pb-8 ease-in">
        <h1 id="hi" className="text-6xl pb-4 font-display ">
          Hi! I'm Full
          <wbr />
          chee
        </h1>
        <h2 id="job-title" className="pt-2 text-2xl max-w-lg font-display">
          Full-stack developer at <a href="https://www.citylitics.com">Citylitics</a>
        </h2>
        <p className="pt-4 text-xl max-w-lg">
          I make teams faster with docs, tooling and teaching.
        </p>
      </div>
      <div className="rounded-full ease-in">
        <Image
          className="rounded-full relative"
          src="/professional-face.jpg"
          width={150}
          height={150}
          alt="Headshot of Fullchee Zhang in a suit"
        ></Image>
      </div>
    </section>
  );
};

export default Intro;
