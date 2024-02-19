"use client";
import MainLayout from "../layouts/MainLayout";
import { product } from "../const/constants";
import CheckoutItem from "../components/CheckoutItem";

const Checkout = () => {
  return (
    <>
      <MainLayout>
        <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
          <div className="text-2xl font-bold mt-4 mb-4">
            <div className="w-[65%]">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-xl font-semibold mb-2">Meeting Point</div>
                <div>
                  <ul className="text-sm mt-2">
                    <li> Name:</li>
                    <li> Pronouns:</li>
                    <li> Contact</li>
                    <li> Address:</li>
                    <li> Email:</li>
                    <li> Residential Hall:</li>
                  </ul>
                </div>
              </div>
              {/* Implemnt a scrollable item here */}
              <div id="Items" className="bg-white rounded-lg mt-4">
                <CheckoutItem key={product.id} product={product} />
              </div>
            </div>
            <div
              id="PlaceOrder"
              className="relative -top-[6px] w-[35%] border rounded-lg"
            >
              <div className="p-4">
                <div className="flex items-baseline justify-between text-sm mb-1">
                  <div>Item Count</div>
                  <div>Total Cost</div>
                </div>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div>Meeting Point</div>
                  <div>Somewhere</div>
                </div>
                <div className="border-t" />
                <div className="flex items-center justify-between my-4">
                  <div className="font-semibold">Order total:</div>
                  <div> Placeholder</div>
                </div>
                <form>
                  {/* Put some more confirmation here:
                  - Are you a robot?
                  Some thing more
                  */}
                  <button type="submit" className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full">
                    Confirm Order
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Checkout;
