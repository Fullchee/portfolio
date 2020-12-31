import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky bg-white border-t-4 top-0 border-blue-500">
      <div className="max-w-7xl mx-auto sm:px-6">
        <nav>
          <ul className="flex max-w-7xl">
            <li className="mr-auto pt-4">
              <Link href="/">
                <Image
                  className="cursor-pointer"
                  src="/fullchee.svg"
                  alt="home page"
                  width={50}
                  height={50}
                />
              </Link>
            </li>
            <li className=" p-8 text-xl">
              <Link href="/blog">
                <p className="cursor-pointer">Blog</p>
              </Link>
            </li>
            <li className=" p-8 text-xl">
              <Link href="/uses">
                <p className="cursor-pointer">Uses</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
