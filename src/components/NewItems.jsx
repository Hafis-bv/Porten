import { products } from "../db/product";
import SectionTitle from "./SectionTitle";

const NewItems = () => {
  return (
    <div className="flex flex-col my-36 justify-center items-center font-display">
      <SectionTitle title="новые поступления" underline />
      <div className="flex max-w-7xl flex-wrap gap-5.5 mt-20 justify-center items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full xs:w-max text-white mx-5 xs:mx-0"
          >
            <img
              className=" bg-[#191B1C] px-5.5 py-14 w-full xs:w-max"
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
