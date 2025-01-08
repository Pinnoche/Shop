import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";

const OurProduct = ({ datas, header }) => {
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
    <div className="w-full h-full  bg-white overflow-hidden">
      <div className="p-4 bg-purple-500">
        <h2 className="text-white font-semibold text-2xl text-start">
          {header}
        </h2>
      </div>
      <div
        className=""
        onMouseEnter={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
      >
        <Slider {...settings}>
          {datas.map((data, index) => (
            <motion.div
              key={index}
              className="w-full h-full relative bg-white overflow-hidden hover:scale-105 transition-transform duration-300"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-96">
                <img src={data.src} alt={data.alt} className="h-full w-full" />
              </div>
              <div className="h-12 absolute truncate bottom-0  w-full bg-black bg-opacity-70 ">
                <p className="text-center sm:font-medium font-normal sm:text-sm lg:text-lg text-xs text-white">
                  {data.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurProduct;
