import React from "react";
import { IoIosArrowBack, FaRegTrashCan } from "../icons/index";
import { Link } from "react-router-dom";

function Cart() {
  return (
    //  Cart Container
    <div className="md:w-[80%] w-full mx-auto py-4  h-screen selection:bg-transparent ">
      {/* upper section */}
      <div className="flex flex-col gap-2 w-[80%] mx-auto md:w-auto md:mx-0">
        {/* continue shopping section */}
        <div className="flex items-center gap-1 ">
          <Link to={"../"} className="flex  items-center">
            <IoIosArrowBack className="md:text-2xl text-base " />
            <h2 className="md:text-md text-sm font-semibold">Continue Shopping</h2>
          </Link>
        </div>

        {/* lower / horizontal line */}
        <div className="w-full mx-auto border rounded-xl"></div>
      </div>

      {/* lower section */}
      <div className="flex justify-between md:flex-row flex-col  items-center md:h-[80%] md:pl-2  w-[80%] mx-auto md:w-auto md:mx-0">
        {/* lower left section / shopping cart item*/}
        <div className=" h-full flex justify-start items-start flex-col md:w-[90%] w-full gap-5 py-3">
          {/* upper text */}
          <div className=" w-full md:w-auto flex flex-col justify-center items-center md:items-start">
            {/* upper heading */}
            <h2 className="font-semibold">Shopping cart</h2>
            <p className="text-sm">You have 3 item in your cart</p>
          </div>

          {/* cart product list */}
          <div className="w-full flex flex-col gap-3 ">
            {/* product section */}
            {/* <div className="w-[80%] border h-28 rounded-lg hover:shadow-md ease-linear transition-all duration-150 ">
              asdf
            </div> */}

            {[0, 1, 2, 3].map((index) => {
              return (
                <div
                  id={index}
                  className="md:w-[80%] w-full border h-32 rounded-lg hover:shadow-md ease-linear transition-all duration-150 flex items-center justify-start"
                >
                  {/* left/image */}
                  <div
                    className="h-full md:w-[100px] w-1/2 bg-center bg-cover bg-no-repeat object-cover rounded"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1726629597558-7450add25eb8?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                    }}
                  ></div>

                  {/* right/product details */}
                  <div className="flex flex-col p-2 md:w-[90%] w-1/2  h-full  justify-center gap-1">
                    {/* upper product details */}
                    <div className="flex flex-col justify-between">
                      {/* upper / product details */}
                      <div className="flex justify-between  flex-col md:flex-row">
                        {/* product name / left */}
                        <h2 className="md:text-lg text-sm font-semibold">
                          Product name{" "}
                        </h2>

                        {/* delivery details / right */}
                        <h3 className="md:m-1  md:text-base text-xs">
                          Delivery by 29th Sep
                        </h3>
                      </div>

                      {/* down /seller details */}
                      <h3 className="text-slate-400 text-xs md:text-base">
                        seller : test
                      </h3>
                    </div>

                    {/* middle product details / price and offers */}
                    <div className="flex gap-2 ">
                      <h3 className="text-gray-400 font line-through text-sm md:text-base">
                        $400
                      </h3>
                      <h3 className="text-green-400 font-bold text-sm md:text-base">
                        $99
                      </h3>
                    </div>

                    {/* lower product details */}
                    <div>
                      {/* quantity toggle */}
                      <div></div>

                      {/* buttons */}
                      <div>
                        <button className=" p-1 rounded font-semibold text-white bg-red-600 hover:border-red-600 hover:bg-transparent hover:text-black transition-all ease-linear duration-300 flex items-center justify-between gap-1 border md:text-base text-sm">
                          Delete
                          <FaRegTrashCan className="hover:text-red-600 transition-all ease-linear duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* lower right section / order summary */}
        <div className=" gap-2 h-[360px] rounded-lg md:w-[300px] w-full flex justify-between items-center flex-col py-2 md:py-0">
          {/* order summary section */}
          <div className="border w-full h-full rounded  flex flex-col justify-between">
            {/* summary upper section */}
            <div className="border-b p-2">
              <h4 className="font-bold text-slate-400 text-sm md:text-base md:text-start text-center">
                ORDER SUMMARY
              </h4>
            </div>

            {/* summary middle section */}
            <div className="p-2 flex flex-col gap-6 text-sm md:text-base">
              {/* item price */}
              <div className="w-full font-semibold flex justify-between">
                <h4>Price ( 2items )</h4>
                <h4>$9,999</h4>
              </div>

              {/* platform fee */}
              <div className="w-full font-semibold flex justify-between">
                <h4>Platform Fee</h4>
                <h4>$9</h4>
              </div>

              {/* delivery charges */}
              <div className="w-full font-semibold flex justify-between">
                <h4>Delivery Charges</h4>
                <h4>Free</h4>
              </div>
            </div>

            {/* summary lower section */}
            <div className="border-t-2 m-2  p-2 border-dashed flex justify-between font-semibold text-sm md:text-base">
              <h3>Total Amount</h3>
              <h4>$9,999</h4>
            </div>
          </div>

          {/* button */}
          <button className="border w-full rounded h-14 bg-green-400 text-white font-semibold">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
