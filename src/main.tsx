/* Root */
import { createRoot } from 'react-dom/client'

/* Router */
import { RouterProvider } from "react-router"
import router from "./routes/routes.tsx"


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
