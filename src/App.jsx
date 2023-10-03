
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./components/Rootlayout"
import Homepage from "./pages/Homepage"
import Aboutpage from "./pages/Aboutpage"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Errorpage from "./pages/Errorpage";
import Cartpage from "./pages/Cartpage";
import Checkoutpage from "./pages/Checkoutpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route  path="/" element={<Rootlayout/>}>

      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/about" element={<Aboutpage/>}></Route>
      <Route path="/sign-up" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/cart" element={<Cartpage/>}></Route>
      <Route path="/checkout" element={<Checkoutpage/>}></Route>
      <Route path="*" element={<Errorpage/>}></Route>

    </Route>
    </>
  )
);


function App() {
  

  return (
    <>

     <RouterProvider router={router} />
    
    </>
  )
}

export default App



