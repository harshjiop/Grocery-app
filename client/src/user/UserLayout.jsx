import React, { useEffect, useState, createContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { RxCross2 } from "../icons";

export const MobileNavContext = createContext();
export const PcNavContext = createContext();

function UserLayout() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const [menu, setMenu] = useState(() => {
    const localUserMenu = localStorage.getItem("userMenu");

    return localUserMenu ? Number(localUserMenu) : 0;
  });

  useEffect(() => {
    console.log('testify',menu)
    localStorage.setItem("userMenu", JSON.stringify(menu));
  }, [menu]);

  useEffect(() => {
    console.log("change is ", isMobileNavActive);
  }, [isMobileNavActive]);

  return (
    // wrapper
    <>
      <div className="w-screen h-screen  flex justify-between items-center border  relative">
        {/* nav bar wrapper*/}
        <div className="h-full hidden md:inline  w-[15%]">
          <PcNavContext.Provider value={{ menu, setMenu }}>
            <Nav />
          </PcNavContext.Provider>
        </div>

        <div
          className={`z-[999] w-full h-full md:hidden inline  ${
            !isMobileNavActive && "-translate-x-[100%]"
          }  bg-white absolute p-4 transition-all ease-linear duration-500`}
        >
          {/* hamburger and logo container */}
          <div className="flex justify-start items-center">
            <RxCross2
              onClick={() => setIsMobileNavActive(false)}
              className="font-bold text-2xl"
            />

            <div className="w-full flex justify-center items-center">
              <img
                className="w-[100px]"
                src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2020/07/Logo.png"
                alt=""
              />
            </div>
          </div>

          <MobileNavContext.Provider
            value={{ isMobileNavActive, setIsMobileNavActive }}
          >
            <MobileNav />
          </MobileNavContext.Provider>
        </div>

        {/* outlet wrapper */}
        <div className="h-full md:w-[85%]  z-0 w-full">
          <MobileNavContext.Provider
            value={{ isMobileNavActive, setIsMobileNavActive }}
          >
            <Outlet />
          </MobileNavContext.Provider>
        </div>
      </div>
    </>
  );
}

export default UserLayout;
