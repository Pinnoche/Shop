import Slider from "react-slick";
import deals from "../deals.json";

const GoodSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };

    return (
        <div className="h-dvh w-full  mx-auto mt-20 overflow-hidden">
            <Slider {...settings}>
                {deals.map((deal, index) => (
                    <div key={index} className="w-full h-full">
                        <img
                            className="w-full h-full object-center object-cover"
                            src={deal.image}
                            alt={deal.title}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    ); 
};

export default GoodSlider;
