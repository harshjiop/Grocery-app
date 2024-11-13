import React from "react";
import { IoIosArrowBack, FaRegTrashCan } from "../icons/index";
import { Link } from "react-router-dom";

function Cart() {
  return (
    //  Cart Container
    <div className="w-[80%] mx-auto py-4  h-screen selection:bg-transparent">
      {/* upper section */}
      <div className="flex flex-col gap-2 ">
        {/* continue shopping section */}
        <div className="flex items-center gap-1 border">
          <Link to={"../"} className="flex">
            <IoIosArrowBack className="text-2xl" />
            <h2 className="text-md font-semibold">Continue Shopping</h2>
          </Link>
        </div>

        {/* lower / horizontal line */}
        <div className="w-full mx-auto border rounded-xl"></div>
      </div>

      {/* lower section */}
      <div className="flex justify-between items-center h-[80%] pl-2  ">
        {/* lower left section */}
        <div className=" h-full flex justify-start items-start flex-col w-[90%] gap-5 py-3">
          {/* upper text */}
          <div>
            {/* upper heading */}
            <h2 className="font-semibold">Shopping cart</h2>
            <p className="text-sm">You have 3 item in your cart</p>
          </div>

          {/* cart product list */}
          <div className="w-full flex flex-col gap-3">
            {/* product section */}
            {/* <div className="w-[80%] border h-28 rounded-lg hover:shadow-md ease-linear transition-all duration-150 ">
              asdf
            </div> */}

            {[0, 1, 2, 3].map((index) => {
              return (
                <div
                  id={index}
                  className="w-[80%] border h-32 rounded-lg hover:shadow-md ease-linear transition-all duration-150 flex items-center justify-start"
                >
                  {/* left/image */}
                  <div
                    className="h-full w-[100px] bg-center bg-cover bg-no-repeat object-cover rounded"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1726629597558-7450add25eb8?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                    }}
                  ></div>

                  {/* right/product details */}
                  <div className="flex flex-col p-2 w-[90%] h-full border justify-center gap-1">
                    {/* upper product details */}
                    <div className="flex flex-col justify-between">
                      {/* upper / product details */}
                      <div className="flex justify-between">
                        {/* product name / left */}
                        <h2 className="text-lg font-semibold">Product name </h2>

                        {/* delivery details / right */}
                        <h3 className="m-1">Delivery by 29th Sep</h3>
                      </div>

                      {/* down /seller details */}
                      <h3 className="text-slate-400">seller : test</h3>
                    </div>

                    {/* middle product details / price and offers */}
                    <div className="flex gap-2 ">
                      <h3 className="text-gray-400 font line-through">$400</h3>
                      <h3 className="text-green-400 font-bold">$99</h3>
                    </div>

                    {/* lower product details */}
                    <div>
                      {/* quantity toggle */}
                      <div></div>

                      {/* buttons */}
                      <div>
                        <button className=" p-1 rounded font-semibold text-white bg-red-600 hover:border-red-600 hover:bg-transparent hover:text-black transition-all ease-linear duration-300 flex items-center justify-between gap-1 border">
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

        {/* lower right section */}
        <div className=" gap-2 h-[360px] rounded-lg w-[300px] flex justify-between items-center flex-col">
          {/* order summary section */}
          <div className="border w-full h-full rounded  flex flex-col justify-between">
            {/* summary upper section */}
            <div className="border-b p-2">
              <h4 className="font-bold text-slate-400 ">ORDER SUMMARY</h4>
            </div>

            {/* summary middle section */}
            <div className="p-2 flex flex-col gap-6">
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
            <div className="border-t-2 m-2  p-2 border-dashed flex justify-between font-semibold">
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
