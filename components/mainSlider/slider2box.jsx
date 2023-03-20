import Image from "next/image";
import Link from "next/link";
import { HiShoppingBag } from "react-icons/hi";

const Slider2box = () => {
  return (
    <article className="sliderItem p-2">
      <Link href={"/"} target="_blank">
        <div className="relative h-[24rem] w-72 bg-yellow-300 rounded-md shadow-[0px_1px_10px_rgba(0,0,0,0.25)] hover:shadow-[0px_2px_10px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-center p-1">
            <Image
              alt="alt"
              width={288}
              height={140}
              src={"/images/shop1.jpg"}
            />
          </div>
          <div>
            <h3 className="m-2">عنوان محصول</h3>
            <div className="absolute bottom-2 w-full flex justify-between items-center">
              <HiShoppingBag className="w-10 h-10 p-1 mr-1 rounded-lg cursor-pointer bg-zinc-400 transition-all duration-200 text-white hover:bg-orange-400" />
              <div className="bg-zinc-500 rounded-tr-md rounded-br-md p-1 text-white">
                5000 تومان
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Slider2box;
