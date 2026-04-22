import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Foodie from "./components/Foodie";
import Bolly from "./components/Bolly";
import Holly from "./components/Holly";
import Hom from "./components/Hom";
import Fitnes from "./components/Fitnes";
import NavBar from "./components/NavBar";
import Tech from "./components/Tech";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hom />} />
          <Route path="/bolly" element={<Bolly />} />
          <Route path="/holly" element={<Holly />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/fitnes" element={<Fitnes />} />
          <Route path="/foodie" element={<Foodie />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App