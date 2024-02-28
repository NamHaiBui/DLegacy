"use client";

import MainLayout from "./layouts/MainLayout";
import CarouselComp from "./components/CarouselComp";
import { place_holder } from "./const/constants";
import { ProductComp } from "./components";

export default function Home() {
  return (
    <MainLayout>
      <CarouselComp>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-2xll font-bold mt-4 mb-6 px-4"> Products</div>
          <div className="grid grid-cols-5 gap-4">
            {place_holder.map((product) => {
              <ProductComp key={product.id} product={product} />;
            })}
          </div>
        </div>
      </CarouselComp>
    </MainLayout>
  );
}
