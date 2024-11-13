import React, { useState, useContext } from "react";
import {
  MdOutlineSettings,
  LuBellDot,
  MdOutlineHome,
  RxHamburgerMenu,
  RxCross2,
} from "../../icons";
import { Link } from "react-router-dom";
import { MobileNavContext } from "../UserLayout";

function Dashboard() {
  const { isMobileNavActive, setIsMobileNavActive } =
    useContext(MobileNavContext);

  const [isNotificationActive, setIsNotificationActive] = useState(false);

  return (
    <div className=" w-full h-full flex flex-col bg-slate-200/50 selection:bg-transparent">
      {/* header */}
      <div className="w-full h-[10%]  flex items-center justify-between p-4 bg-white border-2 border-slate-200/50">
        <div
          onClick={() => setIsMobileNavActive(!isMobileNavActive)}
          className=" text-2xl font-extrabold md:hidden inline-block"
        >
          <RxHamburgerMenu />
        </div>

        {/* page title */}
        <h2 className="font-semibold text-green-400 md:text-xl">Dashboard</h2>

        {/* header icons */}
        <div className=" flex gap-4">
          {/* home button container */}
          <Link className="rounded-full" to={"../../"}>
            <div className="p-2 bg-black rounded-full flex justify-center items-center">
              <MdOutlineHome className="text-2xl font-semibold text-green-400" />
            </div>
          </Link>

          {/* setting button container*/}
          <Link
            onClick={() => {
              console.log("hi", menu);
              // setMenu(5)
            }}
            to={"../settings"}
            className="hidden  border-black border-2 bg-slate-300 cursor-pointer"
          >
            <div className="p-2 bg-slate-200/50 hover:bg-black border border-red-400  rounded-full flex justify-center items-center">
              <MdOutlineSettings className="text-2xl font-semibold text-green-400 " />
            </div>
          </Link>

          {/* notification container */}
          <div className="p-2  bg-slate-200/50 rounded-full flex justify-center items-center relative selection:bg-transparent">
            <LuBellDot
              onClick={() => setIsNotificationActive(!isNotificationActive)}
              className="text-2xl cursor-pointer font-semibold text-red-400 z-50"
            />

            <div
              className={`${
                !isNotificationActive && "bg-transparent p-0 border-none"
              } absolute border-2 bg-black p-6 rounded-full border-green-400 transition-all ease-linear duration-500`}
            ></div>

            {/* notification container wrapper */}
            <div
              className={`${
                !isNotificationActive && "h-0 w-0 border-none bg-transparent "
              } absolute top-12 -left-24 h-[200px] w-[200px] border-2 bg-black/70 text-green-400 rounded-lg p-2 border-green-400 transition-all ease-linear duration-500`}
            ></div>
          </div>

          {/* user profile container */}
          <div className="w-10 rounded-full border-2 border-green-400">
            <img
              className="w-full rounded-full"
              src="https://randomuser.me/api/portraits/men/59.jpg"
              alt="error_loading_image"
            />
          </div>
        </div>
      </div>

      {/* body wrapper*/}
      <div className="w-full h-[90%]">
        {/* body container */}
        <div className="w-[90%] mx-auto  h-full"></div>
      </div>
    </div>
  );
}

export default Dashboard;
