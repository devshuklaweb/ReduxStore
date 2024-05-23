import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    
    return (
        <>
            <div className="container" style={{marginTop:'100px'}}>
                <h2>Welcome to the Redux Toolkit Store</h2>
                <Link to="/shop"><strong>Click to view our store</strong></Link>
            </div>
        </>
    )
}

export default Home
