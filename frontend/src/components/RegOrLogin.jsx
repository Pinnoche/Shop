import { useState } from "react";
import axios from "../axios";
import verified from "@/assets/icons/verified.png";
export default function RegOrLogin() {
  const [hideLogin, setHideLogin] = useState(true);
  const [data, setData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const loginHidden = () => {
    setHideLogin(false);
  };
  const handleChange = (e) =>{
    const {id, value} = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      await axios.post("/api/user/signup", data);
      
    } catch (error) {
      console.log(error)
    }
    loginHidden();
  };
  return (
    <>
      {hideLogin && (
        <div className="max-w-xl rounded-md p-6 bg-white text-black">
          <div className="w-full flex justify-end">
            <p
              onClick={loginHidden}
              className="text-2xl cursor-pointer hover:text-red-500 font-semibold"
            >
              X
            </p>
          </div>
          <h1 className="font-bold text-3xl text-center my-5">
            Register/Sign in
          </h1>
          <div className="w-full flex justify-center items-center gap-3 my-5">
            <img src={verified} alt="Verified" width={20} />
            <p className="text-xl">Your information is protected</p>
          </div>

          <form className="flex flex-col gap-8" onSubmit={submitForm}>
            <div className="flex flex-col gap-5">
            <input
                type="text"
                id="username"
                placeholder="Username"
                value={data.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 hover:ring-2 hover:ring-black focus:ring-0 rounded-md"
              />
              <input
                type="text"
                id="first_name"
                placeholder="First Name"
                value={data.first_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 hover:ring-2 hover:ring-black focus:ring-0 rounded-md"
              />

              <input
                type="text"
                id="last_name"
                placeholder="Last Name"
                value={data.last_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 hover:ring-black hover:ring-2 focus:ring-0 rounded-md"
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 hover:ring-2 hover:ring-black focus:ring-0 rounded-md"
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 hover:ring-2 hover:ring-black focus:ring-0 rounded-md"
              />
            </div>
            <button className="w-full bg-red-400 py-2 px-4 rounded-md font-bold text-2xl text-white cursor-pointer hover:bg-red-600">
              Continue
            </button>
          </form>
        </div>
      )}
    </>
  );
}
