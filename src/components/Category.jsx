import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [slide, setSlide] = useState(0);

  const visibleItems = 8;
  const itemWidth = 150;

  useEffect(() => {
    fetch("/data/category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const nextSlide = () => {
    if (slide < category.length - visibleItems) {
      setSlide(slide + 2);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 2);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[25px] font-bold">What’s on your mind?</h2>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex items-center justify-center"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex items-center justify-center"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex duration-500"
          style={{
            transform: `translateX(-${slide * itemWidth}px)`,
          }}
        >
          {category.map((cat, index) => (
            <div key={index} className="w-[150px] shrink-0">
              <img
                src={`/image/${cat.image}`}
                alt={cat.path}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6" />
    </div>
  );
};

export default Category;