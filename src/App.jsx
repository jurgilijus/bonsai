import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
