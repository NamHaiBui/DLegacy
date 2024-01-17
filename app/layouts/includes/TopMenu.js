"use client";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function TopMenu() {
  return (
    <>
      <div id="TopMenu" className="border-b">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <div className="flex items-center w-full bg-white">
            <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py -5 mx-auto">
              <Link href="/">
                <img width="120" src="/images/logo.svg" />
              </Link>
              <div className="w-full">
                <div className="flex items-center">
                  <div className=" relative flex items-center border-2 border-gray-900 w-full p-2">
                    <button className="flex items-center">
                      <AiOutlineSearch size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
