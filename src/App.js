import React, { useState } from "react";
import Login from "./Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClubListMain from "./ClubList/ClubListMain";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/ClubList" element={<ClubListMain/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
