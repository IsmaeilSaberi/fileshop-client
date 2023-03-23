import Image from "next/image";
import Link from "next/link";
import { HiShoppingBag } from "react-icons/hi";
import { FcSearch } from "react-icons/fc";

const Slider2box = () => {
  return (
    <article className="sliderItem p-2 transition-all duration-200 hover:mt-1">
      <div className="relative h-[32rem] w-72 bg-yellow-300 rounded-md shadow-[0px_1px_10px_rgba(0,0,0,0.25)] hover:shadow-[0px_2px_10px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-center p-1">
          <Link href={"/"} target="_blank">
            <Image
              className="p-2"
              alt="alt"
              width={288}
              height={120}
              src={"/images/shop1.jpg"}
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3 ">
          <Link href={"/"} target="_blank">
            <h3 className="m-2">عنوان محصول محصول محصول محصول محصول</h3>
          </Link>

          <div className="categories flex justify-start items-center gap-1 flex-wrap">
            <Link
              href={""}
              className="bg-zinc-200 px-2 py-1 rounded-md transition-all duration-200 hover:bg-zinc-300"
            >
              خواندنی
            </Link>
            <Link
              href={""}
              className="bg-zinc-200 px-2 py-1 rounded-md transition-all duration-200 hover:bg-zinc-300"
            >
              سلامت
            </Link>
            <Link
              href={""}
              className="bg-zinc-200 px-2 py-1 rounded-md transition-all duration-200 hover:bg-zinc-300"
            >
              روابط
            </Link>
          </div>
          <div className="absolute bottom-2 w-full flex justify-between items-center">
            <div className="flex gap-1">
              <Link href={""}>
                <FcSearch className="w-10 h-10 p-1 mr-1 rounded-lg cursor-pointer bg-zinc-400 transition-all duration-200 text-white hover:bg-orange-400" />
              </Link>
              <Link href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="flex justify-center items-center w-10 h-10 p-1 mr-1 rounded-lg cursor-pointer bg-zinc-400 transition-all duration-200 text-white hover:bg-orange-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex gap-1">
              <Link href={""}>
                <HiShoppingBag className="w-10 h-10 p-1 mr-1 rounded-lg cursor-pointer bg-green-400 transition-all duration-200 text-white hover:bg-green-500" />
              </Link>

              <div className="bg-zinc-500 rounded-tr-md rounded-br-md p-1 text-white flex justify-center items-center">
                5000 تومان
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Slider2box;