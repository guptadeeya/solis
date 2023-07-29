import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";

function App() {

  return (
    
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route exact path="/home" component={Home} /> */}
        <Route path="/shop" element={<Shop />}  />
      </Routes>
      </div>
    </Router>
    
    // <div className="App">
    //   <Home />
    //   {/* <Shop /> */}
    // </div>
  );
}

export default App;
