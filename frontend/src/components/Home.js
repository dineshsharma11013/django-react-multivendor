import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <main className="mt-4">
  <div className='container'>
    <h3 className="mb-4">Latest Products <Link to="/products" className="float-end btn btn-sm btn-dark m-2">View All Products</Link> </h3>
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
        
        <button className="btn btn-success btn-sm"><i className='fa fa-cart-plus'></i> </button>
        <button className="btn btn-danger btn-sm"><i className='fa fa-heart'></i></button>
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
        
      <button className="btn btn-success btn-sm"><i className='fa fa-cart-plus'></i> </button>
        <button className="btn btn-danger btn-sm"><i className='fa fa-heart'></i></button>
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


   
<div id="demo" className="carousel slide my-4 border bg-dark text-white p-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
  <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    <i className='fa fa-star text-warning'></i>
    <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>

    </div>
    <div className="carousel-item">
      <img src="chicago.jpg" alt="Chicago" className="d-block" style={{width: '100%'}} />
    </div>
    <div className="carousel-item">
      <img src="ny.jpg" alt="New York" className="d-block" style={{width: '100%'}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" />
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon" />
  </button>
</div>



<br/><br/>



    </div>
    </main>
    </>
  )
}

export default Home
