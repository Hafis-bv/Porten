import React from "react";
import Container from "./Container";
import FooterCol from "./FooterCol";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[url('/footer.png')] text-white bg-cover bg-center ">
      <Container className="flex flex-wrap justify-center text-center gap-20 xl:text-left xl:gap-0 xl:justify-around pt-20 pb-25">
        <FooterCol title={"О магазине"}>
          <p className=" max-w-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper
            viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet
            consectetur vel vitae aliquam dictum suspendisse. Lobortis eget
            consequat, tellus et et sed turpis. Pretium quisque vitae, amet,
            porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in
            sit mi ultrices nisi, nunc.
          </p>
        </FooterCol>
        <FooterCol title={"Категории"}>
          <div className="flex gap-5 flex-wrap justify-center max-w-80">
            <Link className="py-2.5 px-5 bg-[#0F0F0F]">часы</Link>
            <Link className="py-2.5 px-5 bg-[#0F0F0F]">браслеты</Link>
            <Link className="py-2.5 px-5 bg-[#0F0F0F]">ремни</Link>
            <Link className="py-2.5 px-5 bg-[#0F0F0F]">ювелирные изделия</Link>
            <Link className="py-2.5 px-5 bg-[#0F0F0F]">запонки</Link>
          </div>
        </FooterCol>
        <FooterCol title={"РАссылка"}>
          <p className="max-w-110 mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper
            viverra nunc cursus tortor lectus nunc nulla nibh.
          </p>
          <div className=" relative w-full">
            <input
              className=" bg-[#FFFFFF66] py-2.5 px-5 w-full"
              placeholder="Ваша почта"
              type="email"
            />
            <button className=" absolute right-0 cursor-pointer uppercase py-2.5 px-5 bg-[#0F0F0F]">
              ПОДПИСАТЬСЯ
            </button>
          </div>
        </FooterCol>
      </Container>
    </footer>
  );
};

export default Footer;
