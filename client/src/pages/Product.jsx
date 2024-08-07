import { IoIosArrowForward, IoHeartOutline, IoCartOutline } from "../icons";

export default function Product() {
  return (
    <div className="h-screen w-full ">
      {/* navbar container */}
      <div className="border h-20 bg-slate-200 w-full flex items-center">
        {/* navbar section */}
        <div className="w-[80%] mx-auto text-md flex items-center gap-3">
          <h3>
            <a href="/">Home</a>
          </h3>
          <IoIosArrowForward className="font-bold" />
          <h3>Grocery</h3>
          <IoIosArrowForward className="font-bold" />
          <h3>Orange</h3>
        </div>
      </div>

      {/* product details */}
      <div className="md:w-[80%] w-[90%] mx-auto my-4 flex justify-between flex-col md:flex-row">
        {/* left section/ product image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/14-min.jpg"
            alt=""
          />
        </div>

        {/* right section / product information */}
        <div className="md:w-1/2 w-full flex justify-start pt-10 items-center  md:items-start flex-col gap-4">
          {/* product name */}
          <h3 className="text-xl font-bold w-full md:text-start text-center">
            Product Name
          </h3>

          {/* product description */}
          <h4 className="text-slate-400 w-full md:text-start text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            fugiat necessitatibus quo delectus quasi porro, ut modi officiis
            corporis nam? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Magnam, tenetur voluptatibus a quis ab, animi asperiores odit
            veritatis quia repellat consequatur vitae similique quam commodi
            obcaecati quaerat at illum nemo incidunt aspernatur dignissimos id
            perspiciatis. Alias magnam architecto dolores suscipit!
          </h4>

          {/* categories container */}
          <div className="flex gap-2 font-semibold">
            <h4>Categories:</h4>
            <p className="text-green-500">Grocery,</p>
            <p className="text-green-500">Fruits,</p>
            <p className="text-green-500">Foods and Drinks</p>
          </div>

          {/* price section */}
          <div className=" flex justify-center items-center gap-1">
            <h4 className="font-bold text-slate-400/50 line-through">$199</h4>
            <h4 className="font-bold text-green-500">$40</h4>
          </div>

          {/* button section */}
          <div className="flex gap-3">
            <button className="border py-2 px-4 rounded-lg">
              <IoHeartOutline className="text-green-500 text-lg" />
            </button>
            <button className="border py-2 px-4 rounded-lg">
              <IoCartOutline className="text-green-500 text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* review container */}
      <div className="h-screen">
        {/* review section */}
        <div className="md:w-[80%] w-full h-full mx-auto border border-slate-400 rounded-xl flex flex-col gap-2">
          <h3 className="w-[80%] mx-auto text-green-500 text-lg font-semibold">
            Reviews(0)
          </h3>
          <div className="w-[80%] mx-auto border rounded-xl "></div>

          {/* review card container */}
          <div className="my-2  h-full px-4 flex flex-wrap mx-auto gap-8 justify-center overflow-y-auto">
            {/* card 1 */}
            <div className="border-2  rounded border-green-500 md:w-[220px] md:h-[380px] w-[250px] h-[400px] flex flex-col justify-between">
              {/* upper section / review image */}
              <div className="h-[55%] w-[90%] mx-auto p-2">
                <img
                  className="w-full h-full"
                  src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/08/1-min.jpg"
                  alt=""
                />
              </div>

              {/* lower section / review description */}
              <div className="h-[40%] border px-2 relative">
                {/* upper description / review title */}
                <div className="flex   justify-between">
                  <h3 className="text-xl font-semibold">Awesome</h3>
                  <div className="w-[40%] flex justify-center items-center">
                    <img
                      src="https://ilokeshghosh.github.io/Web-Development-Projects/agency-landing-page/assets/stars.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* lower description /  description text */}
                <div className="border overflow-y-auto h-[80%]">
                  <p className="border text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi ratione exercitationem dolorem sunt praesentium quo
                    quas, ducimus iure corrupti velit.
                  </p>
                </div>

                {/* //! floating text / reviewer name */}
                <div className="flex gap-1 text-md font-semibold absolute top-[-197px] right-[-53px] rotate-90">
                  <h4 className="text-slate-400">-by</h4>
                  <h4 className="text-green-500">Nitro 5</h4>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="border-2  rounded border-green-500 md:w-[220px] md:h-[380px] w-[250px] h-[400px] flex flex-col justify-between">
              {/* upper section / review image */}
              <div className="h-[55%] w-[90%] mx-auto p-2">
                <img
                  className="w-full h-full"
                  src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/08/1-min.jpg"
                  alt=""
                />
              </div>

              {/* lower section / review description */}
              <div className="h-[40%] border px-2 relative">
                {/* upper description / review title */}
                <div className="flex   justify-between">
                  <h3 className="text-xl font-semibold">Awesome</h3>
                  <div>stars</div>
                </div>

                {/* lower description /  description text */}
                <div className="border overflow-y-auto h-[80%]">
                  <p className="border text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi ratione exercitationem dolorem sunt praesentium quo
                    quas, ducimus iure corrupti velit.
                  </p>
                </div>

                {/* //! floating text / reviewer name */}
                <div className="flex gap-1 text-md font-semibold absolute top-[-197px] right-[-53px] rotate-90">
                  <h4 className="text-slate-400">-by</h4>
                  <h4 className="text-green-500">Nitro 5</h4>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="border-2  rounded border-green-500 md:w-[220px] md:h-[380px] w-[250px] h-[400px] flex flex-col justify-between">
              {/* upper section / review image */}
              <div className="h-[55%] w-[90%] mx-auto p-2">
                <img
                  className="w-full h-full"
                  src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/08/1-min.jpg"
                  alt=""
                />
              </div>

              {/* lower section / review description */}
              <div className="h-[40%] border px-2 relative">
                {/* upper description / review title */}
                <div className="flex   justify-between">
                  <h3 className="text-xl font-semibold">Awesome</h3>
                  <div>stars</div>
                </div>

                {/* lower description /  description text */}
                <div className="border overflow-y-auto h-[80%]">
                  <p className="border text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi ratione exercitationem dolorem sunt praesentium quo
                    quas, ducimus iure corrupti velit.
                  </p>
                </div>

                {/* //! floating text / reviewer name */}
                <div className="flex gap-1 text-md font-semibold absolute top-[-197px] right-[-53px] rotate-90">
                  <h4 className="text-slate-400">-by</h4>
                  <h4 className="text-green-500">Nitro 5</h4>
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div className="border-2 rounded border-green-500 md:w-[220px] md:h-[380px] w-[250px] h-[400px] flex flex-col justify-between">
              {/* upper section / review image */}
              <div className="h-[55%] w-[90%] mx-auto p-2">
                <img
                  className="w-full h-full"
                  src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/08/1-min.jpg"
                  alt=""
                />
              </div>

              {/* lower section / review description */}
              <div className="h-[40%] border px-2 relative">
                {/* upper description / review title */}
                <div className="flex   justify-between">
                  <h3 className="text-xl font-semibold">Awesome</h3>
                  <div>stars</div>
                </div>

                {/* lower description /  description text */}
                <div className="border overflow-y-auto h-[80%]">
                  <p className="border text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi ratione exercitationem dolorem sunt praesentium quo
                    quas, ducimus iure corrupti velit.
                  </p>
                </div>

                {/* //! floating text / reviewer name */}
                <div className="flex gap-1 text-md font-semibold absolute top-[-197px] right-[-53px] rotate-90">
                  <h4 className="text-slate-400">-by</h4>
                  <h4 className="text-green-500">Nitro 5</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright section */}
      <div className="h-24 bg-slate-400  my-3 w-full flex justify-center items-center   ">
        <a
          className="text-black no-underline text-lg font-semibold"
          href="https://github.com/harshjiop/Grocery-app"
        >
          ©Harshvardhan Kumar & Lokesh Ghosh
        </a>
      </div>
    </div>
  );
}
