import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
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
    <div className="sticky top-0 w-full bg-[#0F0F0F] text-white py-4">
      <Container className="flex justify-between items-center">
        <h1 className="font-bills text-4xl font-bold ">Porten</h1>
        <div className="flex gap-10 uppercase">
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
      </Container>
    </div>
  );
};

export default Navbar;
