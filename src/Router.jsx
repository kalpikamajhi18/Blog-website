import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Articles from "./pages/Articles";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

 const router = createBrowserRouter([
    {
        path:"/", element:<Homepage/>,
        children:[
          {
            path:"Contact",
            element:<Contact/>
          }
        ]
    },
    {
        path:"/Articles", element:<Articles/>
    },
     { path:"/Categories", element:<Categories/> },
     {  path:"/About",  element:<About/>},
     { path:"/Shop", element:<Shop/>},
    
])
export default router