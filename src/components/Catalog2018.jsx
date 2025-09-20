import React from "react";
import { Link } from "react-router-dom";

const Catalog2018 = () => {
  return (
    <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 lg:place-items-start">
      <img
        className=" h-full object-cover w-full"
        src="catalog18.png"
        alt="2018"
      />
      <div className="flex justify-center items-center mx-auto lg:h-full flex-col gap-10 py-10 px-5 text-white text-center">
        <h1 className="uppercase font-display text-4xl relative text-before w-max">
          коллекция 2018
        </h1>
        <p className="mt-10 max-w-118">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
          ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis
          nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna
          consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus
          facilisi habitasse ipsum interdum dictum aliquet. Velit quis
          ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra
          nulla nullam natoque volutpat curabitur auctor. Viverra viverra
          ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam
          egestas leo orci pharetra sed diam.
        </p>
        <Link className="uppercase border px-7 py-3 text-lg ">
          посмотреть коллекцию
        </Link>
      </div>
    </div>
  );
};

export default Catalog2018;
