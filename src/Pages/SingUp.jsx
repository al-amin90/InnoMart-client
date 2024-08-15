import React, { useState } from "react";
import registerImg from "../assets/505.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingUp = () => {
const [isShowed ,setIsShowed] = useState(false)

const handleSubmit = {

}

  return (
    <div>
      <div className="max-w-[1920px] pt-[64px] mx-auto md:w-[85%] pb-10">
        <div className=" rounded-3xl lg:shadow ">
          <div className="w-full justify-center items-center flex-col lg:flex-row flex">
            <div className="w-full rounded-xl lg:w-1/2">
              <img
                src={registerImg}
                className="object-cover object-center"
                alt=""
              />
            </div>

            <div className="w-full lg:w-1/2 max-w-lg  p-5">
              <div className=" p-5 ">
                <div className="pb-8 ">
                  <p className="text-3xl font-bold  relative z-10  text-[#3CC6CE] text-center underline">
                    Register Here!
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 w-full "
                >
                  <div>
                    <div className="border text-white border-solid border-[#5B5A5A] p-3 w-full rounded-md">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="px-4   text-white py-1 w-full focus:outline-0"
                      />
                    </div>
                  </div>

                  <div>
                    <fieldset className="border border-solid border-[#5B5A5A] p-3 w-full rounded-md">
                      <input
                        type="email"
                        name="email"                      
                        id="email"
                        placeholder="Email"
                        className="px-4 py-1 text-white w-full focus:outline-0"
                      />
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="border relative text-white border-solid border-[#5B5A5A] p-3 w-full rounded-md">
                      <input
                        type={isShowed ? "password" : "text"}
                        name="password"
                        id="password"
                        placeholder="password"
                        className="px-4 py-1 text-white w-full focus:outline-0"
                      />
                      <div
                        onClick={() => setIsShowed(!isShowed)}
                        className="absolute right-4 text-xl cursor-pointer top-4"
                      >
                        {isShowed ? (
                          <FaEyeSlash className="text-white cursor-pointer"></FaEyeSlash>
                        ) : (
                          <FaEye className="text-white cursor-pointer" />
                        )}
                      </div>
                    </fieldset>                    
                  </div>

                  <div>
                    <legend className="text-white mb-2 ">
                      Select Your Image...
                    </legend>
                    <input
                      type="file"
                      id="image"
                      placeholder="Image"
                      className="file-input text-white  file-input-bordered w-full"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-4 w-full px-5 text-lg text-white bg-[#3CC6CE] rounded-full m-auto hover:shadow-xl font-semibold"
                  >
                    Sing Ip
                  </button>
                </form>

                <div className=" mt-7 text-center mb-6 font-medium text-lg">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className=" font-normal duration-300 cursor-pointer transition-all hover:text-[#f67f6b] text-[#3CC6CE] underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
