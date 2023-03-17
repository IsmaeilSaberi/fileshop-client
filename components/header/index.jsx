import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillGoogleCircle,
  AiFillMail,
} from "react-icons/ai";

const Header = () => {
  const [logoHover, setLogoHover] = useState(0);
  return (
    <header className="container mx-auto py-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col relative h-[13vw]">
          <Link
            onMouseEnter={() => setLogoHover(1)}
            onMouseLeave={() => setLogoHover(0)}
            href={"/"}
            className="logo bg-white flex flex-col gap-2 p-4 z-30 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-150 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)] text-center"
          >
            <div className="flex justify-center items-center">
              <Image
                className="rounded-lg"
                width={100}
                height={100}
                src={"/logo.ico"}
                alt="logo"
              />
            </div>
            <div>فروشگاه فایل اسماعیل</div>
          </Link>
          <div
            onMouseEnter={() => setLogoHover(1)}
            onMouseLeave={() => setLogoHover(0)}
            className={
              logoHover == 0
                ? "absolute bg-red-100 bottom-20 right-0 left-0 z-10 flex justify-around items-center text-[1.6rem] p-2 text-indigo-600 rounded-bl-lg rounded-br-lg transition-all duration-300"
                : "absolute bg-red-100 bottom-2 right-0 left-0 z-10 flex justify-around items-center text-[1.6rem] p-2 text-indigo-600 rounded-bl-lg rounded-br-lg transition-all duration-300"
            }
          >
            <Link
              target="_blank"
              className="transition-all duration-300 hover:text-orange-400"
              href={"/"}
            >
              <AiFillYoutube />
            </Link>
            <Link
              target="_blank"
              className="transition-all duration-300 hover:text-orange-400"
              href={"/"}
            >
              <AiFillInstagram />
            </Link>
            <Link
              target="_blank"
              className="transition-all duration-300 hover:text-orange-400"
              href={"/"}
            >
              <AiFillGoogleCircle />
            </Link>
            <Link
              target="_blank"
              className="transition-all duration-300 hover:text-orange-400"
              href={"/"}
            >
              <AiFillMail />
            </Link>
          </div>
        </div>
        <div>1</div>
      </div>
    </header>
  );
};

export default Header;
