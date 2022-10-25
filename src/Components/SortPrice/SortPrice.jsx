import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../ContextApi/Context'
import './sort-price.css'

export default function SortPrice({ listProduct }) {
    const [checkActiveIncrease, setCheckActiveIncrease] = useState(false)
    const [checkActiveDecrease, setCheckActiveDecrease] = useState(false)
    //Con của Component Dogs và Cats có thể nhận ContextAPI
    const { setrenderSortPrice } = useContext(Context)

    const handleSortIncrease = () => {
        setCheckActiveIncrease(true)
        setCheckActiveDecrease(false)

        // thuật toán sắp xếp và dùng destructuring assignment (ES6) để hoán đổi
        for (let i = 0; i < listProduct.length; i++) {
            for (let j = i + 1; j < listProduct.length; j++) {
                if (listProduct[i].price > listProduct[j].price) {
                    [listProduct[i], listProduct[j]] = [listProduct[j], listProduct[i]]
                }
            }
        }

        // khi click sắp xếp tăng dần hoặc giảm dần thì giao diện không được thay đổi , phải render ở component App lại
        setrenderSortPrice(true)

    }

    const handleSortDecrease = () => {
        setCheckActiveDecrease(true)
        setCheckActiveIncrease(false)

        for (let i = 0; i < listProduct.length; i++) {
            for (let j = i + 1; j < listProduct.length; j++) {
                if (listProduct[i].price < listProduct[j].price) {
                    [listProduct[i], listProduct[j]] = [listProduct[j], listProduct[i]]
                }
            }
        }

        // khi click sắp xếp tăng dần hoặc giảm dần thì giao diện không được thay đổi , phải render ở component App lại
        setrenderSortPrice(false)
    }


    return (
        <div>
            <button onClick={handleSortIncrease} className={`btn-price btn-tang ${checkActiveIncrease ? 'sort-active' : ''}`}>
                Giá Tăng Dần
            </button>
            <button onClick={handleSortDecrease} className={`btn-price btn-tang ${checkActiveDecrease ? 'sort-active' : ''}`}>
                Giá Giảm Dần
            </button>
        </div>
    )
}
