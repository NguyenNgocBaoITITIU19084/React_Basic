import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/App.css";
import Todo from "./views/Todo";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <>
        <p>This is home Page</p>
      </>
    ),
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
