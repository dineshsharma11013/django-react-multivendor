import React from 'react'

const Login = () => {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-8 col-12 offset-2'>
                <div className='card'>
                    <h4 className='card-header'>Login</h4>
                    <div className='card-body'>
                    <form action="/action_page.php">
                    
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
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

export default Login
