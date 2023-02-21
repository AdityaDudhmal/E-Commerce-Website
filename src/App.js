import React from 'react';
import './Style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Grocery from './Pages/Grocery';
import Accessary from "./Pages/Accessary";

// import ReactDOM from 'react-dom';
// import Navigate from "./Pages/Navigate";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Grocery />} />
            <Route exact path="/accessary" element={<Accessary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




