
import RegOrLogin from "../components/RegOrLogin"
import Slider from "react-slick"
function Welcome() {
  
  return (
    <div className="bg-black text-white w-full h-screen p-8">
      <p>Welcome Page</p>
      <RegOrLogin />
      <Slider>
        <div></div>
      </Slider>
    </div>
  )
}

export default Welcome
