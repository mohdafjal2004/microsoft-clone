import React from "react";
import surfacel from "./surfacel.png";
import logo from "./mslogo.png";
import win11 from "./11.png";
import surface from "./surface.png";
import xbox from "./xbox.png";
import search from "./search.png";
import cart from "./cart.png";
import user from "./user.png";

const Abc = () => {
  return (
    <div>
      <div className="container mx-auto relative">
        <div className="Navbar flex justify-between items-center p-[0.08rem] md:px-12 cursor-pointer  ">
          <div className="flex justify-center items-center  md:order-2 ">
            <div className="hamburger inline-block p-4 cursor-pointer md:hidden ">
              <div className="line h-0.5 w-6 my-1 bg-black"></div>
              <div className="line h-0.5 w-6 my-1 bg-black"></div>
              <div className="line h-0.5 w-6 my-1 bg-black"></div>
            </div>
            <div className="search md:hidden w-4 mr-6">
              <img src={search} alt="" />
            </div>
          </div>
          <div className="logo text-center items-center flex md:order-1">
            <div>
              <img src={logo} alt="" className="p-4 w-[9rem] " />
            </div>
            <div className="features  w-fit bg-gray-400 inset-0  absolute -translate-x-96  md:flex md:bg-white md:w-auto md:static md:mx-4 md:space-x-4  md:translate-x-0 md:text-xs md:font-normal">
              <div className=" features-items sm:w-24 hover:underline hover:underline-offset-[0.20rem] decoration-[3px]">
                Microsoft 365
              </div>
              <div className="features-items hover:underline hover:underline-offset-[0.20rem] decoration-[3px]">
                Office
              </div>
              <div className="features-items hover:underline hover:underline-offset-[0.20rem] decoration-[3px]">
                Windows
              </div>
              <div className="features-items hover:underline hover:underline-offset-[0.20rem] decoration-[3px]">
                Surface
              </div>
              <div className="features-items hover:underline hover:underline-offset-[0.20rem] decoration-[3px]">
                Xbox
              </div>
              <div className="features-items hover:underline hover:underline-offset-[0.20rem] decoration-[3px]">
                Support
              </div>
            </div>
          </div>
          <div className=" account text-center md:order-3 flex items-baseline  ">
            <div className="allmicrosoft hidden  md:block w-2/3  hover:underline hover:underline-offset-[0.20rem] decoration-[3px] md:text-xs md:font-normal">
              All microsoft
            </div>
            <div className="hidden md:flex justify-around ">
              <span className=" md:hidden xl:flex ml-2 w-2/3 hover:underline hover:underline-offset-[0.20rem] decoration-[3px] md:text-xs md:font-normal">
                Search
              </span>
              <div className="search md:flex hidden md:ml-3 xl:ml-[0.14rem] w-4 mr-3 ">
                <img src={search} alt="" />
              </div>
            </div>

            <div className="flex space-x-2 items-baseline md:space-x-4">
              <div className="md:flex">
                <span className="hidden md:block md:text-xs md:font-normal hover:underline hover:underline-offset-[0.20rem] decoration-[3px]">
                  Cart
                </span>
                <img src={cart} alt="" className="cart w-4 mx-3" />
              </div>
              <div className="md:flex">
                <span className="hidden md:block md:text-xs md:font-normal w-14">
                  Sign in
                </span>
                <img src={user} alt="" className="user  w-4 mx-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="slider  flex flex-col-reverse md:flex-row bg-[#F2F2F2]   md:mx-10">
          <div className="left flex flex-col justify-center items-center md:items-baseline py-12 ml-10">
            <h2 className="text-xl md:text-4xl md:mx-5 mb-2 font-medium md:w-3/4  ">
              Surface laptop 4
            </h2>
            <p className="w-3/4 md:mx-5 text-sm mb-2 ">
              Next-gen design, with improved power, speed and sound for
              outstanding daily productivity, Microsoft Teams* and video calls,
              Microsoft 365.
            </p>
            <button className="text-white bg-black py-[0.5rem] mx-5 my-4 px-4 font-semibold text-sm">
              Shop now
            </button>
          </div>
          <div className="right ">
            <img className="w-[60rem] sm:w-[64rem]" src={surfacel} alt="" />
          </div>
        </div>
        <div className="promo space-y-6 md:flex   my-16 md:justify-center md:items-baseline md:my-16 ">
          <div className="item  flex font-medium items-center mx-4 md:mx-10 space-x-4 md:flex-col">
            <img src={win11} alt="" />
            <span className="md:w-[7rem] ">Choose your Microsoft 365</span>
          </div>
          <div className="item  flex font-medium items-center mx-4 md:mx-7  space-x-2 md:flex-col">
            <img src={surface} alt="" />
            <span className="md:w-[7rem]">Explore Surface devices</span>
          </div>
          <div className="item  flex font-medium items-center mx-4 md:mx-7  space-x-2 md:flex-col">
            <img src={xbox} alt="" />
            <span>Buy Xbox games</span>
          </div>
          <div className="item  flex font-medium items-center mx-4 md:mx-7  space-x-2 md:flex-col">
            <img src={win11} alt="" />
            <span>Get Windows 11</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abc;
