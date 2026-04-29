import React, { useContext } from 'react'
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foodie from "./components/Foodie";
import Bolly from "./components/Bolly";
import Holly from "./components/Holly";
import Hom from "./components/Hom";
import Fitnes from "./components/Fitnes";
import NavBar from "./components/NavBar";
import Tech from "./components/Tech";
import Details from "./components/Details";
import { ThemeContext } from './components/Context/ThemeContext';


const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div className={theme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Hom />} />
            <Route path="/bolly" element={<Bolly />} />
            <Route path="/holly" element={<Holly />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/fitnes" element={<Fitnes />} />
            <Route path="/foodie" element={<Foodie />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
        </div>
        </>
      )
}

export default App;