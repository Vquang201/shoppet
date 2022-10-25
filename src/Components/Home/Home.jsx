import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Context } from '../../ContextApi/Context';
import ProductCard from '../ProductCard/ProductCard';
import './home.css'
export default function Home() {
    const { listDogs } = useContext(Context)

    return (
        <div className='flex'>
            <div className='wrap-home'>
                <h1 className='home-header'>
                    Chào mừng bạn đến ShopPet <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                </h1>
                <img className='home-img' src="https://th.bing.com/th/id/R.febac9833d72238c94e0db29f87f3947?rik=LZANRJBMgnSFkw&pid=ImgRaw&r=0" alt="" />
            </div>
        </div >
    )
}
