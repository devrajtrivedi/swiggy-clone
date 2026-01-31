import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Pasta from "../assets/image/Pasta.jpeg";
import categoryData from "./category.json";

const Category = () => {
  const [Category, setCategory] = useState([]);

  const fetchCategory = async () => {
    // const response = await fetch("https://localhost:5173/categories");
    // const data = await response.json();
    console.log("categoryData----->", categoryData);
    setCategory(categoryData || []);
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold">What`s on your mind?</div>
        <div className="flex">
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />{" "}
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight />{" "}
          </div>
        </div>
      </div>
      <div className="flex border borde-red-500 overflow-hidden">
        {Category.map((cat, index) => {
          console.log("cat", cat);
          return (
            <div key={index} className="w-[150px] shrink-0">
              <img src={Pasta} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
