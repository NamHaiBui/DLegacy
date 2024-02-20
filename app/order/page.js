"use clinet";

import Link from "next/link";
import { CiDeliveryTruck } from "react-icons/ci";
import MainLayout from "../layouts/MainLayout";
import { order } from "../const/constants";

const page = () => {
  return (
    <>
      <MainLayout>
        <div
          id="OrdersPage"
          className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]"
        >
          <div className="bg-white w-full p-6 min-h-[150px]"></div>
          <div className="flex items-center text-xl">
            <CiDeliveryTruck className="text-green-500" size={35} />
            <span className="pl-4">Orders</span>
            {order.length<1? <div></div>:null}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default page;
