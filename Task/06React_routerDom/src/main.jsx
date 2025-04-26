import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout'
import Home from './COMPONENTS/Home/Home'
import About from './COMPONENTS/About/About'
import Contact from './COMPONENTS/Contact/Contact'
import User from './COMPONENTS/User/User'
import Github,{githubInfoLoader} from "./COMPONENTS/Github/Github.jsx";
import './index.css'



const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home/> },
        { path: "about", element: <About/> },
        { path: "contact", element: <Contact/> },
        { path: "github", 
          loader: githubInfoLoader,  // ✅ Corrected syntax
          element: <Github/> 
        },
        { path: "user/:userid", element: <User/> }, // No loader needed here
      ],
    },
  ]);
//this is also good but we can use the this too
// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Layout />}>
//         <Route path='' element={<Home />} />
//         <Route path='about' element={<About />} />
//         <Route path='contact' element={<Contact />} />
//         <Route path='user/:userid' element={<User />} />
//         <Route 
//         loader={githubInfoLoader}
//         path='github' 
//         element={<Github />}
//          />
//       </Route>
//     )
//   )
  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);
