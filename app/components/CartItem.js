import React from "react";

const CartItem = ({ product }) => {
  return (
    <>
      <div className="relative flex justify-start my-2 border w-full p-6">
        <Image
          src={product?.url + "/150"}
          className="rounded-md w-[150px] h-[150px]"
        />
        <div className="overflow-hidden pl-2 w-full">
          <div className=" flex items-center justify-between w-full">
            {" "}
            <div className="flex items-center font-semibold justify-between w-[400px]n text-[16px] underline">
              {product?.title}
            </div>
            <div className="font-bold text-lg">
              ${product?.price.toFixed(2)}
            </div>
            <div className="font-semibold mt-2">{product?.status}</div>
            <div className="text-sm mt-2">
              {product?.description.substring(0, 120)}...
            </div>
            <div className="absolute right-0 bottom-0 p-4 text-sm">
              {" "}
              <button className="underline text-blue-500">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
