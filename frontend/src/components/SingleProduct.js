import React from 'react'
import logo from '../logo.svg';

const SingleProduct = (props) => {
  return (
    <div className='col-12 col-md-3 mb-2'>
    <div className="card" style={{width: '18rem'}}>
  <img src={logo} className="card-img-top" alt="..." /><hr/>
  <div className="card-body">
    <h4 className="card-title">{props.title}</h4>
    
  </div>
  <div className='card-footer'>
    
  <button className="btn btn-success btn-sm"><i className='fa fa-cart-plus'></i> </button>
        <button className="btn btn-danger btn-sm ms-1"><i className='fa fa-heart'></i></button>
  </div>
</div>

  </div>
  )
}

export default SingleProduct
