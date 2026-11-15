import Image from "next/image";
import Link from "next/link";

const HeaderItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <li className="px-4 py-8 text-xl">
      <Link href={href} className="pb-1 font-mono-display tracking-wider no-underline">
        {label}
      </Link>
    </li>
  );
};

export const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10 border-t-4 border-brand-500 bg-page dark:border-brand-700">
        <nav className="mx-auto max-w-6xl pl-2 md:px-20">
          <ul className="no-list-item flex max-w-7xl list-none">
            <li className="mr-auto pt-4 pl-0">
              <Link href="/">
                <Image
                  src="/fullchee.svg"
                  alt="home page"
                  width={50}
                  height={40}
                  className="dark:invert"
                />
              </Link>
            </li>
            <HeaderItem href="/project" label="projects" />
            {/* <HeaderItem href="https://fullcheezhang.com" label="notes" /> */}
          </ul>
        </nav>
      </div>
      <div className="page-fade-top fixed z-10 h-8 w-screen"></div>
      <div className="page-fade-bottom fixed bottom-0 z-10 h-8 w-screen"></div>
    </>
  );
};
