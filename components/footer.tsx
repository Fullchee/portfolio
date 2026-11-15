import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-brand-500 bg-brand-50 py-12">
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center justify-center space-y-4 md:w-1/2 md:flex-row md:space-y-0 md:pl-4">
          <a href={`https://github.com/fullchee`} className="mx-3 font-bold no-underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/fullchee" className="mx-3 font-bold no-underline">
            LinkedIn
          </a>
          <Link href="/assets/Fullchee-Resume.pdf" className="mx-3 font-bold no-underline">
            Resume
          </Link>
        </div>

        <p className="text-center text-xs">
          Made with{" "}
          <Link href="/attributions" className="text-center">
            Creative Commons Resources
          </Link>
          , <a href="https://nextjs.org/">Next.js</a>,{" "}
          <a href="https://tailwindcss.com/">Tailwind.css</a> and love ❤️
        </p>
      </div>
    </footer>
  );
};
