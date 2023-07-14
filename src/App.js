import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./screens/Layout";
import Home from "./screens/Home";
import Tools from "./screens/Tools";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="tools" element={<Tools />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
