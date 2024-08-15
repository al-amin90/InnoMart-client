import { useState } from "react";
import LoginImg from "../assets/login.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SocialMediaLogin from "../Component/SocialMediaLogin";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const [isShowed, setIsShowed] = useState(true);
  const { loginUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    loginUser(email, password).then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };

  return (
    <div className="max-w-[1920px] md:pt-[64px] mx-auto md:w-[85%] pb-10">
      <div className=" rounded-3xl lg:shadow ">
        <div className="w-full justify-center items-center flex-col lg:flex-row-reverse flex">
          <div className="w-full py-8 lg:w-1/2">
            <img
              src={LoginImg}
              className="object-cover rounded-xl object-center"
              alt=""
            />
          </div>

          <div className="w-full lg:w-1/2 max-w-lg  p-5">
            <div className=" p-5 ">
              <div className="pb-8 ">
                <p className="text-3xl font-bold  relative z-10  text-[#3CC6CE] text-center underline">
                  Login Here!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 w-full ">
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
                  Login
                </button>
              </form>

              <div className="">
                <p className="text-center mt-7 ">
                  New here?{" "}
                  <span
                    onClick={() => navigate("/singUp")}
                    className="font-normal duration-300 transition-all text-[#ff5537] underline cursor-pointer"
                  >
                    Create a New Account
                  </span>
                </p>
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

export default Login;
