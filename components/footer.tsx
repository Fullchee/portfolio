import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="py-28 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href={`https://github.com/fullchee`}
            className="no-underline mx-3 font-bold"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fullchee-zhang"
            className="no-underline mx-3 font-bold"
          >
            LinkedIn
          </a>
          <Link href="/assets/Fullchee-Resume.pdf">
            <a
              href="https://www.linkedin.com/in/fullchee-zhang"
              className="no-underline mx-3 font-bold"
            >
              Resume
            </a>
          </Link>
        </div>
        <Link href="/attributions">
          <a href="/attributions" className="p-4 text-center">
            This page is powered by Creative Commons Resources
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
