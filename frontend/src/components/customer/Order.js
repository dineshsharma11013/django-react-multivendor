import React from 'react'
import Sidebar from './Sidebar'

const Order = () => {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-3 col-12 mb-2'>
                <Sidebar />
            </div>
            <div className='col-md-9 col-12 mb-2'>
                <div className='row'>
                <div className='table-responsive'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td><span className='text-success'><i className='fa fa-spin'></i> Completed</span></td>
                        <td><button className='btn btn-primary btn-sm'>Download</button></td>
                    </tr>
                </tbody>
               
            </table>
        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order
