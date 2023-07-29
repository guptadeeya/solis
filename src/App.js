import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;
