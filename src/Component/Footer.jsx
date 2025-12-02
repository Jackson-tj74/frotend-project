import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import dvc1 from "../assets/dvc1.png"
import dvc2 from "../assets/dvc2.png"
import dvc3 from "../assets/dvc3.png"
import dvc4 from "../assets/dvc4.png"
import dvc5 from "../assets/dvc5.png"

function Footer() {
  return (
    <>
    <div className=" sticky top-0 z-50   bg-gray-100  h-15 px-3">
            <img src={logo} alt="" ></img>

            <div className="px-115 transform -translate-y-7 ">
            <img src={dvc1} alt=""  ></img>
            </div>

            <div className="px-125 transform -translate-y-15.5">
            <img src={dvc2} alt="" ></img>
            </div>

            <div className="px-135 transform -translate-y-23.5">
            <img src={dvc3} alt="" ></img>
            </div>
 <div className="px-145 transform -translate-y-31">
            <img src={dvc4} alt="" ></img>
            </div>
             <div className="px-154 transform -translate-y-38">
            <img src={dvc5} alt="" ></img>
            </div>
    </div>
    <img src={logo2} alt="" className=" h-auto object-cover  size-40 h-10 w-40 px-10 " ></img>
    </>
  )
}

export default Footer