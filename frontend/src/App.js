import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import NextPage from "./components/NextPage";
import { OBoxes } from "./components/OBoxes";

function App() {
  const [searchValue, setSearchValue] = useState(""); // Add state for search value

  return (
    <>
      <Navbar setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route
          path="/nextpage"
          element={<NextPage searchValue={searchValue} />}
        />
        <Route path="/oboxes" element={<OBoxes searchValue={searchValue} />} />
      </Routes>
    </>
  );
}

export default App;
