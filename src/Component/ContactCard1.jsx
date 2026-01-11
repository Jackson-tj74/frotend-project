import Contact1Child from "./Contact1Child"
function ContactCard1() {
  return (
    <>
     <h2 className="text-3xl text-black font-bold text-center py-10">Contact us </h2>


      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 space-x-4  mt-10">

        <div className=" bg-gray-100 rounded-xl">
          <Contact1Child Head=" City A" Address="123 Main Street, Suite 101, 
    City A, State/" Region="Region, ZIP Code." Phone="+1 (123) 456-7890"
            Email="citya@cleaningcompany.com " />

        </div>

        <div className="  bg-gray-100 h-86 rounded-xl">
          <Contact1Child Head=" City B" Address="456 Elm Avenue, Floor 2,
     City B, State/" Region="Region, ZIP Code." Phone="+1 (987) 654-3210"
            Email="citya@cleaningcompany.com " />

        </div>


      </div>

    </>
  )
}

export default ContactCard1