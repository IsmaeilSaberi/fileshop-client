import Slider2box from "./slider2box";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { useRef } from "react";

const Slider2 = () => {
  const carouselRef = useRef();
  const carouselSwitcher = (data) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo(
        carouselRef.current.scrollLeft + width * data,
        0
      );
    }
  };

  return (
    <main className="container mx-auto my-20">
      <section className="flex flex-col gap-3 m-2">
        <header className="m-4 flex justify-between items-center">
          <h2 className="text-orange-400 text-2xl border-orange-400 border-r-2 pr-2">
            محصولات
          </h2>
          <div className="flex items-center gap-1">
            <AiOutlineRight
              onClick={() => carouselSwitcher(1)}
              className="cursor-pointer bg-zinc-200 transition-all duration-200 hover:bg-orange-500 w-10 h-10 p-2 rounded"
            />
            <AiOutlineLeft
              onClick={() => carouselSwitcher(-1)}
              className="cursor-pointer bg-zinc-200 transition-all duration-200 hover:bg-orange-500 w-10 h-10 p-2 rounded"
            />
          </div>
        </header>
        <div
          ref={carouselRef}
          className="sliderContainer w-full max-w-7xl overflow-x-scroll"
        >
          <div className="flex justify-between itemas-center gap-2">
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
            <Slider2box />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Slider2;
