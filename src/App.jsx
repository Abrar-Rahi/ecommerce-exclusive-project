

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./components/Rootlayout"
import Homepage from "./pages/Homepage"
import Aboutpage from "./pages/Aboutpage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route  path="/" element={<Rootlayout/>}>

      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/about" element={<Aboutpage/>}></Route>

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



