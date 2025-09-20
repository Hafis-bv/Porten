import React from "react";
import { brands } from "../db/brands";

const Brands = () => {
  return (
    <div className="flex flex-col justify-center pt-15 pb-20 items-center font-display bg-[#0F0F0F] ">
      <h1 className=" uppercase relative font-bold text-4xl text-before mb-20 text-white">
        наши бренды
      </h1>
      <div className="flex flex-wrap justify-center items-center max-w-7xl gap-7">
        {brands.map((brand) => (
          <img src={brand.image} alt="Brand" />
        ))}
      </div>
    </div>
  );
};

export default Brands;
