import React, { useContext, useState } from "react";
import registerImg from "../assets/505.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SocialMediaLogin from "../Component/SocialMediaLogin";
import useAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";

const SingUp = () => {
  const { createUser } = useAuth();
  const [isShowed, setIsShowed] = useState(true);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;

    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

    console.log(name, email, password);

    // create new user
    createUser(email, password)
    .then((result) => {
        updateProfile(result.user, {
            displayName: name
        })
        console.log(result);
        navigate("/")
    })
    .catch((error) => {
        console.log(error);
    }
    )
  };

  return (
    <div>
      <div className="max-w-[1920px] pt-[34px] mx-auto md:w-[85%] pb-10">
        <div className=" rounded-3xl lg:shadow ">
          <div className="w-full justify-center items-center flex-col lg:flex-row flex">
            <div className="w-full  lg:w-1/2">
              <img
                src={registerImg}
                className="object-cover rounded-xl object-center"
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

                <form onSubmit={handleSubmit} className="space-y-5 w-full ">
                  <div>
                    <div className="border  border-solid border-[#5B5A5A] p-3 w-full rounded-md">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="px-4    py-1 w-full focus:outline-0"
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
                        className="px-4 py-1  w-full focus:outline-0"
                      />
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="border relative  border-solid border-[#5B5A5A] p-3 w-full rounded-md">
                      <input
                        type={isShowed ? "password" : "text"}
                        name="password"
                        id="password"
                        placeholder="password"
                        className="px-4 py-1  w-full focus:outline-0"
                      />
                      <div
                        onClick={() => setIsShowed(!isShowed)}
                        className="absolute right-4 text-xl cursor-pointer top-4"
                      >
                        {isShowed ? (
                          <FaEyeSlash className=" cursor-pointer"></FaEyeSlash>
                        ) : (
                          <FaEye className=" cursor-pointer" />
                        )}
                      </div>
                    </fieldset>
                  </div>

                  <button
                    type="submit"
                    className="py-4 w-full px-5 text-lg  bg-[#3CC6CE] rounded-full m-auto hover:shadow-xl font-semibold"
                  >
                    Sing Up
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
                <p className="text-center mt-6 divider divider-neutral ">
                  Or sign in with
                </p>
                <SocialMediaLogin></SocialMediaLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
