import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/hero.png')] bg-cover bg-center h-202 uppercase text-center text-white gap-20 ">
      <div className=" px-17 py-23 border-2 ">
        <h1 className=" font-bills font-bold text-[64px]">Porten</h1>
        <p className=" font-normal text-[22px] border-t-4">санкт-петербург</p>
      </div>
      <p className=" max-w-182 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum
        purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed
        iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus
        ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh
        magna feugiat id nunc, dui nisl viverra.
      </p>
    </div>
  );
};

export default Hero;
