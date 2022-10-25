import React, { useContext, useState } from 'react'
import '../../App.css'
import './product_card.css'
import { Context } from '../../ContextApi/Context'
import { Link } from 'react-router-dom'

export default function ProductCard({ img, name, breed, description, price }) {
    const [checkAdd, setCheckAdd] = useState(false)
    const { saveProduct, setSaveProduct, setTotal, setCountProduct, setListProductDes } = useContext(Context)
    const handleClick = () => {
        setCheckAdd(true)
        setTotal(total => total += Number(price))
        setCountProduct(prev => prev + 1)
        // setSaveProduct(() => {
        //     const newProduct = [...saveProduct, { name, price, img, breed }]
        //     const productJSON = JSON.stringify(newProduct)
        //     localStorage.setItem('products', productJSON)
        //     return newProduct
        // })
        setSaveProduct([...saveProduct, { name, price, img, breed }])


    }

    const handleDescription = () => {
        setListProductDes({ name, price, img, description, breed })
    }



    return (
        <div>
            <img className='product-img' src={img} />
            <p className='product-name' onClick={handleDescription}>Tên : <Link to={'/product/description'}> {name} </Link></p>
            <p className='product-breed'>Breed : {breed} </p>
            <p className='product-descript'>Description : {description} </p>
            <p className='product-price'>Giá : {price} $ </p>
            {
                checkAdd ?
                    <button disabled className='btn-product-added'>Added</button>
                    :
                    <button onClick={handleClick} className='btn-product'>Add To Cart</button>
            }
        </div>
    )
}
