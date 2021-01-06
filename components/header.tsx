import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="sticky bg-white dark:border-blue-700 border-t-4 top-0 border-blue-500">
        <div className="max-w-5xl mx-auto px-6">
          <nav>
            <ul className="flex max-w-7xl">
              <li className="mr-auto pt-4">
                <Link href="/">
                  <a href="/">
                    <Image
                      className="cursor-pointer"
                      src="/fullchee.svg"
                      alt="home page"
                      width={50}
                      height={50}
                    />
                  </a>
                </Link>
              </li>
              <li className="p-8 text-xl">
                <Link href="/blog">
                  <p
                    tabIndex={0}
                    className="cursor-pointer transition-colors hover:text-blue-500 hover:underline font-mono"
                  >
                    blog
                  </p>
                </Link>
              </li>
              <li className=" p-8 text-xl hover:bg-blue-100 focus:bg-blue-100">
                <Link href="/uses">
                  <p
                    tabIndex={0}
                    className="cursor-pointer transition-colors hover:text-blue-500 hover:underline font-mono"
                  >
                    uses
                  </p>
                </Link>
              </li>
              <li>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <title>Night mode</title>
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className=" h-20 bg-gradient-to-b from-gray-100 to-transparent"></div>
    </>
  );
};

export default Header;
