
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignUp from "./pages/SignUp"
import "./index.scss";
import Root from "./pages/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <SignUp/>
      },
    ]
  },
]);


export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
