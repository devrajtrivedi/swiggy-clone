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
        ></div>
      </div>

      <header className="p-3 shadow-xl text-[#686b78]">
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
          <nav className="flex list-none gap-10 ml-auto text-[18px] font-semibold ">
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
