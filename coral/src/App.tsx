import React from 'react';
import './styles/global';
import { Home } from './components/Layout/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Handbags } from './components/Layout/Categorys/Handbags';
import { ProductPage } from './components/Layout/ProductPage.tsx/ProductPage';
import { NotFound } from './components/Layout/NotFound/NotFound';
import { Handbags2 } from './components/Layout/Categorys/Handbags2';
import { CheckOut } from './pages/CheckOut/CheckOut';
import { MyCart } from './pages/MyCart/MyCart';
import { CheckoutPayment } from './pages/CheckoutPayment/CheckoutPayment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/handbags/1/:filter" element={<Handbags />}></Route>
        <Route path="/handbags/2/:filter" element={<Handbags2 />}></Route>
        <Route path="/product/:productName/:imgUrl" element={<ProductPage />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
        <Route path='/mycart' element={<MyCart />} ></Route>
        <Route path='/checkout' element={<CheckOut />} ></Route>
        <Route path='/payment' element={<CheckoutPayment />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
