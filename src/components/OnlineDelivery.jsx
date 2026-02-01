import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const OnlineDelivery = () => {
  const [data, setData] = useState([]);
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchTopRestaurant = async () => {
    const response = await fetch("/data/restaurantChains.json");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div ref={componentRef} className="max-w-[1200px] mx-auto px-2">
      {/* Title */}
      <div className="flex my-4 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurants with online delivery in Jodhpur
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div
        className={`${
          isAtTop ? "fixed top-0 left-0 w-full z-[999] bg-white shadow" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-2">
          <div className="flex gap-4 py-3">
            <div className="px-4 py-2 rounded-md shadow border cursor-pointer">
              Filter
            </div>
            <div className="px-4 py-2 rounded-md shadow border cursor-pointer">
              Sort By
            </div>
            <div className="px-4 py-2 rounded-md shadow border cursor-pointer">
              Fast Delivery 
            </div>
			<div className="px-4 py-2 rounded-md shadow border cursor-pointer">
              New on Swiggy
            </div>
			<div className="px-4 py-2 rounded-md shadow border cursor-pointer">
              Ratting
            </div>
			<div className="px-4 py-2 rounded-md shadow border cursor-pointer">
              Pure Veg
            </div>
			<div className="px-4 py-2 rounded-md shadow border cursor-pointer">
              Non Veg
            </div>
			<div className="px-4 py-2 rounded-md shadow border cursor-pointer">
              Less then RS-300
            </div>
			<div className="px-4 py-2 rounded-md shadow border cursor-pointer">
     		 RS 300- 600

            </div>
			
          </div>
        </div>
      </div>

      {/* Spacer so content doesn't jump */}
      {isAtTop && <div className="h-[70px]" />}

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {data.map((d, i) => (
          <Card key={i} {...d} />
        ))}
      </div>
    </div>
  );
};

export default OnlineDelivery;