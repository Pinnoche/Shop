import RegOrLogin from "../components/RegOrLogin";
import GoodSlider from "../components/GoodSlide";
import OurProduct from "../components/OurProduct";
import datas from '../data.json'
import deals from '../deals.json'


function Welcome() {

  return (
    <div className="relative w-full bg-white text-black">
      <div className="w-full absolute top-1/4 left-[30vw] z-20">
        <RegOrLogin />
      </div>
      <GoodSlider />
      <OurProduct datas={deals} header= "Category" />
      <OurProduct datas={datas} header= "Product Preview...." />

    </div>
  );
}

export default Welcome;
