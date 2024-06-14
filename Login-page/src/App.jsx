import CoverImage from "./assets/rider.svg";

function App() {
  return (
    <section className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full lg:flex flex-col hidden">
        <div className="absolute bottom-[5%] left-[20%] flex flex-col text-white bg-[#585a57] p-6 rounded-xl max-w-[400px]">
          <h1 className="text-4xl font-bold my-4">
            Turn your ideas into reality
          </h1>
          <p className="text-xl font-thin">
            “Using AccMan software has been a game-changer for me! It's
            streamlined my finances, making it effortless to track expenses, set
            budgets, and monitor transactions.”
          </p>
        </div>
        <img src={CoverImage} className="w-full h-full object-cover " />
      </div>

      <div className="w-full lg:w-1/2 h-full bg-[#f5f5f5] flex flex-col p-10 lg:p-20 justify-between">
        <h1 className="text-xl text-[#060606] font-semibold">
          Interactive Brand
        </h1>

        <div className="w-full flex flex-col mb-10">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-2xl font-semibold mb-4">Login</h3>
            <p className="text-base mb-2">Welcome Back! Please enter your name</p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-4 my-2 bg-transparent bg-none border-b border-black focus:outline-none px-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-black py-4 my-2 bg-transparent bg-none border-b border-black focus:outline-none px-2 mb-8"
            />
            <button className="bg-black text-white py-2 mb-4">Log In</button>
            <button className="bg-white text-black border border-black py-2">Register</button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Don't have an account?{" "}
            <span className="font-semibold underline underline-offset-3 cursor-pointer">
              Sign Up For Free
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
