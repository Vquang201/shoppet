import React, { useContext, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../ContextApi/Context'
import '../ProductCard/product_card.css'


export default function SearchProduct(listProduct) {
    const { keyword } = useParams()
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    return (
        <div>
            <div>
                Bạn đã tìm từ : <span className='search-keyword'>{keyword}</span>
            </div>
            <div className='flex'>
                {
                    listProduct.map((item, index) => (
                        item.name.toLowerCase().includes(keyword.toLowerCase())
                            ?
                            <div key={index} className="wrap-product">
                                <ProductCard
                                    img={item.imageUrl}
                                    name={item.name}
                                    breed={item.breed}
                                    description={item.description}
                                    price={item.price}
                                />
                            </div>
                            : null
                    ))
                }
            </div>
            <div className='flex'>
                <button className='btn-back' onClick={handleBack}>Back</button>
            </div>
        </div>
    )
}
