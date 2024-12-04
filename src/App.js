import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import FauxWood from "./components/FauxWood/FauxWood";
import Vinyl from "./components/Vinyl/Vinyl";
import Cellular from "./Cellular/Cellular";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fauxWood" element={<FauxWood />} />
        <Route path="/cellular" element={<Cellular />} />
        <Route path="/vinyl" element={<Vinyl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
