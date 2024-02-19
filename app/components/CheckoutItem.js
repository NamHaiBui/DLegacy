"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
const CheckoutItem = ({ product }) => {
  const pathName = usePathname();

  return (
    <>
      <div className="flex justify-start rounded-lg mb-2 border p-4">
        <Image
          className="rounded-md w-[150px] h-[150px]"
          src={product.url + "/150"}
        />
        <div className="overflow-hidden pl-2">
          <div className="font-semibold"> {product.title}</div>
          <div className="text-lg font-semibold">
            <span className="font-bold">${product.price}</span>
          </div>
          {/* <div className="relative flex items-center text-[14px] text-gray-500"> 
          Use this to show the saving difference
          </div> */}
          <div className="text-sm mt-2">
            {product.description.substring(0, 80)}...
          </div>
          {pathName == "/cart" ? (
            <div className="text-sm mt-2 w-full flex justify-end underline text-blue-500 cursor-pointer">
              {" "}
              Remove
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
