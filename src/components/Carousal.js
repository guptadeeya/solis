import React from 'react'
import first from '../images/Carousal-1.png'
import second from '../images/Carousal-2.png'
import './Carousal.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousal() {
    // const btnpressprev =()=>{
    //     let box = document.querySelector('.box')
    //     let width = box.clientWidth;
    //     box.scrollLeft = box.scrollLeft - width;
    //     console.log(width);
    // }

    // const btnpressnext =()=>{
    //     let box = document.querySelector('.box')
    //     let width = box.clientWidth;
    //     box.scrollLeft = box.scrollLeft + width;
    //     console.log(width);
    // }

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
                modules={[Pagination, Navigation]}                
                // breakpoints={{
                //     // when window width is >= 800px
                //     800: {
                //       slidesPerView: 6,
                //       spaceBetween: 60,
                //     },
                //   }}
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
