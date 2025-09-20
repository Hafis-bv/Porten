import { brands } from "../db/brands";
import SectionTitle from "./SectionTitle";

const Brands = () => {
  return (
    <div className="flex flex-col justify-center pt-15 pb-20 items-center font-display bg-[#0F0F0F] ">
      <SectionTitle title="наши бренды" underline />
      <div className="flex flex-wrap justify-center items-center max-w-7xl mt-20 gap-7">
        {brands.map((brand) => (
          <img key={brand.id} src={brand.image} alt="Brand" />
        ))}
      </div>
    </div>
  );
};

export default Brands;
