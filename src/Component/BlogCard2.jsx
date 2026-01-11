
import pic8 from "../assets/pic8.jpg";
function BlogCard2() {
  return (
    <>
      <div className="text-white bg-blue-300  md:bg-blue-400 lg:bg-blue-500 p-6   h-full space-y-4 h-130 mt-23">
        <img src={pic8} alt="" className=" rounded-full py-10 px-7 "></img>
        <h1 className="text-sm md:text-base lg:text-lg xl:text-xl text-2xl py-5 px-9">Stella Hudson</h1>
        <p className="text-2xl px-9">Amazing service! I hired for a deep cleaning of my home, and they exceeded my expectations. The team was professional, punctual, and paid attention to every detail. My kitchen and bathrooms have never looked this spotless, and even the hard-to-reach areas were thoroughly cleaned. I also appreciated their use of eco-friendly products, which is important to me. Highly recommend them for anyone looking for reliable and high-quality cleaning services!</p>
      </div>

    </>
  )
}

export default BlogCard2