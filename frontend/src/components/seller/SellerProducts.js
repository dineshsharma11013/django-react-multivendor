import React from 'react'
import SellerSidebar from './SellerSidebar'

const SellerProducts = () => {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-3 col-12 mb-2'>
                <SellerSidebar />
            </div>
            <div className='col-md-9 col-12 mb-2'>
                <h3><button className='btn btn-primary btn-sm mb-2'>Add Product</button></h3>
              <div className='table-responsive'>
                <table className='table table-bordered'>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SellerProducts
