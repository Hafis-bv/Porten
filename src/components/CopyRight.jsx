import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <div className="bg-[#0F0F0F] text-[#D0D0D0]">
      <Container className="flex flex-col items-center 2xs:justify-between 2xs:flex-row py-4 sm:px-20">
        <p className="">© 2020 Все права защищены</p>
        <Link>Сделано Figma.info</Link>
      </Container>
    </div>
  );
};

export default CopyRight;
