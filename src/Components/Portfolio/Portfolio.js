import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import slidebar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'
import 'swiper/css'
import './Portfolio.css'



const Portfolio = () => {
    return (
        <div className='portfolio'>
            <span>Recents Pojects</span>
            <span>Portfolio</span>
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide> <img src={slidebar} alt="" /></SwiperSlide>
                <SwiperSlide> <img src={ecommerce} alt="" /></SwiperSlide>
                <SwiperSlide> <img src={hoc} alt="" /></SwiperSlide>
                <SwiperSlide> <img src={musicapp} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;