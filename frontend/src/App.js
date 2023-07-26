import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './components/Header';

function App() {
  return (
    <>
    
    <Header />
<main className="mt-4">
  <div className='container'>
    <h3 className="mb-4">Latest Products <a href="#" className="float-end btn btn-sm btn-dark m-2">View All Products</a> </h3>
    <div className='row'>
      <div className='col-12 col-md-3 mb-2'>
        <div className="card" style={{width: '18rem'}}>
      <img src={logo} className="card-img-top" alt="..." /><hr/>
      <div className="card-body">
        <h5 className="card-title">Product list</h5>
        <h5 className="card-title text-muted">Price : Rs. 500</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
      <div className='card-footer'>
        
        <button className="btn btn-success btn-sm">Add to cart</button>
        <button className="btn btn-danger btn-sm">Add to wish</button>
      </div>
    </div>

      </div>

    <div className='col-12 col-md-3 mb-2'>
        <div className="card" style={{width: '18rem'}}>
      <img src={logo} className="card-img-top" alt="..." /><hr/>
      <div className="card-body">
        <h5 className="card-title">Product list</h5>
        <h5 className="card-title text-muted">Price : Rs. 500</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
      <div className='card-footer'>
        
        <button className="btn btn-success btn-sm">Add to cart</button>
        <button className="btn btn-danger btn-sm">Add to wish</button>
      </div>
    </div>

      </div>


      </div>



      <h3 className="mb-4">Popular Categories <a href="#" className="float-end btn btn-sm btn-dark m-2">View All Categories</a> </h3>
    <div className='row'>
      <div className='col-12 col-md-3 mb-2'>
        <div className="card" style={{width: '18rem'}}>
      <img src={logo} className="card-img-top" alt="..." /><hr/>
      <div className="card-body">
        <h4 className="card-title">Category titile</h4>
        
      </div>
      <div className='card-footer'>
        
        Product Downloads: 342
      </div>
    </div>

      </div>

    <div className='col-12 col-md-3 mb-2'>
        <div className="card" style={{width: '18rem'}}>
      <img src={logo} className="card-img-top" alt="..." /><hr/>
      <div className="card-body">
        <h4 className="card-title">Product list</h4>
        
      </div>
      <div className='card-footer'>
        
      </div>
    </div>

      </div>


      </div>

      <h3 className="mb-4">Popular Products <a href="#" className="float-end btn btn-sm btn-dark m-2">View All Products</a> </h3>
    <div className='row'>
      <div className='col-12 col-md-3 mb-2'>
        <div className="card" style={{width: '18rem'}}>
      <img src={logo} className="card-img-top" alt="..." /><hr/>
      <div className="card-body">
        <h5 className="card-title">Product list</h5>
        <h5 className="card-title text-muted">Price : Rs. 500</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
      <div className='card-footer'>
        
        <button className="btn btn-success btn-sm">Add to cart</button>
        <button className="btn btn-danger btn-sm">Add to wish</button>
      </div>
    </div>

      </div>

    <div className='col-12 col-md-3 mb-2'>
        <div className="card" style={{width: '18rem'}}>
      <img src={logo} className="card-img-top" alt="..." /><hr/>
      <div className="card-body">
        <h5 className="card-title">Product list</h5>
        <h5 className="card-title text-muted">Price : Rs. 500</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
      <div className='card-footer'>
        
        <button className="btn btn-success btn-sm">Add to cart</button>
        <button className="btn btn-danger btn-sm">Add to wish</button>
      </div>
    </div>

      </div>


      </div>

      <h3 className="mb-4">Popular Sellers <a href="#" className="float-end btn btn-sm btn-dark m-2">View All Sellers</a> </h3>
    <div className='row'>
      <div className='col-12 col-md-3 mb-2'>
        <div className="card" style={{width: '18rem'}}>
      <img src={logo} className="card-img-top" alt="..." /><hr/>
      <div className="card-body">
        <h5 className="card-title">Product list</h5>
        <h5 className="card-title text-muted">Price : Rs. 500</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
      <div className='card-footer'>
        
        Categories: <a href="#">Python</a>, <a href="#">Php</a>
      </div>
    </div>

      </div>

    <div className='col-12 col-md-3 mb-2'>
        <div className="card" style={{width: '18rem'}}>
      <img src={logo} className="card-img-top" alt="..." /><hr/>
      <div className="card-body">
        <h5 className="card-title">Product list</h5>
        <h5 className="card-title text-muted">Price : Rs. 500</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
      <div className='card-footer'>
        
        <button className="btn btn-success btn-sm">Add to cart</button>
        <button className="btn btn-danger btn-sm">Add to wish</button>
      </div>
    </div>

      </div>


      </div>

    </div>
    </main>
    </>
  );
}

export default App;
