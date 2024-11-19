import RegOrLogin from "../components/RegOrLogin";
import datas from "../data.json";
import Slider from "react-slick";
import PrevArrow from "../components/PrevArrow";
import NextArrow from "../components/NextArrow";

function Welcome() {
  const slidesToShow = 4;
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,

    nextArrow: <NextArrow slidesToShow={slidesToShow} />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative bg-black text-white w-full h-screen ">
      <div className="w-full absolute left-[30vw] z-20">
        <RegOrLogin />
      </div>
      <div className="bg-transparent px-10 py-4">
        <Slider {...settings}>
          {datas.map((data, index) => (
            <div key={index} className="">
              <img src={data.src} alt={data.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Welcome;
