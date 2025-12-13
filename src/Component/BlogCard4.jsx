import pic9 from "../assets/pic9.jpg"
function BlogCard4() {
  return (
    <>
     <div className="relative inline-block">
          
          <img src={pic9} alt="background" className="block  " />
          
          
          <div className="absolute top-1/3 left-1/2 transform -translate-x-2/2 -translate-y-1/2   ">
           
   <div className="  py-20 px-3">
      <div className=" text-black  box-w-60  px-5">
        <h3 className=" text-2xl"> Transform Your Space with Our Cleaning Magic</h3>
        <h2 className="  py-4">Sample text. Click to select the Text Element.</h2>
        <input className="  bg-white   h-12 w-100 rounded-3xl px-3" type="email" placeholder="Enter a vaild email"  />
        <button className=" bg-yellow-500 h-10 w-30 text-white rounded-2xl space-x-4">SUBMIT</button>
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

export default BlogCard4
