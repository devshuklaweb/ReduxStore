import React, { useEffect, useState } from 'react'
import { add } from '../state/cartSlice'
import { fetchProducts, STATUS } from '../state/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import loading from '../loading.gif'
const Shop = () => {
    const dispatch = useDispatch() //reducer ke method ko call krne ke liye
    const { data: product,status } = useSelector((state) => state.product); //data:product means data alias to product
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const addToCart = (product) => {
        dispatch(add(product))
    }

    return (
        <>
            <div className="container" style={{ marginTop: '100px' }}>
                <h2>Our Redux Store Products </h2>
                <div className='row'>
                    {
                        (status === STATUS.LOADING) ? 
                            <div className='container text-center'>
                                <img src={loading} alt='Loading...' /> 
                            </div>
                        : (status === STATUS.ERROR) ? 
                            <div className='text-center'>
                                <h4>Error found! Something went wrong. Please check console.</h4>
                            </div>
                        :
                        product.map((item, key) => {
                            return <div key={item.id} className="card col-md-3 mx-1 my-1" style={{ width: '18rem', float: 'left' }}>
                                <div style={{ height: '200px', width: '200' }}>
                                    <img src={item.image} className="card-img-top img-rounded" alt={item.title} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '-1px', top: '-1px' }}>
                                    <span className="badge rounded-pill bg-danger"> {item.category.toUpperCase()}</span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title.slice(0, 40)}...</h5>
                                    <h5 className="card-title text-center">{item.price}/-</h5>
                                    <p className="card-text">{item.description.slice(0, 90)}...</p>
                                    <button className="btn btn-primary" onClick={() => addToCart(item)}>Add to cart</button>
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Shop
