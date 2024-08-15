import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navLinks = (
    <div className="text-base font-semibold flex gap-4 *:cursor-pointer">
      <li>Home</li>
      <li>Electronic</li>
      <li>Blog</li>
      <li>Pages</li>
      <li>Contact</li>
    </div>
  );

  return (
    <div className='max-w-7xl w-[90%] mx-auto'>
      <div className="navbar my-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >{navLinks}</ul>
          </div>
          <img src="/logo.png" className="w-11" alt="" />
          <a className=" text-xl">InnoMart</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/singUp" className="bg-[#FFA835] rounded-full text-white cursor-pointer px-5 font-medium py-2">Sing Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
