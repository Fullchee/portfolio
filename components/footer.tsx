import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="py-28 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href={`https://github.com/fullchee`}
            className="mx-3 font-bold hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fullchee-zhang"
            className="mx-3 font-bold hover:underline"
          >
            LinkedIn
          </a>
        </div>
        <Link href="/attributions">
          <a href="/attributions" className="underline hover:text-blue-500">
            This page is powered by Creative Commons Resources
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
