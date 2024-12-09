import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.min.css';

// import './styles.css';

// import required modules

export default function SwiperCarousel(props) {
    return (
        <>
            <Swiper
                {...props}
            >
                <SwiperSlide>
                    <img src="/img/slides/img1.jpg" className='w-full h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/slides/img2.jpg" className='w-full h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/slides/img3.jpg" className='w-full h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/slides/img4.jpg" className='w-full h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/slides/img5.jpg" className='w-full h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/slides/img6.jpg" className='w-full h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/slides/img7.jpg" className='w-full h-full' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
