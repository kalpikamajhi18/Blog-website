import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Articles from "./pages/Articles";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import MainOutlet from "./MainOutlet";
import Busniss from "./pages/Categories items/Busniss";
import Automotive from "./pages/Categories items/Automotive";
import Entertainment from "./pages/Categories items/Entertainment";
import Gaming from "./pages/Categories items/Gaming";
import Hobbies from "./pages/Categories items/Hobbies";
import LifeStyle from "./pages/Categories items/LifeStyle";
import Others from "./pages/Categories items/Others";
import Science from "./pages/Categories items/Science";
import SocialIssues from "./pages/Categories items/SocialIssues";
import Technology from "./pages/Categories items/Technology";
import TravelCulture from "./pages/Categories items/TravelCulture";
import WorkLife from "./pages/Categories items/WorkLife";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "Articles", element: <Articles /> },
      { path: "Categories", element: <Categories /> },
      { path: "/About", element: <About /> },
      { path: "/Shop", element: <Shop /> },
      { path: "Contact", element: <Contact /> },

      // categories items 
      { path: "busniss", element: <Busniss /> },
      { path: "Automotive", element: <Automotive /> },
      { path: "Entertainment", element: <Entertainment /> },
      { path: "Gaming", element: <Gaming /> },
      { path: "Hobbies", element: <Hobbies /> },
      { path: "Lifestyle", element: <LifeStyle /> },
      { path: "Others", element: <Others /> },
      { path: "Science", element: <Science /> },
      { path: "Socialissues", element: <SocialIssues /> },
      { path: "Technology", element: <Technology /> },
      { path: "travelculture", element: <TravelCulture /> },
      { path: "Worklife", element: <WorkLife /> },


    ],
  },
]);
export default router;
