import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  TbTransactionRupee,
  MdAccountCircle,
  MdShoppingCart,
  MdCreditCard,
  MdSettings,
} from "../icons";
import React, { useEffect, useState, useContext } from "react";

import { PcNavContext } from "./UserLayout";

function Nav() {
  const [menu, setMenu] = useState(() => {
    const localUserMenu = localStorage.getItem("userMenu");
    return localUserMenu ? Number(localUserMenu) : 0;
  });

  useEffect(() => {
    localStorage.setItem("userMenu", JSON.stringify(menu));
  }, [menu]);

  // const { menu, setMenu } = useContext(PcNavContext);

  return (
    <div className=" h-full  flex flex-col justify-start items-center gap-8 selection:bg-transparent">
      {/* upper section / logo */}
      <div className="p-5">
        <img
          src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2020/07/Logo.png"
          alt=""
        />
      </div>

      {/* lower section / menu  */}
      <div className="w-full">
        <ul className="w-full h-full flex flex-col items-center gap-10">
          {/* Dashboard Menu Container */}
          <Link
            to={"/user/dashboard"}
            className={`w-full  p-2  hover:rounded-xl hover:bg-green-400  hover:text-white hover:font-bold transition-all ease-linear duration-100 ${
              menu === 0 &&
              "hover:bg-[#C4DAD2] hover:text-[#16423C] bg-black  rounded-xl   text-green-400"
            } transition-all ease-linear duration-500  `}
            onClick={() => {
              setMenu(0);
            }}
          >
            <li className="w-full cursor-pointer flex justify-center items-center">
              <div className="xl:w-[70%]  flex items-center  justify-start  gap-3 ">
                <MdHomeFilled
                  className={`hidden lg:inline text-xl ${
                    menu === 0 && " text-2xl "
                  } transition-all ease-linear duration-200 `}
                />
                <h3
                  className={`${
                    menu === 0 && " font-bold "
                  } transition-all ease-linear duration-800 lg:text-base md:text-[0.8rem] text-[0.6rem]`}
                >
                  Dashboard
                </h3>
              </div>
            </li>
          </Link>

          {/* Transaction Menu Container */}
          <Link
            to={"/user/transaction"}
            className={`w-full  p-2  hover:rounded-xl hover:bg-green-400  hover:text-white hover:font-bold transition-all ease-linear duration-100 ${
              menu === 1 &&
              "hover:bg-[#C4DAD2] hover:text-[#16423C] bg-black  rounded-xl   text-green-400"
            } transition-all ease-linear duration-500  `}
            onClick={() => setMenu(1)}
          >
            <li className="w-full cursor-pointer flex justify-center items-center">
              <div className="xl:w-[70%]  flex items-center  justify-start   gap-3 ">
                <TbTransactionRupee
                  className={`hidden lg:inline text-xl ${
                    menu === 1 && " text-2xl"
                  } transition-all ease-linear duration-200`}
                />

                <h3
                  className={`${
                    menu === 1 && " font-bold"
                  } transition-all ease-linear duration-800 lg:text-base md:text-[0.8rem] text-[0.6rem]`}
                >
                  Transaction
                </h3>
              </div>
            </li>
          </Link>

          {/* Accounts Menu Container */}
          <Link
            to={"/user/accounts"}
            className={`w-full  p-2  hover:rounded-xl hover:bg-green-400  hover:text-white hover:font-bold transition-all ease-linear duration-100 ${
              menu === 2 &&
              "hover:bg-[#C4DAD2] hover:text-[#16423C] bg-black  rounded-xl   text-green-400"
            } transition-all ease-linear duration-500  `}
            onClick={() => setMenu(2)}
          >
            <li className=" w-full cursor-pointer flex items-center justify-center ">
              <div className=" xl:w-[70%]   flex items-center justify-start gap-3">
                <MdAccountCircle
                  className={`hidden lg:inline text-xl  ${
                    menu === 2 && " text-2xl"
                  } transition-all ease-linear duration-200`}
                />
                <h3
                  className={`${
                    menu === 2 && " font-bold"
                  } transition-all ease-linear duration-800 lg:text-base md:text-[0.8rem] text-[0.6rem]`}
                >
                  Accounts
                </h3>
              </div>
            </li>
          </Link>

          {/* Orders Menu Container */}
          <Link
            to={"/user/orders"}
            className={`w-full  p-2  hover:rounded-xl hover:bg-green-400  hover:text-white hover:font-bold transition-all ease-linear duration-100 ${
              menu === 3 &&
              "hover:bg-[#C4DAD2] hover:text-[#16423C] bg-black  rounded-xl   text-green-400"
            } transition-all ease-linear duration-500  `}
            onClick={() => setMenu(3)}
          >
            <li className=" w-full cursor-pointer flex justify-center items-center">
              <div className=" xl:w-[70%] flex items-center justify-start gap-3">
                <MdShoppingCart
                  className={`hidden lg:inline text-xl ${
                    menu === 3 && " text-2xl"
                  } transition-all ease-linear duration-200`}
                />
                <h3
                  className={`${
                    menu === 3 && " font-bold"
                  } transition-all ease-linear duration-800 lg:text-base md:text-[0.8rem] text-[0.6rem]`}
                >
                  Orders
                </h3>
              </div>
            </li>
          </Link>

          {/* Cards Menu Container */}
          <Link
            to={"/user/cards"}
            className={`w-full  p-2  hover:rounded-xl hover:bg-green-400  hover:text-white hover:font-bold transition-all ease-linear duration-100 ${
              menu === 4 &&
              "hover:bg-[#C4DAD2] hover:text-[#16423C] bg-black  rounded-xl   text-green-400"
            } transition-all ease-linear duration-500  `}
            onClick={() => setMenu(4)}
          >
            <li className=" w-full cursor-pointer  flex justify-center items-center">
              <div className=" xl:w-[70%] flex items-center justify-start gap-3">
                <MdCreditCard
                  className={`hidden lg:inline text-xl ${
                    menu === 4 && " text-2xl"
                  } transition-all ease-linear duration-200`}
                />
                <h3
                  className={`${
                    menu === 4 && " font-bold"
                  } transition-all ease-linear duration-800 lg:text-base md:text-[0.8rem] text-[0.6rem]`}
                >
                  Cards
                </h3>
              </div>
            </li>
          </Link>

          {/* Setting Menu Container */}
          <Link
            to={"/user/settings"}
            className={`w-full  p-2  hover:rounded-xl hover:bg-green-400  hover:text-white hover:font-bold transition-all ease-linear duration-100 ${
              menu === 5 &&
              "hover:bg-[#C4DAD2] hover:text-[#16423C] bg-black  rounded-xl   text-green-400"
            } transition-all ease-linear duration-500  `}
            onClick={() => setMenu(5)}
          >
            <li className=" w-full cursor-pointer flex justify-center items-center">
              <div className=" xl:w-[70%] flex items-center justify-start gap-3">
                <MdSettings
                  className={`hidden lg:inline text-xl ${
                    menu === 5 && " text-2xl"
                  } transition-all ease-linear duration-200 `}
                />
                <h3
                  className={`${
                    menu === 5 && " font-bold"
                  } transition-all ease-linear duration-800 lg:text-base md:text-[0.8rem] text-[0.6rem]`}
                >
                  Settings
                </h3>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
