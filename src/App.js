import React from "react";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import { Provider } from "react-redux";
import store from "./Redux/redux"


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Main/*" element={<Main/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
