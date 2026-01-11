import { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" sticky top-0 z-50   bg-gray-100   h-20 ">
        <img src={logo} alt="" ></img>


        <div className=" hidden md:flex text-[#7190F0]  transform -translate-y-2 space-x-2 px-140">
          <Link className="hover:font-bold" to="/" >Home</Link>
          <Link className=" hover:font-bold" to="/services">Services</Link>
          <Link className=" hover:font-bold" to="/contacts">Contact</Link>
        </div>

        <div className="text-end">
          <button className="inline-block focus:outline-none " onClick={() => setIsOpen(!isOpen)}>

            <div className="md:hidden space-y-1 px-2 ">
              <span className="block w-6 h-0.5 bg-black" />
              <span className="block w-6 h-0.5 bg-black" />
              <span className="block w-6 h-0.5 bg-black" />
            </div>
          </button>
          {isOpen && (
            <div className="md:hidden text-indigo-400 flex flex-col bg-gray-200 w-full  items-center ">
              <Link className="block hover:font-bold" to="/">Home</Link>
              <Link className="block hover:font-bold" to="/services">Services</Link>
              <Link className="block hover:font-bold" to="/contacts">Contact</Link>
            </div>
          )}
        </div>
      </div>




    </>
  )
}

export default NavBar