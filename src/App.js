import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import InputComponents from "./routes/Input";
import DataDisplayComponents from "./routes/DataDisplay";
import Home from "./routes/Home";
import Feedback from "./routes/Feedback";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ResponsiveAppBar />
          <Home />
        </>
      ),
    },
    {
      path: "/input",
      element: (
        <>
          <ResponsiveAppBar />
          <InputComponents />
        </>
      ),
    },
    {
      path: "/datadisplay",
      element: (
        <>
          <ResponsiveAppBar />
          <DataDisplayComponents />
        </>
      ),
    },
    {
      path: "/feedback",
      element: (
        <>
          <ResponsiveAppBar />
          <Feedback />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
