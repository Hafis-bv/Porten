import React from "react";
import Hero from "./components/Hero";
import Catalog from "./components/Сatalog";
import Catalog2018 from "./components/Catalog2018";
import NewItems from "./components/NewItems";
import Brands from "./components/Brands";

const App = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <Catalog2018 />
      <NewItems />
      <Brands />
    </>
  );
};

export default App;
