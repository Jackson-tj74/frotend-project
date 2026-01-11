
function Contact1Child({ Head, Address, Region, Phone, Email }) {
  return (
    <>
      <div className="text-2xl py-15 px-5 " >
        <h1 className="text-xl font-bold py-4">{Head}</h1><br />
        <h2>Address:{Address}</h2>
        <h2>{Region}</h2>
        <h3>Phone:{Phone}</h3>
        <p>Email:{Email}</p>
      </div>

    </>
  )
}

export default Contact1Child