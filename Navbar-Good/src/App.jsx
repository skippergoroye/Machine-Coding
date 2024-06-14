import { useState } from "react";
import Navbar from "./components/Navbar";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

function App() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <>
      <div className="bg-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-white">
                Navbar
              </a>
            </div>

            {/* navlinks  */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="text-gray-300 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2  rounded-md text-md font-medium"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
            {/* hambuger button  */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={handleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {open == true ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        {open ? (
          <div className="md:hidden bg-red-500">
            <div className="px-2 pt-8 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-sm text-base font-medium"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
