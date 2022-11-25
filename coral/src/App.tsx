import React from 'react';
import './styles/global';
import { Home } from './components/Layout/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Handbags } from './components/Layout/Categorys/Handbags';
import { ProductPage } from './components/Layout/ProductPage.tsx/ProductPage';
import { NotFound } from './components/Layout/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/handbags" element={<Handbags/>}></Route>
            <Route path="/product/:productName/:imgUrl" element={<ProductPage/>}></Route>
            <Route path="/NotFound" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
