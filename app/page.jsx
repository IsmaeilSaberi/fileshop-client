import Slider2 from "../components/sliders/mainSlider/slider2";
import MiddleBanner from "../components/middle-banner";
import GraphicCategories from "../components/grapic-cats";
import GraphicSlider from "../components/sliders/graphic-slider";
import Blogs from "../components/blogs";
// import MainSlider from "../components/sliders/mainSlider";

const Home = () => {
  return (
    <div>
      <main className="flex flex-col gap-2">
        {/* <MainSlider /> */}
        <Slider2 title="دانلودها" linkComp="downloads" />
        <MiddleBanner />
        <Slider2 title="محصولات" linkComp="products" />
        <GraphicCategories />
        <GraphicSlider />
        <Blogs />
        <div className="p-2 m-2">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
