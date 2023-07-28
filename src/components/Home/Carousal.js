import React from 'react'
import first from '../../images/Carousal-1.png'
import second from '../../images/Carousal-2.png'
import '../css//Carousal.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousal() {
    return (
        <div className='carousal'> 

            <div className="box">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                loop={true}
                speed={1000}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation, Autoplay]}   
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className="image">
                    <img src={first} alt="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                    <img src={second} alt="" />
                </div>
                </SwiperSlide>
                    </Swiper>  
            </div>
        </div>
    )
}

export default Carousal
