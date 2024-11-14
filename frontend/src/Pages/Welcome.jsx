import { useEffect } from "react"
import RegOrLogin from "../components/RegOrLogin"
function Welcome() {
  useEffect ( () => {

  }, [])
  return (
    <div className="bg-black text-white w-full h-full p-8">
      <p>Welcome Page</p>
      <RegOrLogin />
    </div>
  )
}

export default Welcome
