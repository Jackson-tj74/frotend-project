

function BlogCard1Child({ title, description, img }) {
  return (
    <>

      <div>
        <h3 className="font-bold py-3">{title}</h3>

        <p className="py-2">{description}</p>

        <img src={img} className=" rounded-4xl h-40 w-60  py-2 " alt="Brown image" />

      </div>


    </>
  )
}

export default BlogCard1Child