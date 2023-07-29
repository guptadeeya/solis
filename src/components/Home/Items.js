import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Items.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img2 from '../../images/img-2.png'
import img3 from '../../images/img-3.png'
import img4 from '../../images/img-4.png'
import img5 from '../../images/img-5.png'
import img6 from '../../images/img-6.png'
import img7 from '../../images/img-2.png'
import img8 from '../../images/img-8.png'
import img9 from '../../images/img-9.png'
import img10 from '../../images/img-10.png'
import img11 from '../../images/img-7.png'
import img12 from '../../images/img-2.png'

function Items() {

    return (
        <div className='categories'>
            <div className="container">
            <Swiper
          spaceBetween={50}
          slidesPerView={2.7}
          navigation={true}
          loop={true}
          speed={1000}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }} // Add the autoplay prop with the desired delay (in milliseconds)
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            // when window width is >= 800px
            800: {
              slidesPerView: 6,
              spaceBetween: 60,
            },
          }}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
        >
                    <SwiperSlide>
                    <Link to="/shop">
                        <div className='one-box'>
                            <div className="img"> <img src={img2} alt="" /> </div>
                            <div className='name'>गंडेरी खाल</div>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='one-box'>
                            <div className="img"><img src={img2} alt="" /></div>
                            <div className='name'>बिनौला खल</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='one-box'>
                            <div className="img"><img src={img3} alt="" /></div>
                            <div className='name'>Sarso Khal</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='one-box'>
                            <div className="img"><img src={img4} alt="" /></div>
                            <div className='name'>Other Khal</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='one-box'>
                            <div className="img"><img src={img5} alt="" /></div>
                            <div className='name'>Jadi Butiya</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='one-box'>
                            <div className="img"><img src={img6} alt="" /></div>
                            <div className='name'>Binola</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='one-box'>
                            <div className="img"><img src={img7} alt="" /></div>
                            <div className='name'>Anaj</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='one-box'>
                            <div className="img"><img src={img8} alt="" /></div>
                            <div className='name'>Churi</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='one-box'>
                            <div className="img"><img src={img9} alt="" /></div>
                            <div className='name'>Supplements</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='one-box'>
                            <div className="img"><img src={img10} alt="" /></div>
                            <div className='name'>Chilka</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='one-box'>
                            <div className="img"><img src={img11} alt="" /></div>
                            <div className='name'>Mp wheat</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='one-box'>
                            <div className="img"><img src={img12} alt="" /></div>
                            <div className='name'>Ganderi Khal</div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

export default Items
