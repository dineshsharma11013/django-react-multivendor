import React from 'react'
import SingleProduct from './SingleProduct';

const AllProducts = () => {
  return (
    <main className='mt-4'>
        <div className='container'>
        <h3 className="mb-4">All Products </h3>
    <div className='row'>
     
    <SingleProduct title="Python Project" />
    <SingleProduct />


      </div>
        </div>
    </main>
  )
}

export default AllProducts
