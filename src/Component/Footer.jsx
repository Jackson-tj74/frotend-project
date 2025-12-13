import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";


function Footer() {
  return (
    <>
    <div className=" sticky top-0 z-50   bg-gray-100  h-15 px-3">
            <img src={logo} alt="" ></img>
    </div>
    <img src={logo2} alt="" className=" h-auto object-cover  size-40 h-10 w-40 px-10 " ></img>
    </>
  )
}

export default Footer