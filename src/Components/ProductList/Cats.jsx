import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../ContextApi/Context'
import GoToTop from '../GoToTop/GoToTop'
import ProductCard from '../ProductCard/ProductCard'
import SortPrice from '../SortPrice/SortPrice'
import './both-dog-cat.css'
import { fetchV2Cats } from '../../API'


let page = 1
// khai báo ở ngoài hàm để k bị render lại = 1

export default function Cats() {
    const { listCats, setListCats, valueInput, setValueInput } = useContext(Context)
    const navigate = useNavigate()
    const [listCatsV2, setListCatsV2] = useState([])
    const totalPage = 2


    const handleSearch = () => {
        navigate(`/cats/search/${valueInput}`)
        setValueInput('')
    }

    const handleLoadMore = () => {
        setListCats(listCats.concat(listCatsV2))
        // setListCats(prev => [...prev, [listCatsV2]])
        console.log(typeof listCats.concat(listCatsV2))
        console.log(listCatsV2)
        page += 1

    }

    useEffect(() => {
        // axios.get('/v2/cats')
        //     .then(res => setListCatsV2(res.data))
        const fetchProductList = async () => {
            try {
                const response = await fetchV2Cats();
                setListCatsV2(response.data)

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchProductList()
    }, [])

    return (
        <div>
            <div className='contain-input-price'>
                <div className='wrap-input'>
                    <input onChange={(e) => setValueInput(e.target.value)} placeholder='Enter Keyword' className='dogs-input' />
                    <button onClick={handleSearch} className='dogs-btn-search'>Search</button>
                </div>
                <div>
                    <SortPrice listProduct={listCats} />
                    <GoToTop />
                </div>
            </div>
            <div className="flex">
                {listCats.map((item, index) => (
                    <div key={index} className="wrap-product">
                        <ProductCard
                            img={item.imageUrl}
                            name={item.name}
                            breed={item.breed}
                            description={item.description}
                            price={item.price}
                        />
                    </div>
                ))}
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
