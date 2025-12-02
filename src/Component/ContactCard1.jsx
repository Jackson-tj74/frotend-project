import Contact1Child from "./Contact1Child"
function ContactCard1() {
  return (
    <>
<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 space-x-4 space-y-10 rounded-xl">
  <div className="text-sm md:text-base lg:text-lg xl:text-xl py-4 bg-gray-100 rounded-xl">
    <Contact1Child Head=" City A" Address="123 Main Street, Suite 101, 
    City A, State/" Region="Region, ZIP Code." Phone="+1 (123) 456-7890"
    Email="citya@cleaningcompany.com "  />

  </div>

   <div className="text-sm md:text-base lg:text-lg xl:text-xl  bg-gray-100 h-86 rounded-xl">
    <Contact1Child Head=" City B" Address="456 Elm Avenue, Floor 2,
     City B, State/" Region="Region, ZIP Code." Phone="+1 (987) 654-3210"
    Email="citya@cleaningcompany.com "  />

  </div>
  
  
</div>

    </>
  )
}

export default ContactCard1