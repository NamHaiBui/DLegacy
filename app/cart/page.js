"use client";
import MainLayout from "../layouts/MainLayout";
import product from "../const/constants";
import { SimilarProducts } from "../components";
const Cart = () => {
  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto mb-7 min-h-[300px]">
          <div className="text-2xl font-bold my-4"> Shopping Cart</div>
          <div className="relative flex items-baseline justify-between gap-2">
            <div className="w-[65%]">
              <CartItem key={product.id} product={product} />
            </div>
            <div id="Checkout" className="md:w[33%] absolute top-0 right-0 m-2">
              <div className="bg-white p-4 border">
                <button className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4">
                  Check Out
                </button>
                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                  <div> Meet Up Point</div>
                  {/* Create a meet up point system include a list of common point  */}
                </div>
                <div className="border-b border-gray-300 " />
                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold ">
                    <div>Subtotal</div>
                        {/* <div> Sum of Cart Items </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <SimilarProducts />
      </MainLayout>
    </>
  );
};

export default Cart;
