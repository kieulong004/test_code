import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";

import Homepages from "./components/homepages";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path=" admin" element={<Homepages />} />
          <Route path=" web" element={<Homepages />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
