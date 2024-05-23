import React, { useEffect, useState } from 'react'
import {add} from '../state/cartSlice'
import { useDispatch } from 'react-redux'
const Shop = () => {
    const dispatch = useDispatch() //reducer ke method ko call krne ke liye
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        const fetchProduct = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data,'data');
            setProduct(data);
        }
        fetchProduct();
    },[])

    const addToCart = (product) => {
        dispatch(add(product))
    }

    return (
        <>
            <div className="container" style={{marginTop:'100px'}}>
                <h2>Our Redux Store Products </h2>
                <div className='row'>
                        {
                            product.map((item, key) => {
                                return <div key={item.id} className="card col-md-3 mx-1 my-1" style={{width:'18rem',float:'left'}}>
                                    <div style={{height:'200px',width:'200'}}>
                                        <img src={item.image} className="card-img-top img-rounded" alt={item.title}/>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'-1px',top:'-1px'}}>
                                        <span className="badge rounded-pill bg-danger"> {item.category.toUpperCase()}</span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title.slice(0,40)}...</h5>
                                        <h5 className="card-title text-center">{item.price}/-</h5>
                                        <p className="card-text">{item.description.slice(0,90)}...</p>
                                        <button className="btn btn-primary" onClick={()=>addToCart(item)}>Add to cart</button>
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
