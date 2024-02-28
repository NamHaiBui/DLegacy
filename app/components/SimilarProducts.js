import { BiLoader } from "react-icons/bi";
import { place_holder } from "../const/constants";
const SimilarProducts = () => {
  return (
    <>
      <div>
        <div className="border-b py-1 max-w-[1200px] mx-auto" />
        <div className="font-bold text-2xl py-2 mt-4">Similar items </div>
        {place_holder.length > 0 ? (
          <div className="grid grid-cols-5 gap-4">
            {place_holder.map((product) => (
              <ProductComp key={product.id} product={product} />
            ))}{" "}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            {" "}
            <div className="flex items-center justify-center gap-4 font-semibold">
              {" "}
              <BiLoader size={30} className="text-blue-400 animate-spin" />
              Retrieving stuffs
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SimilarProducts;
