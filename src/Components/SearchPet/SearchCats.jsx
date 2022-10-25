import React, { useContext, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../ContextApi/Context'
import '../ProductCard/product_card.css'

export default function SearchCats() {
    // const [checkEmpty, setCheckEmpty] = useState(0)
    const { keyword } = useParams()
    const navigate = useNavigate()
    const { listCats } = useContext(Context)

    const handleBack = () => {
        navigate('/cats')
    }

    return (
        <div>
            <div className='flex'>
                Bạn đã tìm từ : <span className='search-keyword'>{keyword}</span>
            </div>
            <div className='flex'>
                {
                    listCats.map((item, index) => (
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
