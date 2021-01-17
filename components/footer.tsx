import Link from "next/link";
const Footer = () => {
  return (
    <footer className="py-12 bg-accent-1 border-t border-accent-2 mt-16">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row justify-center items-center md:pl-4 md:w-1/2 space-y-4 md:space-y-0">
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
            <a className="no-underline mx-3 font-bold">Resume</a>
          </Link>
        </div>
        <Link href="/attributions">
          <a className="no-underline text-center">
            This page is powered by Creative Commons Resources
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
