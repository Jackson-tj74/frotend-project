
import pic9 from "../assets/pic9.jpg"

function Footer() {
  return (
    <>


      <div
        className="  min-h-screen-w-50 h-70 lg:w-full lg:h-150 flex items-center justify-center space-y-20 mt-20"
        style={{ backgroundImage: `url(${pic9})`, backgroundSize: "cover" }}
      >



        <div className="text-center    ">

          <div className=" text-center px-5 ">
            
            
              <h3 className=" text-2xl "> Transform Your Space with Our Cleaning Magic</h3>
              <h2 className="  py-4">Sample text. Click to select the Text Element.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:-2 gap-3 flex space-x-4 ">
              <input className=" text-center bg-white   h-12 w-70 rounded-2xl " type="email" placeholder="Enter a vaild email" />
              <button className=" bg-yellow-500 h-10 w-30 text-white rounded-2xl  ">SUBMIT</button>
            </div>
          </div>
        </div>
        </div>
      
      


      <div className="text-white text-center  bg-[#121212] h-45 ">
        <h1 className="py-10" >Sample text. Click to select the Text Element.</h1>
        <h2>This site was created with the Nicepage </h2>
      </div>
    </>
  )
}

export default Footer