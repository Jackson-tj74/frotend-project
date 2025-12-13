import { useState } from "react";
import { Link } from "react-router";
function NavBar() {
    
    
  return (
    <>
 <div className="text-end   transform -translate-y-7 space-x-2">
        <Link  className=" hover:text-[#7190F0]"  to="/">Services</Link>
        <Link  className=" hover:text-[#7190F0]"  to="/contacts">Contact</Link>
      </div>
    
    </>
  )
}

export default NavBar