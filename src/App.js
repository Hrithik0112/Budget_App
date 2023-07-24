import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
