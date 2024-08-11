import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import User from "./components/user/User";
import Git from "./components/git/Git";
import App from "../src/App";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: " ",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout></Layout>}>
//       <Route path="" element={<Home></Home>}></Route>
//       <Route path="about" element={<About></About>}></Route>
//       <Route path="contact" element={<Contact></Contact>}></Route>
//       <Route path="user/:userid" element={<User></User>}></Route>
//       <Route path="github" element={<Git></Git>}></Route>
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} /> {/* it require a prop */}
    </Provider>
  </React.StrictMode>
);
