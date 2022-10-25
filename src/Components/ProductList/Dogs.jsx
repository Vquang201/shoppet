import React, { useContext, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../ContextApi/Context'
import GoToTop from '../GoToTop/GoToTop'
import ProductCard from '../ProductCard/ProductCard'
import SortPrice from '../SortPrice/SortPrice'
import './both-dog-cat.css'
import { fetchV2Dogs } from '../../API'

let page = 1
// khai báo ở ngoài hàm để k bị render lại = 1

export default function Dogs() {
    const { listDogs, setListDogs, valueInput, setValueInput } = useContext(Context)
    const [listDogsV2, setListDogsV2] = useState([])
    const totalPage = 2

    const navigate = useNavigate()

    const handleSearch = () => {
        navigate(`/dogs/search/${valueInput}`)
        setValueInput('')
    }

    const handleLoadMore = () => {
        setListDogs(listDogs.concat(listDogsV2))
        page += 1
    }

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await fetchV2Dogs();
                setListDogsV2(response.data)
                console.log({ listDogsV2 })

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchProductList()
        console.log({ listDogs })
    }, [])

    return (
        <div>
            <div className='contain-input-price'>
                <div className='wrap-input'>
                    <input onChange={(e) => setValueInput(e.target.value)} placeholder='Enter Keyword' className='dogs-input' />
                    <button onClick={handleSearch} className='dogs-btn-search'>Search</button>
                </div>
                <div>
                    <SortPrice listProduct={listDogs} />
                    <GoToTop />
                </div>
            </div>
            <div className='flex'>
                {
                    listDogs.map((item, index) => (
                        <div key={index} className="wrap-product">
                            <ProductCard
                                img={item.imageUrl}
                                name={item.name}
                                breed={item.breed}
                                description={item.description}
                                price={item.price}
                            />
                        </div>
                    ))
                }
            </div>
            <div className='flex'>
                {
                    totalPage > page ?
                        <button onClick={handleLoadMore} className='btn-load-more'>Load More</button>
                        : null
                }
            </div>

        </div>
    )
}
