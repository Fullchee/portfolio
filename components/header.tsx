import Link from "next/link";
import Image from "next/legacy/image";

const HeaderItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <li className="px-4 py-8 text-xl">
      <Link
        href={href}
        className="no-underline font-monoDisplay tracking-wider pb-1"
      >
        {label}
      </Link>
    </li>
  );
};

export const Header = () => {
  return (
    <>
      <div className="sticky bg-white dark:border-blue-700 border-t-4 top-0 border-blue-500 z-10">
        <nav className="max-w-6xl mx-auto pl-2 md:px-20">
          <ul className="list-none flex max-w-7xl no-list-item">
            <li className="mr-auto pt-4 pl-0">
              <Link href="/">
                <Image
                  src="/fullchee.svg"
                  alt="home page"
                  width={50}
                  height={50}
                />
              </Link>
            </li>
            <HeaderItem href="/project" label="projects" />
            {/* <HeaderItem href="https://fullcheezhang.com" label="notes" /> */}
          </ul>
        </nav>
      </div>
      <div className="fixed z-10 h-8 w-screen white-to-transparent"></div>
      <div className="fixed z-10 h-8 w-screen transparent-to-white bottom-0"></div>
    </>
  );
};

export default Header;
