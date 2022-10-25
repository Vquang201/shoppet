import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../ContextApi/Context'
import './both-dog-cat.css'

export default function LoadMore({ listProduct }) {
    const { setListCats, setListDogs, listDogs, listCats } = useContext(Context)
    const [listCatsV2, setListCatsV2] = useState([])
    const [listDogsV2, setListDogsV2] = useState([])
    const [page, setPage] = useState(2)
    const [totalPage, setTotalPage] = useState(2)

    const handleLoadMore = () => {
        // setListCats(listCats.concat(listCatsV2))
        // setListDogs(listDogs.concat(listDogsV2))
        // setPage(page + 1)
    }

    useEffect(() => {
        // axios.get(`v${page}/cats`)
        //     .then(res => setListCatsV2(res.data))

        // axios.get(`v${page}/dogs`)
        //     .then(res => setListDogsV2(res.data))
    })

    return (
        <div className='flex'>
            {/* {
                page <= totalPage ?
                    <button onClick={handleLoadMore} className='btn-load-more'>Load More</button>
                    : null
            } */}
        </div>
    )
}
