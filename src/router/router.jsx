import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/Homepage";
import About from "../pages/About";
import Layout from "../components/Layout";
import Vitrine from "../pages/Vitrine";
import Error404 from "../pages/Error404";
import TarifsEtPrestations from "../pages/Tarifs&Prestations";
import LegalMentions from "../pages/LegalMentions";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "About",
          element: <About />
        },
        {
          path: "Tarifs&Prestations",
          element: <TarifsEtPrestations />
        },
        {
          path: "Vitrine",
          element: <Vitrine />
        },
        {
          path: "LegalMentions",
          element: <LegalMentions />
        },
        {
          path: "*",
          element: <Error404 />
        },
      ],
    },
  ]);
  
  export default Router;