import { useState } from "react";
import { motion } from "framer-motion";
import RegOrLogin from "../components/RegOrLogin";
import Category from '../components/Category';
import GoodSlider from "../components/GoodSlide";
import datas from "../data.json";
import Slider from "react-slick";
import PrevArrow from "../components/PrevArrow";
import NextArrow from "../components/NextArrow";

function Welcome() {
  const [showArrow, setShowArrow] = useState(false);
  const slidesToShow = 4;
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,

    nextArrow: <NextArrow slidesToShow={slidesToShow} showArrow={showArrow} />,
    prevArrow: <PrevArrow showArrow={showArrow} />,
  };

  return (
    <div className="relative p-6 bg-black text-white w-full">
      <div className="w-full absolute top-1/4 left-[30vw] z-20">
        <RegOrLogin />
      </div>
      <GoodSlider/>
      <Category/> 
      <div className="w-full my-10 bg-white rounded-md overflow-hidden">
        <div className="p-4 bg-red-500">
          <h2 className="text-black font-semibold text-2xl text-center">
            Your Products
          </h2>
        </div>
        <div
          onMouseEnter={() => setShowArrow(true)}
          onMouseLeave={() => setShowArrow(false)}
        >
          <Slider {...settings}>
            {datas.map((data, index) => (
              <motion.div
                key={index}
                className=""
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.8 }}
              >
                <img src={data.src} alt={data.alt} />
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
