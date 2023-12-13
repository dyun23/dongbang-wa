import React from "react";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Main/*" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
