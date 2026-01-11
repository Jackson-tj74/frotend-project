

import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import BlogCard1Child from "./BlogCard1Child.jsx";


function ServicesCard() {
  return (
    
      <>
  
         <div>
            <h1 className="text-5xl text-center max-w-screen-lg mx-auto px-4 font-bold py-15 ">Our services</h1>
         </div>



         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 space-y-13 px-17">

            <div className="bg-gray-200  rounded-xl    ">
               <BlogCard1Child title="General House Cleaning" description="Routine cleaning of living spaces, including dusting, 
               vacuuming, and surface cleaning" img={pic2} className="" />
            </div>

            <div className="bg-gray-200  rounded-xl  ">
               <BlogCard1Child title="Deep Cleaning" description="Routine cleaning of living spaces, including dusting, 
              vacuuming, and surface cleaning" img={pic3} />
            </div>


            <div className=" bg-gray-200  rounded-xl ">
               <BlogCard1Child title="Move-In/Move-Out Cleaning" description="Routine cleaning of living spaces, including dusting, 
              vacuuming, and surface cleaning" img={pic4} />
            </div>

            <div className=" bg-gray-200  rounded-xl">
               <BlogCard1Child title="Post-Construction Cleaning" description="Routine cleaning of living spaces, including dusting, 
               vacuuming, and surface cleaning"img={pic5} />
            </div>

            <div className=" bg-gray-200 rounded-xl  ">
               <BlogCard1Child title="Window Cleaning" description="Routine cleaning of living spaces, including dusting, 
              vacuuming, and surface cleaning" img={pic7} />
            </div>
            <div className=" bg-gray-200  rounded-xl h-68">
               <BlogCard1Child title="Carpet and Upholstery Cleaning" description="Routine cleaning of living spaces, including dusting, 
               vacuuming, and surface cleaning"img={pic6} />
            </div>
            </div>


        
    
    </>
  )
}

export default ServicesCard