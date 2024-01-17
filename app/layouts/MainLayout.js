"use client";

import MainHeader from "./includes/MainHeader";
import TopMenu from "./includes/TopMenu";

export default function MainLayout({ children }) {
  return (
    <>
      <div id="Mainlayout" classname="min-w-[1050px] max-w-[1300px] mx-auto">
        <div>
          <TopMenu />
          <MainHeader />
        </div>
      </div>
    </>
  );
}
