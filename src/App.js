import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import InputComponents from "./routes/Input";
import DataDisplayComponents from "./routes/DataDisplay";
import Home from "./routes/Home";
import Feedback from "./routes/Feedback";
import Navigation from "./routes/Navigation";
import Surfaces from "./routes/Surfaces";
import Layout from "./routes/Layout";
import Utils from "./routes/Utils";
import Lab from "./routes/Lab";

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
    {
      path: "/navigation",
      element: (
        <>
          <ResponsiveAppBar />
          <Navigation />
        </>
      ),
    },
    {
      path: "/surfaces",
      element: (
        <>
          <ResponsiveAppBar />
          <Surfaces />
        </>
      ),
    },
    {
      path: "/layout",
      element: (
        <>
          <ResponsiveAppBar />
          <Layout />
        </>
      ),
    },
    {
      path: "/utils",
      element: (
        <>
          <ResponsiveAppBar />
          <Utils />
        </>
      ),
    },
    {
      path: "/lab",
      element: (
        <>
          <ResponsiveAppBar />
          <Lab />
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
