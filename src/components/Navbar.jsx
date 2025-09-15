import React from "react";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-[#0F0F0F] text-white uppercase">
      <div className="flex justify-between px-101 items-center py-4">
        <h1 className=" font-bills text-4xl font-bold ">Porten</h1>
        <div className="flex gap-10 ">
          <Link>понравилось</Link>
          <Link>личный кабинет</Link>
          <Link>настройки</Link>
          <Link>
            <img src="basket.svg" alt="basket" />
          </Link>
          <Link>
            <img src="search.svg" alt="search" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <LuMenu color="#fff" className=" w-11 h-11" />
