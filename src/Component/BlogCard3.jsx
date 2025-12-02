import world from "../assets/world.png";

function BlogCard3() {
  return (
    <>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    <div className="text-2xl font-bold px-5 py-7">
        <ol>
            <li>ⓥ Istanbul</li>
             <li>ⓥ London </li>
              <li>ⓥ S. Petersburg </li> <br/>
               <li>ⓥ Warsaw </li>
                <li>ⓥ Belgrade</li>
                 <li>ⓥ Budapest </li>
                  <li>ⓥ Barcelona </li><br/>
                   <li>ⓥ Munich</li>
                    <li>ⓥ Milan </li>
                     <li>ⓥ Birminghan</li>
                      <li>ⓥ Cologne </li>

        </ol>
    </div>
    <div>
        <img src={world} alt="" ></img>
    </div>
</div>

    </>
  )
}

export default BlogCard3