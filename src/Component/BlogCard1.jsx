
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import BlogCard1Child from "./BlogCard1Child.jsx";


function BlogCard1() {


   return (
      <>
  
   <div className="relative inline-block">
      
      <img src={pic1} alt="background" className=" block  h-100 w-400" />
      
      
      <div className="  absolute top-1/3 left-1/2 transform -translate-x-2/2 -translate-y-1/2 text-white   ">
       <h1 className=" px-20"> Our services</h1>
       <h2 className="text-5xl text-center max-w-screen-lg mx-auto px-4 px-20 ">Professional Cleaning</h2>
       <p className="px-20 py-4">Lorem ipsum dolor sit amet, consetetur 
         sadipscing elitr, sed diam nonumy eirmod tempor invidunt
          ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </div>
    </div>
   

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

            <div className=" ms:bg-gray-200  rounded-xl ">
               <BlogCard1Child title="Carpet and Upholstery Cleaning" description="Routine cleaning of living spaces, including dusting, 
vacuuming, and surface cleaning"img={pic6} />
            </div>

            <div className=" bg-gray-200 rounded-xl h-77">
               <BlogCard1Child title="Window Cleaning" description="Routine cleaning of living spaces, including dusting, 
vacuuming, and surface cleaning" img={pic7} />
            </div>

         </div>


         
      </>
   )
}

export default BlogCard1



