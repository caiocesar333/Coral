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
import { NotFoundInUser } from './pages/NotFoundInUser/NotFoundInUser';
import { EmailVerification } from './pages/EmailVerification/EmailVerification';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { Address } from './pages/Address/Address';
import { MyReviews } from './pages/MyReviews/MyReviews';

function App() {

  return (
    <Router>
      <Routes>
        <Route path=":userId/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signup/register" element={<PhoneVerification />}></Route>
        <Route path="/signup/register/:otpPhone" element={<CodeVerification />}></Route>
        <Route path=":userId/form" element={<EmailVerification />}></Route>
        <Route path=":userId/handbags/1/" element={<Handbags />}></Route>
        <Route path=":userId/handbags/2/" element={<Handbags2 />}></Route>
        <Route path=":userId/:productName/:imgUrl" element={<ProductPage />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
        <Route path='/mycart' element={<MyCart />} ></Route>
        <Route path='/checkout' element={<CheckOut />} ></Route>
        <Route path='/payment' element={<CheckoutPayment />} ></Route>
        <Route path=':userId' element={<UserProfile />} ></Route>
        <Route path='/:userId/personal' element={<UserProfile />} ></Route>
        <Route path='/:userId/wishlist' element={<Wishlist />} ></Route>
        <Route path='/:userId/address' element={<Address />} ></Route>
        <Route path='/:userId/reviews' element={<MyReviews/>} ></Route>
        <Route path='/:userId/myorders' element={<MyOrders />} ></Route>
        <Route path='/:userId/notfound' element={<NotFoundInUser />} ></Route>
        <Route path='/:userId/myorders/:orderId' element={<OrderDetails />} ></Route>

      </Routes>
    </Router>
  );
}

export default App;
