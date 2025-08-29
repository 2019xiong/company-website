import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Boards from "./pages/Boards";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex justify-center mt-8">
        <Boards />
      </div>
    )
  },
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
