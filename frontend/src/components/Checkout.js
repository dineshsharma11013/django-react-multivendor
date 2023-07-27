import React from 'react'

const Checkout = () => {
  return (
    <div className='container mt-4'>
        <h3 className='mb-4'>All Items</h3>
        <div className='row'>
            <div className='col-md-8 col-12'>
            <div className='table-responsive'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Total</th>
                        <th>234</th>
                    </tr>
                    <tr>
                        <td colSpan='3' align='right'>
                           <button className='btn btn-info btn-sm'>Continue Shopping</button> 
                           <button className='btn btn-success btn-sm ms-1'>Proceed to payment</button> 
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
            </div>

        </div>
        
    </div>
  )
}

export default Checkout
