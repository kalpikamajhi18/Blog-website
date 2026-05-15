import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Articles from "./pages/Articles";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import MainOutlet from "./MainOutlet";

 const router = createBrowserRouter([
    {
        path:"/", element:<MainOutlet/>,
        children:[
          {index:true, element:<Homepage/>},
           { path:"Articles", element:<Articles/> },
            { path:"Categories", element:<Categories/> },
            {  path:"About",  element:<About/>},
               { path:"Shop", element:<Shop/>},
          {  path:"Contact",element:<Contact/> }
        ]
    }
   
    
     
  
    
])
export default router