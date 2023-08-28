import { createBrowserRouter } from "react-router-dom";

import Home from "../Component/Home";
import Store from "../Component/Store";
import About from "../Component/About";
import ErrorPage from "../Component/ErrorPage";
import ChildHome from "../Component/ChildHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/child/",
        element: <ChildHome />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/store",
    element: <Store />,
  },
]);

export default router;
