import React, { useContext, useRef, useState } from 'react'
import { Context } from '../../ContextApi/Context'
import './cart.css'
import '../../App.css'

export default function Carts() {
    const { saveProduct, setSaveProduct, total, setTotal, setCountProduct } = useContext(Context)

    const handleDelete = () => {
        // setSaveProduct(localStorage.removeItem('products'))
        setSaveProduct([])
        setCountProduct(0)
        setTotal(0)
    }

    return (
        <div >
            <div className='wrap-cart'>
                <div className='cart-total'>Price Total : {total} $</div>
                {
                    saveProduct && saveProduct.length >= 1 ?
                        saveProduct.map((item, index) => (
                            <div key={index} className='cart-flex'>
                                <div>
                                    <img className='cart-img' src={item.img} />
                                </div>
                                <div className='wrap-title'>
                                    <p className='cart-name'>Tên : {item.name} </p>
                                    <p className='cart-breed'>breed : {item.breed} </p>
                                    <p className='cart-price'>Giá : {item.price} $ </p>
                                </div>
                            </div>
                        ))
                        : <div className='cart-empty'>Chưa có sản phẩm</div>
                }

                <button onClick={handleDelete} className='btn'>Delete All Products</button>
            </div>
        </div>
    )
}
