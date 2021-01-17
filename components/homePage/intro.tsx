import Image from "next/image";

const Intro = () => {
  return (
    <section className="flex justify-between">
      <div className="flex-col flex flex-wrap pb-8 ease-in">
        <h1 id="hi" className="text-6xl pb-4 font-display ">
          Hi! I'm Fullchee
        </h1>
        <h2 id="job-title" className="pt-2 text-4xl max-w-lg font-display">
          Front end developer at IBM
        </h2>
      </div>
      <div>
        <div className="rounded-full  z-10">
          <Image
            className="rounded-full relative"
            src="/professional-face.jpg"
            width={150}
            height={150}
            alt="picture of Fullchee in a fancy shirt and suit"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Intro;
