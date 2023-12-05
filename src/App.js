import React, { useState } from "react";
import Login from "./Login/Login";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Login/>
    </BrowserRouter>
  );
}

export default App;
