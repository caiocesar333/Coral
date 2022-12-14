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
import { CheckoutPayment } from './pages/CheckOut/CheckoutPayment/CheckoutPayment';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { MyOrders } from './pages/MyOrders/MyOrders';
import { OrderDetails } from './pages/OrderDetails/OrderDetails';
import { About } from './pages/About/About';
import { SignUp } from './pages/SignUp/SignUp';
import { PhoneVerification } from './pages/PhoneVerification/PhoneVerification';
import { CodeVerification } from './pages/CodeVerification/CodeVerification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signup/register" element={<PhoneVerification />}></Route>
        <Route path="/signup/register/otp" element={<CodeVerification />}></Route>
        <Route path="/handbags/1/" element={<Handbags />}></Route>
        <Route path="/handbags/2/:filter" element={<Handbags2 />}></Route>
        <Route path="/product/:productName/:imgUrl" element={<ProductPage />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
        <Route path='/mycart' element={<MyCart />} ></Route>
        <Route path='/checkout' element={<CheckOut />} ></Route>
        <Route path='/payment' element={<CheckoutPayment />} ></Route>
        <Route path='/user' element={<UserProfile />} ></Route>
        <Route path='/user/myorders' element={<MyOrders />} ></Route>
        <Route path='/user/myorders/:order' element={<OrderDetails />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
