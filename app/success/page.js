import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <>
      <div className="mt-12 max-w-[1200] mx-auto px-2 min-h-[50vh]">
        <div className="bg-white w-full p-6 min-h-[150px] flex items-center justify-center">
          <div>
            {" "}
            <div className="flex items-cetner text-xl">
              <AiOutlineCheckCircle className="text-green-500" />
              <span className="pl-4"> Order Successful</span>
            </div>
            <p className="text-sm">We have send your order to the seller</p>
            <Link href="/" className="w-full">
              <div className="w-full text-center bug-blue-600 text-sm font-semibold text-white p-[11px] mt-4">
                {" "}
                Return to Shop
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
