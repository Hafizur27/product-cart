import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import HomePage from "../Components/HomePage/HomePage";
import Cart from "../Components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: 'cart',
        element: <Cart />
      },
    ],
  },
]);

export default router;
