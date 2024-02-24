"use client";
import MainLayout from "../layouts/MainLayout";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import React from "react";
import { TextInput } from "../components";
// Seller Side
const Address = () => {

  return (
    <>
      {" "}
      <MainLayout>
        <div id="AdressPage" className="mt-4 max-w-[600px] mx-auto px-2">
          <div className="mx-auto bg-white rouded-lg p-3">
            <div className="text-xl text-bold mb-2">Meetup Point Details:</div>
            <form>
              <div className="mb-4">
                <TextInput className="w-full" string = {'Test'} placeholder="Name"/>
              </div>
              <button className="mt-6 w-full text-white text-lg font-semibold p-3 rounded bg-blue-600">Update Meetup Point Details</button>
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Address;
