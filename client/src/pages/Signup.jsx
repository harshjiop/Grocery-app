import { useForm } from "react-hook-form";
import authentication from "../services/authentication";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      if (data.password === data.repassword) {
        const [firstName, lastName] = data.name.split(" ");
        data.firstName = firstName;
        data.lastName = lastName;

        const response = await authentication.signUp(data);
        if (response) {
          console.log("user created");
          navigate("/login");
        }
      } else {
        console.log("password not matched, try again :/");
      }
    } catch (error) {
      console.log("error in account creation , error is ", error);
    }
  }

  return (
    <div className=" h-screen w-full flex ">
      {/* left section */}
      <div
        className="w-[60%] h-full bg-green-500 hidden lg:flex justify-center items-center"
        // style={{fontFamily:'Poppins, sans-serif',}}
      >
        <img
          className="h-[60%] w-[60%] object-cover"
          src="https://ik.imagekit.io/8fgpvoiai/grocery-store/Mobile%20login-bro_U1KGX3Vx3.png?updatedAt=1719384148896"
          alt=""
        />
      </div>

      {/* right section */}
      <div
        className=" w-full lg:w-[40%] h-full flex flex-col justify-center items-center gap-4 "
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* title */}
        <h2 className="font-bold text-4xl text-green-500">Signup 🔒</h2>

        {/* lower container */}
        <div className="h-[50%] lg:h-[70%] w-full">
          <form
            className="flex flex-col h-full w-[70%] mx-auto  gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* name input container*/}
            <div className="flex flex-col">
              <label className="font-normal" htmlFor="name">
                Name
              </label>
              <input
                className="outline-none p-2 border-2 rounded border-green-500 h-10"
                type="text"
                name="name"
                id="name"
                {...register("name", { required: true })}
              />
            </div>

            {/* email input container */}
            <div className="flex flex-col">
              <label className="font-normal" htmlFor="email">
                Email
              </label>
              <input
                className="outline-none p-2 border-2 rounded border-green-500 h-10"
                type="text"
                name="email"
                id="email"
                {...register("email", { register: true })}
              />
            </div>

            {/* mobile input container */}
            <div className="flex flex-col">
              <label className="font-normal" htmlFor="mobile">
                Mobile
              </label>
              <input
                className="outline-none p-2 border-2 rounded border-green-500 h-10"
                type="tel"
                name="mobile"
                id="mobile"
                {...register("mobile_number", { register: true })}
              />
            </div>

            {/* password input container */}
            <div className="flex flex-col">
              <label
                className="focus:font-bold font-normal selection:font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="outline-none p-2 border-2 rounded border-green-500 h-10"
                type="password"
                name="password"
                id="password"
                {...register("password", { required: true })}
              />
            </div>

            {/* retype password input container */}
            <div className="flex flex-col">
              <label
                className="focus:font-bold font-normal selection:font-bold"
                htmlFor="repassword"
              >
                Retype Password
              </label>
              <input
                className="outline-none p-2 border-2 rounded border-green-500 h-10"
                type="password"
                name="repassword"
                id="repassword"
                {...register("repassword", { required: true })}
              />
            </div>

            {/* button section */}
            <div className="flex flex-col w-full mt-8 gap-2">
              {/* links section */}
              <div className="flex gap-0 justify-between w-full items-center ">
                <a
                  className="hover:text-green-500 ease-linear transition-all duration-400"
                  href="/login"
                >
                  Already have Account ?
                </a>
                <a
                  className="hover:text-green-500 ease-linear transition-all duration-400"
                  href="/#"
                >
                  Reset Password
                </a>
              </div>

              {/* submit button */}
              <button
                className=" bg-green-500 rounded h-10 font-bold text-white text-xl duration-500 ease-linear transition-all hover:bg-white hover:border-2 hover:border-green-500 hover:text-black "
                type="submit"
              >
                Create Account 🔓
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
