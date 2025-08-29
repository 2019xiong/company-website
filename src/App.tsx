import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Boards from "./pages/Boards";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex justify-center mt-8">
        <Boards />
      </div>
    )
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
