import React from 'react';
import SwiperCarousel from '../../components/SwiperCarousel'
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const BottomCarousel = () => {
    return (
        <section id='swiper_2'>
            <SwiperCarousel
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 2500, // Delay between transitions (in ms)
                    disableOnInteraction: false, // Continue autoplay after user interaction
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                loop={true} // Enable infinite looping]
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper h-[35vh] lg:h-[100vh]"
            />
        </section>
    )
}

export default BottomCarousel
