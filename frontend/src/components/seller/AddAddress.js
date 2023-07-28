import React from 'react'
import Sidebar from './Sidebar'

const AddAddress = () => {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-3 col-12 mb-2'>
                <Sidebar />
            </div>
            <div className='col-md-9 col-12'>
            <div className='card'>
                    <h4 className='card-header'>Add Address</h4>
                    <div className='card-body'>
                    <form action="/action_page.php">
                    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Address</label>
                        <input type="text" autoComplete='off' className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                   
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                    </div>
                </div>
                    </div>
            </div>
            </div>        
  )
}

export default AddAddress