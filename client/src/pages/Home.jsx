import {
  HiSearch,
  IoHeartOutline,
  IoCartOutline,
  IoFastFoodSharp,
  IoMenu,
  IoClose,
  FaRegUserCircle,
  MdLogout,
} from "../icons/index";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/authSlice";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import Category from "../services/category";

export default function Home() {
  const [category, setCategory] = useState(0);
  const [categoriesList, setCategoriesList] = useState([]);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    console.log("category is", category);
  }, [category]);

  useEffect(() => {
    try {
      const localUserData = localStorage.getItem("userData");

      if (localUserData) {
        const parsedLocalUserData = JSON.parse(localUserData);
        dispatch(login({ userData: parsedLocalUserData }));
      }
    } catch (error) {
      console.log("error is ", error);
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const localToken = localStorage.getItem("token");

        if (localToken) {
          const response = await Category.getAllCategory(localToken);
          if (response) {
            setCategoriesList(response.data)
            console.log("data of category ", response);
          }
        }
      } catch (error) {
        console.log("error is ", error);
      }
    })();
  }, []);

  function handleLogout() {
    console.log("i am clicked");
    dispatch(logout());
    localStorage.setItem("token", "");
    localStorage.setItem("userData", "");
  }

  return (
    <div className="relative ">
      {/* //! Navbar for small screen(<=md) */}
      <div
        className={`${
          !isNavbarActive && "hidden"
        } fixed top-0  left-0 h-screen z-[999]  w-[90%]  bg-white md:hidden`}
      >
        <button
          onClick={() => setIsNavbarActive(false)}
          className="text-4xl text-red-400"
        >
          <IoClose />{" "}
        </button>

        {/* small screen navbar container */}
        <div className=" h-full flex flex-col item-center">
          <img
            className=" w-[90px] h-[20px] mx-auto"
            src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2020/07/Logo.png"
            alt=""
          />

          {/* navbar menu items */}
          <div className=" w-full h-full">
            <ul className="my-4 flex flex-col gap-1">
              <li className="text-xl font-semibold px-10 hover:bg-green-500 hover:text-white py-1 rounded">
                Home
              </li>
              <li className="text-xl font-semibold px-10 hover:bg-green-500 hover:text-white py-1 rounded">
                Category
              </li>
              <li className="text-xl font-semibold px-10 hover:bg-green-500 hover:text-white py-1 rounded">
                Trending Product
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* hero container */}
      <div className="h-screen w-full   z-0 overflow-x-hidden">
        {/* navbar container */}
        <div className="md:w-[80%] w-[95%] h-[10%]  mx-auto my-auto overflow-x-hidden">
          {/* nav section */}
          <nav className=" w-full  flex justify-between items-center">
            {/* logo */}
            <div className="">
              <img
                src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2020/07/Logo.png"
                alt=""
              />
            </div>

            {/* search and categories container */}
            <div className="hidden  border-2 border-slate-400 rounded md:flex h-10 justify-between items-center gap-5 w-[45%]">
              {/* input field */}
              <input
                className="p-4 h-8 w-[70%] outline-none rounded"
                type="text"
                name="product"
                id="product"
                placeholder="Find your Product"
              />

              {/* categories dropdown */}
              <div className="w-[20%] xl:text-sm  text-[10px] text-center">
                All Categories
              </div>

              {/* search button */}
              <button
                className="w-[10%] bg-green-500 h-full   flex justify-center items-center"
                type="submit"
              >
                <HiSearch className="text-white text-lg" />
              </button>
            </div>

            {/* button container */}
            <div className="flex justify-between items-center gap-1 md:gap-4">
              {/* small screen navbar button */}
              <button
                onClick={() => {
                  setIsNavbarActive(true);
                }}
                className="text-3xl md:hidden"
              >
                <IoMenu />
              </button>
              {/* wishlist container */}
              <div className="relative selection:bg-transparent">
                <p className="absolute top-0 right-0 border-[2px] border-white  w-[1rem] text-center rounded-full text-[10px] bg-slate-200/90 ">
                  1
                </p>

                <IoHeartOutline className="text-4xl cursor-pointer" />
                {/* count */}
              </div>

              {/* cart container */}
              <div className="relative selection:bg-transparent">
                <IoCartOutline className="text-5xl cursor-pointer" />
                <p className="absolute top-1 right-0 border-[2px] border-white  w-[1rem] text-center rounded-full text-[10px] bg-slate-200/90 ">
                  1
                </p>
              </div>

              {/* login container */}
              {userStatus ? (
                <FaRegUserCircle className="text-4xl cursor-pointer hover:text-green-400 ease-linear duration-300" />
              ) : (
                <button className="py-2 px-4 font-bold bg-green-500  md:text-xl text-white rounded text-center">
                  <a href="/login"> Login</a>
                </button>
              )}

              {userStatus ? (
                <>
                  <MdLogout
                    onClick={() => handleLogout()}
                    className="text-4xl cursor-pointer hover:text-red-400 ease-linear duration-300"
                  />
                </>
              ) : null}
            </div>
          </nav>
        </div>

        {/* slider container */}
        <div className="h-[90%]  ">
          <Swiper
            // install Swiper modules
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper"
            className="h-full overflow-x-hidden"
          >
            <SwiperSlide
              className="bg-no-repeat bg-cover bg-center "
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1714423126086-3c5009fcd09a?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1624711078028-19ed36a91f02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            ></SwiperSlide>

            <SwiperSlide
              className="bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1476837579993-f1d3948f17c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            ></SwiperSlide>

            <SwiperSlide
              className="bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1629665001701-a232a0ba4eec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            ></SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* product categories container */}
      <div className="h-screen w-full border border-transparent z-0">
        {/* product category upper menu */}
        <div className="md:w-[80%] w-[95%] h-[20%] border-2 mx-auto mt-10 mb-4 flex justify-between items-center  ">
          {/* category 1 */}
          <div
            onClick={() => setCategory(0)}
            className={`h-full w-[15%] flex justify-center items-center flex-col cursor-pointer selection:bg-transparent transition-all ease-linear duration-500
              ${category === 0 && " bg-green-500"}
             `}
          >
            <IoFastFoodSharp
              className={`md:text-4xl text-xl  transition-all ease-linear duration-500
              ${category === 0 && "text-white"}
              `}
            />

            <h4
              className={`md:text-lg text-[10px] font-semibold transition-all ease-linear duration-500 ${
                category === 0 && "text-white"
              }`}
            >
              category 1
            </h4>
            <p
              className={`md:text-sm text-[8px] text-wrap text-center transition-all ease-linear duration-500 ${
                category === 0 && "text-white"
              }`}
            >
              20 Products
            </p>
          </div>

          {/* line */}
          <div className="h-[50%] border-2 rounded-xl"></div>

          {/* category 2 */}
          <div
            onClick={() => setCategory(1)}
            className={`h-full w-[15%] flex justify-center items-center flex-col cursor-pointer selection:bg-transparent
              transition-all ease-linear duration-500
              ${category === 1 && " bg-green-500"}
              `}
          >
            <IoFastFoodSharp
              className={`md:text-4xl text-xl  transition-all ease-linear duration-500
              ${category === 1 && "text-white"}
              `}
            />

            <h4
              className={`md:text-lg text-[10px] font-semibold transition-all ease-linear duration-500  ${
                category === 1 && "text-white"
              }`}
            >
              category 2
            </h4>
            <p
              className={`md:text-sm text-[8px] text-wrap text-center transition-all ease-linear duration-500 ${
                category === 1 && "text-white"
              }`}
            >
              20 Products
            </p>
          </div>

          {/* line */}
          <div className="h-[50%] border-2 rounded-xl"></div>

          {/* category 3 */}
          <div
            onClick={() => setCategory(2)}
            className={`h-full w-[15%] flex justify-center items-center flex-col cursor-pointer selection:bg-transparent
              transition-all ease-linear duration-500
              ${category === 2 && " bg-green-500"}
              `}
          >
            <IoFastFoodSharp
              className={`md:text-4xl text-xl  transition-all ease-linear duration-500
              ${category === 2 && "text-white"}
              `}
            />

            <h4
              className={`md:text-lg text-[10px] font-semibold transition-all ease-linear duration-500 ${
                category === 2 && "text-white"
              }`}
            >
              category 3
            </h4>
            <p
              className={`md:text-sm text-[8px] text-wrap text-center transition-all ease-linear duration-500 ${
                category === 2 && "text-white"
              }`}
            >
              20 Products
            </p>
          </div>

          {/* line */}
          <div className="h-[50%] border-2 rounded-xl"></div>

          {/* category 4 */}
          <div
            onClick={() => setCategory(3)}
            className={`h-full w-[15%] flex justify-center items-center flex-col cursor-pointer selection:bg-transparent
              transition-all ease-linear duration-500
              ${category === 3 && " bg-green-500"}
              `}
          >
            <IoFastFoodSharp
              className={`md:text-4xl text-xl  transition-all ease-linear duration-500
              ${category === 3 && "text-white"}
              `}
            />

            <h4
              className={`md:text-lg text-[10px] font-semibold transition-all ease-linear duration-500 ${
                category === 3 && "text-white"
              }`}
            >
              category 4
            </h4>
            <p
              className={`md:text-sm text-[8px] text-wrap text-center transition-all ease-linear duration-500 ${
                category === 3 && "text-white"
              }`}
            >
              20 Products
            </p>
          </div>

          {/* line */}
          <div className="h-[50%] border-2 rounded-xl"></div>

          {/* category 5 */}
          <div
            onClick={() => setCategory(4)}
            className={`h-full w-[15%] flex justify-center items-center flex-col cursor-pointer selection:bg-transparent
              transition-all ease-linear duration-500
              ${category === 4 && " bg-green-500"}
              `}
          >
            <IoFastFoodSharp
              className={`md:text-4xl text-xl  transition-all ease-linear duration-500
              ${category === 4 && "text-white"}
              `}
            />

            <h4
              className={`md:text-lg text-[10px] font-semibold transition-all ease-linear duration-500 ${
                category === 4 && "text-white"
              }`}
            >
              category 5
            </h4>
            <p
              className={`md:text-sm text-[8px] text-wrap text-center transition-all ease-linear duration-500 ${
                category === 4 && "text-white"
              }`}
            >
              20 Products
            </p>
          </div>

          {/* line */}
          <div className="h-[50%] border-2 rounded-xl"></div>

          {/* category 6 */}
          <div
            onClick={() => setCategory(5)}
            className={`h-full w-[15%] flex justify-center items-center flex-col cursor-pointer selection:bg-transparent
              transition-all ease-linear duration-500
              ${category === 5 && " bg-green-500"}
              `}
          >
            <IoFastFoodSharp
              className={`md:text-4xl text-xl  transition-all ease-linear duration-500
              ${category === 5 && "text-white"}
              `}
            />

            <h4
              className={`md:text-lg text-[10px] font-semibold transition-all ease-linear duration-500 ${
                category === 5 && "text-white"
              }`}
            >
              category 6
            </h4>
            <p
              className={`md:text-sm text-[8px] text-wrap text-center transition-all ease-linear duration-500 ${
                category === 5 && "text-white"
              }`}
            >
              20 Products
            </p>
          </div>
        </div>

        {/* category content */}
        <div className=" w-[80%] mx-auto h-[70%]">
          {/* card container */}
          <div className=" h-full w-full flex flex-wrap items-start justify-between">
            {products[category].items.map((data, index) => (
              <a
                key={index}
                href="/product"
                className="flex justify-center items-center flex-col flex-wrap md:w-[200px]  w-[100px]"
              >
                <img src={data} alt="" />

                <h3 className="font-bold text-xl">{index}</h3>
                {/* price section */}
                <div className=" w-full flex justify-center items-center gap-1">
                  <h4 className="font-bold text-slate-400/50 line-through">
                    $199
                  </h4>
                  <h4 className="font-bold text-green-500">$40</h4>
                </div>
              </a>
            ))}

            {/* card 1 */}
          </div>
        </div>
      </div>

      {/* trending items */}
      <div className="h-screen w-full   z-0">
        {/* upper container / menu container*/}
        <div className="md:w-[80%] w-full  h-[5%] mx-auto flex flex-col justify-center items-center mt-14 md:mt-8 gap-3 relative">
          {/* content */}
          <div className="w-full flex justify-between items-center flex-col md:flex-row px-2 gap-2">
            {/* page title */}
            <h4 className="text-2xl font-semibold selection:bg-transparent">
              Trending Products
            </h4>

            {/* menu container */}
            <div>
              <ul className="flex gap-8 items-center">
                <li className="md:text-lg text-[10px]font-semibold hover:text-green-500 cursor-pointer selection:bg-transparent">
                  On Sell
                </li>
                <li className="md:text-lg text-[10px]font-semibold hover:text-green-500 cursor-pointer selection:bg-transparent">
                  Hot Sell
                </li>
                <li className="md:text-lg text-[10px]font-semibold hover:text-green-500 cursor-pointer selection:bg-transparent">
                  Trend
                </li>
                <li className="md:text-lg text-[10px]font-semibold hover:text-green-500 cursor-pointer selection:bg-transparent">
                  Best Sell
                </li>
              </ul>
            </div>
          </div>

          {/* line */}
          <div className="border w-full border-slate-200 rounded-md  absolute -bottom-4 left-0"></div>
        </div>

        {/* card container */}
        <div className=" mt-10 w-[80%] mx-auto h-[80%] flex justify-center items-center gap-10 flex-wrap overflow-y-auto">
          {/* card1 */}
          <div className="w-[257px] h-[380px] border-2 border-slate-300 rounded-md flex flex-col items-center justify-between">
            {/* image */}
            <img
              className="h-[60%]"
              src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/15-min-300x300.jpg"
              alt=""
            />

            {/* card information/product details */}
            <div className="px-3 flex flex-col items-start w-full h-[30%]">
              {/* category */}
              <h4 className="text-lg font-semibold text-slate-400">Category</h4>

              {/* product title */}
              <h4 className="text-lg font-semibold ">Product title</h4>

              {/*price section  */}
              <div className="  flex justify-center items-center gap-1">
                <h4 className="font-bold text-slate-400/50 line-through">
                  $199
                </h4>
                <h4 className="font-bold text-green-500">$40</h4>
              </div>
            </div>
          </div>

          {/* card2 */}
          <div className="w-[257px] h-[380px] border-2 border-slate-300 rounded-md flex flex-col items-center justify-between">
            {/* image */}
            <img
              className="h-[60%]"
              src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/15-min-300x300.jpg"
              alt=""
            />

            {/* card information/product details */}
            <div className="px-3 flex flex-col items-start w-full h-[30%]">
              {/* category */}
              <h4 className="text-lg font-semibold text-slate-400">Category</h4>

              {/* product title */}
              <h4 className="text-lg font-semibold ">Product title</h4>

              {/*price section  */}
              <div className="  flex justify-center items-center gap-1">
                <h4 className="font-bold text-slate-400/50 line-through">
                  $199
                </h4>
                <h4 className="font-bold text-green-500">$40</h4>
              </div>
            </div>
          </div>

          {/* card3 */}
          <div className="w-[257px] h-[380px] border-2 border-slate-300 rounded-md flex flex-col items-center justify-between">
            {/* image */}
            <img
              className="h-[60%]"
              src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/15-min-300x300.jpg"
              alt=""
            />

            {/* card information/product details */}
            <div className="px-3 flex flex-col items-start w-full h-[30%]">
              {/* category */}
              <h4 className="text-lg font-semibold text-slate-400">Category</h4>

              {/* product title */}
              <h4 className="text-lg font-semibold ">Product title</h4>

              {/*price section  */}
              <div className="  flex justify-center items-center gap-1">
                <h4 className="font-bold text-slate-400/50 line-through">
                  $199
                </h4>
                <h4 className="font-bold text-green-500">$40</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer container */}
      <div className="h-screen w-full relative ">
        {/* data ribbon container */}
        <div className="w-full h-[150px]  bg-green-500 flex  items-center justify-between md:px-20">
          {/* features card 1*/}
          <div className=" h-full flex items-center justify-center flex-col md:p-2 p-1 gap-2">
            <IoFastFoodSharp className="md:text-5xl text-2xl text-white" />
            <h4 className="text-white font-semibold md:text-base text-[10px] text-center">
              Eat Fresh, Stay Fresh!
            </h4>
          </div>

          {/* line */}
          <div className="md:h-[50%] h-[80%] border rounded-lg border-white"></div>

          {/* features card 2*/}
          <div className=" h-full flex items-center justify-center flex-col md:p-2 p-1 gap-2">
            <IoFastFoodSharp className="md:text-5xl text-2xl text-white" />
            <h4 className="text-white font-semibold md:text-base text-[10px] text-center">
              Groceries Galore, and More!
            </h4>
          </div>

          {/* line */}
          <div className="md:h-[50%] h-[80%] border rounded-lg border-white"></div>

          {/* features card 3*/}
          <div className=" h-full flex items-center justify-center flex-col md:p-2 p-1 gap-2">
            <IoFastFoodSharp className="md:text-5xl text-2xl text-white" />
            <h4 className="text-white font-semibold md:text-base text-[10px] text-center">
              Fresh Finds, Every Time!
            </h4>
          </div>

          {/* line */}
          <div className="md:h-[50%] h-[80%] border rounded-lg border-white"></div>

          {/* features card 4*/}
          <div className=" h-full flex items-center justify-center flex-col md:p-2 p-1 gap-2">
            <IoFastFoodSharp className="md:text-5xl text-2xl text-white" />
            <h4 className="text-white font-semibold md:text-base text-[10px] text-center">
              Grocery Goals!
            </h4>
          </div>
        </div>

        {/* footer section */}
        <div className="md:w-[80%] w-full mx-auto gap-2 md:gap-0 my-10 md:my-20 flex justify-between md:flex-row flex-col items-center">
          {/* left section / address */}
          <div className="flex flex-col gap-3 md:gap-7 items-center md:items-start justify-start md:w-1/2">
            <img
              className="md:w-[15%] w-[20%]"
              src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2020/07/Logo.png"
              alt=""
            />

            <h3 className="text-slate-400 font-semibold text-[14px] md:text-base text-center md:text-start">
              50, South Block, Shri Mayur Maheshwari, Dy. Secretary New Delhi.
              D-II/73 Kaka Nagar, New Delhi.
            </h3>

            <button className="bg-red-400 py-2 px-4 text-white font-semibold rounded">
              See Map
            </button>
          </div>

          {/* right section / quick links */}
          <div className="w-1/2 flex flex-col justify-center items-center gap-2">
            <h1 className="md:text-2xl text-xl font-bold text-green-500">
              Quick Links
            </h1>
            <ul className="w-full flex flex-col justify-center items-center h-full gap-3">
              <li className="md:text-xl text-lg font-semibold hover:text-green-500">
                Item1
              </li>
              <li className="md:text-xl text-lg font-semibold hover:text-green-500">
                Item2
              </li>
              <li className="md:text-xl text-lg font-semibold hover:text-green-500">
                Item3
              </li>
              <li className="md:text-xl text-lg font-semibold hover:text-green-500">
                Item4
              </li>
            </ul>
          </div>
        </div>

        {/* copyright section */}
        <div className="h-24 bg-slate-400 absolute bottom-0 w-full flex justify-center items-center   ">
          <a
            className="text-black no-underline md:text-lg  font-semibold"
            href="https://github.com/harshjiop/Grocery-app"
          >
            ©Harshvardhan Kumar & Lokesh Ghosh
          </a>
        </div>
      </div>
    </div>
  );
}
