import React from 'react'
import { useSelector } from 'react-redux';
import {remove} from '../state/cartSlice'
import { useDispatch } from 'react-redux'

const ViewCart = () => {
    const products = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const removeToCart = (id) => {
        dispatch(remove(id))
    }
    return (
        <>
            <div className="container" style={{ marginTop: '100px' }}>
                <h2>Our Redux Store Products </h2>
                <div className='row'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                (products.length === 0) ? 
                                    <tr>
                                        <td className='text-center' colSpan={6}>
                                            <strong>Cart empty!!!</strong>
                                        </td>
                                    </tr>
                                : 
                                    products.map((item,key) => {
                                        return <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td><img src={item.image} className="img-thumbnail" alt={item.title} style={{height:'100px',width:'100px'}}/></td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>1</td>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => removeToCart(item.id)}>Remove Item</button>
                                            </td>
                                        </tr>
                                    })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ViewCart
