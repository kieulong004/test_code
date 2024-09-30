import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";

import Homepages from "./components/homepages";
import Header from "./components/header";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path=" admin" element={<Homepages />} />
          <Route path="login" element={<Header />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
