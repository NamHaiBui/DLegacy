"use client";
import MainLayout from "@/app/layouts/MainLayout";
import place_holder from "@/app/const/constants";
import Image from "next/image";
import SimilarProducts from "@/app/components/SimilarProducts";
const Product = () => {
  return (
    <MainLayout className="max-w-[1200px] mx-auto">
      <div className="flex px-4 py-10">
        {place_holder?.url ? (
          <Image className="w-[40%] rounded-lg" src={product?.url + "/200"} />
        ) : (
          <div className="w-[40%]"> </div>
        )}
        <div className="">
          {" "}
          <div className="font-bold text-xl"> {product?.title}</div>{" "}
          <div className="text-sm text-gray-700 pt-2"> Seller</div>
          <div className="pt-3 pb-2" />
          <div className=" flex items-center">
            {" "}
            Condition: <span className="font-bold text-[17px] ml-2"> New</span>
          </div>
          <div className="border-b py-1" />
          <div className="pt-3">
            {" "}
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center">
                Price:
                {product?.price ? (
                  <div className="font-bold text-[20px] ml-2"></div>
                ) : null}
              </div>
              <button className="bg-[#3408C9] text-white py-2 px-20  rounded-full cursor-pointer">
                {" "}
                Add To Cart
              </button>
            </div>
          </div>
          <div className="border-b py-1" />
          <div className="pt-3">
            {" "}
            <div className="font-semibold pb-1">Description:</div>{" "}
            <div className="text-sm">{product?.description}</div>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </MainLayout>
  );
};

export default Product;
