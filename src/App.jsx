import { BrowserRouter,Routes,Route } from "react-router"


import Contact from "./Interfaces/Contact"
import ShowOut from "./Component/ShowOut"
import Home from "./Interfaces/Home"
import Services from "./Interfaces/Services"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      
         <Route path="/" element={<ShowOut />} >
        <Route index element={<Home/>} />
        <Route path="services" element={<Services />} />
      <Route path="contacts" element={<Contact />} />
      
      </Route>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App


