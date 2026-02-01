import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

const TopRest = () => {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);

  const cardWidth = 273; // card width
  const visibleCards = 4;

  useEffect(() => {
    fetch("/data/restaurantChains.json")
      .then((res) => res.json())
      .then((apiData) => setData(apiData));
  }, []);

  const nextSlide = () => {
    if (slide < data.length - visibleCards) {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[25px] font-bold">
          Top restaurant chains in Jodhpur
        </h2>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className={`w-[30px] h-[30px] rounded-full flex items-center justify-center
              ${slide === 0 ? "bg-gray-200 cursor-not-allowed" : "bg-[#e2e2e7]"}`}
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className={`w-[30px] h-[30px] rounded-full flex items-center justify-center
              ${
                slide >= data.length - visibleCards
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-[#e2e2e7]"
              }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-5 duration-500"
          style={{
            transform: `translateX(-${slide * cardWidth}px)`,
          }}
        >
          {data.map((d, i) => (
            <Card width="w-[273px]" {...d} key={i} />
          ))}
        </div>
      </div>

      <hr className="my-6" />
    </div>
  );
};

export default TopRest;