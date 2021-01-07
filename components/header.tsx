import Link from "next/link";
import Image from "next/image";

const HeaderItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <li className="p-8 text-xl">
      <Link href={href}>
        <a
          href={href}
          className="cursor-pointer transition-colors hover:text-blue-500 hover:underline font-mono"
        >
          {label}
        </a>
      </Link>
    </li>
  );
};

export const Header = () => {
  return (
    <>
      <div className="sticky bg-white dark:border-blue-700 border-t-4 top-0 border-blue-500 z-10">
        <div className="max-w-5xl mx-auto pl-12 md:pl-32">
          <nav>
            <ul className="flex max-w-7xl">
              <li className="mr-auto pt-4">
                <Link href="/">
                  <a href="/">
                    <Image
                      src="/fullchee.svg"
                      alt="home page"
                      width={50}
                      height={50}
                    />
                  </a>
                </Link>
              </li>
              <HeaderItem href="/blog" label="blog" />
              <HeaderItem href="/uses" label="uses" />
            </ul>
          </nav>
        </div>
      </div>
      <div className="fixed z-10 h-16 w-screen bg-gradient-to-b from-white to-transparent"></div>
      <div className="fixed z-10 h-16 w-screen bg-gradient-to-b from-transparent to-white bottom-0"></div>
    </>
  );
};

export default Header;
