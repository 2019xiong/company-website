import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Boards from "./pages/Boards";
import Detail from "./pages/Detail";
import Leaderboard from "./pages/Leaderboard";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Leaderboard />,
  },
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
