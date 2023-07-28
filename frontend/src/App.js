// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import CategoryProduct from './components/CategoryProduct';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

// customer panel
import Register from './components/customer/Register';
import Login from './components/customer/Login';
import Dashboard from './components/customer/Dashboard';
import Order from './components/customer/Order';
import OrderSuccess from './components/OrderSuccess';
import OrderFailure from './components/OrderFailure';
import AddressList from './components/customer/AddressList';
import AddAddress from './components/customer/AddAddress';

// seller panel
import SellerRegister from './components/seller/SellerRegister';
import SellerLogin from './components/seller/SellerLogin';
import SellerDashboard from './components/seller/SellerDashboard';

function App() {
  return (
    <>
    
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<AllProducts />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/category/:category_slug/:category_id' element={<CategoryProduct />} />
      <Route path='/product/:product_slug/:product_id' element={<ProductDetails />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/order/success' element={<OrderSuccess />} />
      <Route path='/order/failure' element={<OrderFailure />} />

      {/* customer panel */}
      <Route path='/customer/register' element={<Register />} />
      <Route path='/customer/login' element={<Login />} />
      <Route path='/customer/dashboard' element={<Dashboard />} />
      <Route path='/customer/orders' element={<Order />} />
      <Route path='/customer/addreses' element={<AddressList />} />
      <Route path='/customer/add-address' element={<AddAddress />} />
      
      {/* customer panel */}
      <Route path='/seller/register' element={<SellerRegister />} />
      <Route path='/seller/login' element={<SellerLogin />} />
      <Route path='/seller/dashboard' element={<SellerDashboard />} />
      
      

    </Routes>
    
    <Footer />




    </>
  );
}

export default App;
