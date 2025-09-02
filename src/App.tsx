import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import Detail from "./pages/Detail";
import Leaderboard from "./pages/Leaderboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/leaderboard/:id",
    element: <Detail />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
