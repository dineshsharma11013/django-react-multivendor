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
import Register from './components/customer/Register';
import Login from './components/customer/Login';
import Dashboard from './components/customer/Dashboard';

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
      <Route path='/customer/register' element={<Register />} />
      <Route path='/customer/login' element={<Login />} />
      <Route path='/customer/dashboard' element={<Dashboard />} />
    </Routes>
    
    <Footer />




    </>
  );
}

export default App;
