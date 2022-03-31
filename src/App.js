import React from "react";
import Home from "./Components/Home";
import Board from "./Components/Taskboard/Board";

import "./styles.scss";
import {  BrowserRouter, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
<BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/board' exact element={<Board/>} />
           

          </Routes>
        </BrowserRouter>
  );
}

export default App;