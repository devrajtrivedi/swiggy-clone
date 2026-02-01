import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { IoPersonSharp } from "react-icons/io5";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <FaSearch />,
      name: "search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offer",
      sup: "New",
    },
    {
      icon: <LiaHandsHelpingSolid />,
      name: "Help",
    },
    {
      icon: <IoPersonSharp />,
      name: "Signin",
    },
    {
      icon: <FaCartPlus />,
      name: "Cart",
      sup: 0,
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 "
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex:999999999
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          {/* FORM GOES HERE */}
          <div
  onClick={(e) => e.stopPropagation()}
  className="w-[500px] bg-white h-full absolute duration-[400ms] p-6"
  style={{ left: toggle ? "0%" : "-100%" }}
>
  {/* Close Button */}
  <div className="text-right mb-6">
    <button
      onClick={hideSideMenu}
      className="text-2xl text-gray-500 hover:text-black"
    >
      ✕
    </button>
  </div>

  {/* Search Input */}
  <input
    type="text"
    placeholder="Search for area, street name.."
    className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
  />

  {/* Current Location */}
  <div className="border rounded-md p-4 mt-6 cursor-pointer hover:bg-gray-50">
    <div className="flex items-center gap-3">
      <span className="text-lg">📍</span>
      <div>
        <p className="font-semibold">Get current location</p>
        <p className="text-sm text-gray-500">Using GPS</p>
      </div>
    </div>
  </div>

  {/* Recent Searches */}
  <div className="mt-8">
    <p className="text-sm text-gray-400 mb-4">RECENT SEARCHES</p>

    <div className="border-b py-4 cursor-pointer hover:bg-gray-50">
      <p className="font-semibold">WsCube Tech</p>
      <p className="text-sm text-gray-500">
        Bhaskar Circle, Ratanada, Jodhpur, Rajasthan, India
      </p>
    </div>

    <div className="py-4 cursor-pointer hover:bg-gray-50">
      <p className="font-semibold">WsCube Tech</p>
      <p className="text-sm text-gray-500">
        Gopal Pura Mode, Jaipur, Rajasthan, India
      </p>
    </div>
  </div>
</div>

            {/* FORM END HERE */}

        </div>
      </div>

      <header className="p-3 shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px], mx-auto   flex items-center">
          <div className="w-[100px]">
            <img src="image/Swiggylogo.png" className="w-full " alt="logo" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black] ">
              Ratanda
            </span>{" "}
            jodhpur, Rajasthan,india
            <RxCaretDown
              fontSize={25}
              className=" inline  text-[#fc8019] cursor-pointer "
              onClick={showSideMenu}
            />
          </div>
          <nav className="hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold ">
          
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex cursor-pointer hover:text-[#fc8019] items-center gap-2 "
                >
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
