import React from 'react';
import './styles/global';
import { Home } from './components/Layout/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Handbags } from './components/Layout/Categorys/Handbags';

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/handbags" element={<Handbags/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
