import React from "react";
import { Link } from "react-router-dom";

const Сatalog = () => {
  return (
    <div className="flex flex-col gap-13 items-center justify-center bg-[url('/catalog.png')] bg-cover bg-center min-h-177 uppercase text-center text-white">
      <h1 className="text-4xl font-display font-bold">Новая коллекция</h1>
      <Link className="border py-3 px-7 tracking-[3px] text-lg" to="/">
        Каталог
      </Link>
    </div>
  );
};

export default Сatalog;
