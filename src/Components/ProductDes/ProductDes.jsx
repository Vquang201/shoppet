import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../ContextApi/Context'
import './product-des.css'
import '../../App.css'

export default function ProductDes() {
    const { listProductDes } = useContext(Context)
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()

    const handleBackHome = () => {
        navigate('/')
    }
    const handlePlus = () => {
        setQuantity(quantity + 1)
    }
    const handleMinus = () => {
        setQuantity(quantity - 1)
    }

    const handleBuy = () => {
        alert(` Bạn đã mua ${listProductDes.name} với số lượng là : ${quantity} `)
    }

    return (
        <div className='des-contain'>
            <div>
                <img className='product-des-img' src={listProductDes.img} />
            </div>
            <div className='wrap-context'>
                <h2 className='product-des-heading'>Name Product : {listProductDes.name}</h2>
                <p>Breed : {listProductDes.breed}</p>
                <p className='product-des-rate'>
                    <span className='product-rate-title'>Rate 5.0</span>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                </p>
                <p>Status : Còn hàng</p>
                <p className='product-des-description'>Description : {listProductDes.description}</p>
                <p className='product-des-price'>Price : {listProductDes.price} $</p>
                <p>Shipping : <i className="fa fa-truck" aria-hidden="true"></i> FreeShip </p>
                <div className='quantity-flex'>
                    <p>Quantity : </p>
                    <button onClick={handleMinus} className='btn-quantity'><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <span className='quantity-text'>{quantity}</span>
                    <button onClick={handlePlus} className='btn-quantity'><i className="fa fa-plus" aria-hidden="true"></i></button>
                </div>

            </div>
            <div className='wrap-btn'>
                <button className='btn btn-home' onClick={handleBackHome}>Back Home</button>
                <button onClick={handleBuy} className='btn'>Buy Now</button>
            </div>
        </div>
    )
}
