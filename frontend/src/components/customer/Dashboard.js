import React from 'react'

const Dashboard = () => {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-3 col-12 mb-2'>
                <ul className="list-group">
                <li className="list-group-item active">Dashboard</li>
                <li className="list-group-item">Orders</li>
                <li className="list-group-item">Wishlist</li>
                <li className="list-group-item">Profile</li>
                <li className="list-group-item">Address</li>
                <li className="list-group-item text-danger">Log Out</li>
                </ul>
            </div>
            <div className='col-md-9 col-12 mb-2'>
                <div className='row'>
                    <div className='col-md-4 mb-2'>
                        <div className='card'>
                            <div className='card-body text-center'>
                                <h4>Total Orders</h4>
                                <h4>23</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-2'>
                        <div className='card'>
                            <div className='card-body text-center'>
                                <h4>Total Wishlist</h4>
                                <h4>23</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-2'>
                        <div className='card'>
                            <div className='card-body text-center'>
                                <h4>Total Address</h4>
                                <h4>23</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
