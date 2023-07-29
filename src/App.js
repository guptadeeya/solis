import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
// import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Routes>
    </Router>
    </div>
    // <div className="App">
    //   <Home />
    //   {/* <Shop /> */}
    // </div>
  );
}

export default App;
