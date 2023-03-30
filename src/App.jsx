import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
