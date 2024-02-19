"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/caurosel.min.css";

import React from "react";

const CarouselComp = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <Image src="/images/banner/1.png" />
          </div>

          <div>
            <Image src="/images/banner/2.png" />
          </div>

          <div>
            <Image src="/images/banner/3.png" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComp;