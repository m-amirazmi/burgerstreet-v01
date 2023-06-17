import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { browserRouter } from "./utils/menu";

const router = createBrowserRouter(browserRouter);

export default function App() {
  return <RouterProvider router={router} />;
}
