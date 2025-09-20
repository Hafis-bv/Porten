import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { GrClose } from "react-icons/gr";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      setActive(false);
    });
    window.addEventListener("scroll", () => {
      setActive(false);
    });
  }, []);

  const links = [
    {
      id: 1,
      title: "понравилось",
      href: "#",
    },
    {
      id: 2,
      title: "личный кабинет",
      href: "#",
    },
    {
      id: 3,
      title: "настройки",
      href: "#",
    },
  ];
  return (
    <div
      className="sticky top-0 w-full bg-[#0F0F0F] text-white py-4"
      onClick={(e) => {
        e.stopPropagation(); //исключения для 10 строки что бы кнопка не считалось как фолс
      }}
    >
      <Container className="flex justify-between items-center">
        <h1 className="font-bills text-4xl font-bold z-6">Porten</h1>
        <div className="hidden gap-10 uppercase lg:flex">
          {links.map((link) => (
            <Link key={link.id} href={link.href} className="hover:underline">
              {link.title}
            </Link>
          ))}
          <div className="flex gap-6">
            <Link>
              <img src="/basket.svg" alt="basket" />
            </Link>
            <Link>
              <img src="/search.svg" alt="search" />
            </Link>
          </div>
        </div>
        <button
          onClick={() => {
            setActive(!active);
          }}
          className="z-6 cursor-pointer lg:hidden"
        >
          {active ? <GrClose size={30} /> : <MdMenu size={35} />}
        </button>
        <div
          className={`fixed z-5 inset-0 bg-black/90 h-[70%] transition-all duration-300 flex flex-col justify-center items-center gap-6 uppercase ${
            active ? "top-0" : "-top-full"
          }`}
        >
          {links.map((link) => (
            <Link
              onClick={() => {
                setActive(false);
              }}
              key={link.id}
              href={link.href}
              className="text-xl hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
