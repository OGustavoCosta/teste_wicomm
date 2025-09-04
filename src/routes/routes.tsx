import { createBrowserRouter} from "react-router"
import HomePage from "../pages/home/HomePage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
])

export default router