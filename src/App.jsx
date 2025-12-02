import { BrowserRouter,Routes,Route } from "react-router"
import Services from "./Interfaces/Services"
import Contact from "./Interfaces/Contact"
import ShowOut from "./Component/ShowOut"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<ShowOut />} />
        <Route index element={<Services/>} />
      <Route path="contacts" element={<Contact />} />
      </Route>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App


