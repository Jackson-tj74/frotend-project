import { Outlet } from "react-router"
import NavBar from "./NavBar"
import Footer from "./Footer"
function ShowOut() {
  return (
    <>
    <Footer />
    <NavBar />
    <Outlet />
    </>
  )
}

export default ShowOut