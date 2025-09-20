import React from "react";
import { products } from "../db/product";

const NewItems = () => {
  return (
    <div className="flex flex-col mb-36 justify-center items-center font-display">
      <h1 className=" text-center relative uppercase text-before text-4xl font-bold my-30 text-white">
        новые поступления
      </h1>
      <div className="flex max-w-7xl flex-wrap gap-5.5 justify-center items-center">
        {products.map((product) => (
          <div className=" text-white">
            <img
              className=" bg-[#191B1C] px-5.5 py-14"
              src={product.image}
              alt="New item"
            />
            <h1 className=" mt-5.5 mb-2.5 text-[18px]">{product.name}</h1>
            <p className=" text-[18px] mb-5">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewItems;
