import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Boards from "./pages/Boards";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Boards />
  },
  {
    path: "/:id",
    element: <Detail />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
