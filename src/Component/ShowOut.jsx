import { Outlet } from "react-router"
import NavBar from "./NavBar"
import Footer from "./Footer"
function ShowOut() {
  return (
    <>
    <NavBar />
    <Outlet />
   <Footer />
   
    
    
    </>
  )
}

export default ShowOut