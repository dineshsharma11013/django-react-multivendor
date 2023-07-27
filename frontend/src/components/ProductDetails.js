import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const ProductDetails = () => {
  return (
    <section className='container mt-4'>
      <div className='row'>
        <div className='col-4'>
        <div id="productThumbnailSlider" className="carousel slide my-4 carousel-dark text-white p-1" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to={0} className="active" />
    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to={1} />
    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to={2} />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={logo} className="img-thumbnail mb-5" alt="..." />

    </div>
    <div className="carousel-item">
    <img src={logo} className="img-thumbnail mb-5" alt="..." />
    </div>
    <div className="carousel-item">
    <img src={logo} className="img-thumbnail mb-5" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" />
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
    <span className="carousel-control-next-icon" />
  </button>
</div>
        </div>
        <div className='col-8'>
            <h3>Product Title</h3>
            <p>fsdf</p>
            <h5>Price: Rs. 50</h5>
            <p className='mt-3'>
            <button className="btn btn-primary btn-sm"><i className='fa fa-cart-plus'></i> Add to cart </button>
            <button className="btn btn-success btn-sm ms-1"><i className='fa fa-cart-plus'></i> Buy Now </button>
        <button className="btn btn-danger btn-sm ms-1"><i className='fa fa-heart'></i> Wishlist</button>
            </p>
            <hr />
            <div className='producttags mt-5'>
                <h5>Tags</h5>
                <p>
                    <Link to ="#" className='badge bg-secondary text-white me-1'>Python</Link>
                    <Link to ="#" className='badge bg-secondary text-white me-1'>Django</Link>
                </p>
            </div>
        </div>
      </div>
    
    <h3 className='mt-5 mb-3'>Related Products</h3>
      <div id="demo" className="carousel slide my-4 carousel-dark text-white p-1" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className='row mb-5'>
    <SingleProduct title="Python Project" />
    <SingleProduct title="Python Project" />
    <SingleProduct title="Python Project" />
    <SingleProduct title="Python Project" />
    </div>

    </div>
    <div className="carousel-item">
        <div className='row mb-5'>
    <SingleProduct title="Python Project" />
    <SingleProduct title="Python Project" />
    <SingleProduct title="Python Project" />
    <SingleProduct title="Python Project" />
    </div>
    </div>
    <div className="carousel-item">
    <div className='row'>
    <SingleProduct title="Python Project" />
    <SingleProduct title="Python Project" />
    <SingleProduct title="Python Project" />
    <SingleProduct title="Python Project" />
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" />
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon" />
  </button>
</div>


    </section>
  )
}

export default ProductDetails
