import React from 'react'
import Banner from '../../modules/Banner'
import SeaAndSky from '../../modules/SeaAndSky'
import Infinite from '../../modules/Infinite'
import SwiperCarousel from '../../components/SwiperCarousel'
import Form from '../../modules/Form'
import StickyFooter from '../../components/StickyFooter'
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import PaymentPlan from '../../modules/PaymentPlan'


const Home = () => {
    return (
        <>
            <Banner />
            <SeaAndSky />
            <Infinite />
            {/*  */}
            <div className="h-[30vh]">
                <div className="flex h-full flex-col items-center justify-center py-14 lg:py-0 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                    <p className="text-center paraFont w-[90%] lg:w-[50%] font-[radikalLight]">
                        Iconically positioned at the pinnacle of Palm Jumeirah in Dubai, ORLA
                        Infinity represents the latest masterpiece by OMNIYAT.
                    </p>
                </div>
            </div>
            {/*  */}
            <div>
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
            </div>
            {/*  */}
            <div>
                <div className="flex flex-col items-center mt-[80px] mb-[30px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                    <p className="text-center paraFont w-[90%] lg:w-[50%] font-[radikalLight]">
                        From the very first moment you step into the perfectly landscaped
                        grounds of ORLA Infinity, you are welcomed into a lifestyle of
                        sophistication, where you find yourself surrounded by exquisite
                        artworks and enchanting water features that enhance the magnificence
                        of ORLA Infinity, all while framing the breathtaking&nbsp;views.
                    </p>
                </div>
            </div>
            {/*  */}
            <div className="lg:h-[100vh] grid grid-cols-6 items-center justify-items-center sec-img1">
                <div data-aos-duration="1200" data-aos="fade-up" data-aos-delay="400" className="font-[radikalLight] paraFont text-center py-14 lg:py-0 col-span-6 lg:col-span-2 w-[90%] lg:w-[75%] flex flex-col items-center justify-center aos-init aos-animate">
                    <p>
                        ORLA Infinity offers captivating vistas of the serene Gulf waters that
                        unfold within your crafted residence.
                    </p>
                    <p className="mt-8">
                        The magnificence of this view extends beyond the soft curved terrace,
                        a rarity in Dubai. It unveils an impressive panorama, incorporating
                        the flowing private pools, spanning up to 18 metres, ensuring ultimate
                        privacy.
                    </p>
                </div>

                <div className="row-start-1 lg:col-start-3 col-span-6 lg:col-span-4 w-[100%] lg:h-[70%] overflow-hidden">
                    <img src="/img/zoomImg1.png" alt="" className="object-cover object-center scale-150 img-zooming" data-loaded="true" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }} />
                </div>
            </div>
            {/*  */}
            <div className="lg:h-[100vh] grid grid-cols-6 items-center justify-items-center lg:-mt-28">
                <div className="col-span-6 lg:col-span-4 w-[100%] h-[100%] lg:h-[70%] overflow-hidden">
                    <img src="/img/zoomImg2.png" alt="" className="object-cover object-center scale-150 img-zooming" data-loaded="true" />
                </div>
                <div className="flex flex-col items-center w-full col-span-6 lg:col-span-2 py-14 lg:py-0 aos-init aos-animate" data-aos-duration="1200" data-aos="fade-up" data-aos-delay="400">
                    <p className="font-[radikalLight] text-center paraFont flex justify-center w-[90%] lg:w-[75%]">
                        Every detail is finessed, smooth to sight and touch from the
                        incredible scale of floor-to-ceiling windows and dual living. Step
                        into your duplex residence through direct lift access, where
                        double-height ceilings instantly give a sense of spaciousness and
                        serenity.
                    </p>
                </div>
            </div>
            {/*  */}
            <div>
                <img src="/img/bigImg2.png" alt="" data-loaded="true" />
                <h1 className="text-[30px] lg:text-[46px] uppercase font-[radikalLight] text-center pt-8 lg:pt-[80px] pb-6 lg:pb-16 sticky bottom-0 bg-white">
                    Masterful Collaborations
                </h1>
            </div>
            {/*  */}

            <div>
                <div className="flex flex-col items-center -mt-6 lg:-mt-16">
                    <div className="w-full flex flex-col items-center aos-init aos-animate" data-aos-duration="1200" data-aos="fade-up">
                        <p className="font-[radikalLight] paraFont w-[90%] lg:w-[55%] text-center mt-8">
                            ORLA Infinity is a testament to OMNIYAT's commitment to perfection,
                            achieved through the collaboration of brilliant creative minds
                            united by a shared vision. Every inch of this architectural wonder
                            reflects our unmatched expertise, transcending ordinary living and
                            embracing a world of extraordinary experiences.
                        </p>
                        <p className="font-[radikalLight] paraFont mt-8 w-[90%] lg:w-[55%] text-center">
                            At ORLA Infinity, architecture has been seamlessly designed by
                            Foster + Partners, with exquisite interiors crafted by YODEZEEN
                            combining textures and materials to create an inviting environment
                            for&nbsp;refined&nbsp;living.
                        </p>
                        <p className="font-[radikalLight] paraFont mt-8 w-[90%] lg:w-[55%] text-center">
                            From the doorman’s warm welcome, to your dedicated concierge and 270
                            degree sunrise to sunset views from your terrace, everything at ORLA
                            Infinity is designed to make life flow with natural ease.
                        </p>
                    </div>
                </div>
            </div>

            {/*  */}
            <div>
                <div style={{ overflow: 'hidden', height: '532px !important', marginTop: '130px', marginBottom: '0px', position: 'relative' }}><img src="/img/asset5.png" alt="" className="mt-[60px] lg:mt-[130px] w-[100%] lg:w-[100vw] h-[100%] lg:h-[100vh] ukiyo" style={{ display: 'block', overflow: 'hidden', backfaceVisibility: 'hidden', objectFit: 'cover', marginTop: '0px', marginBottom: '0px', width: '1440px', height: '798px !important', transform: 'translate3d(0px, -267.165px, 0px)' }} data-loaded="true" /></div>
            </div>

            {/*  */}

            <div data-aos-duration="1200" data-aos="fade-up" className="flex flex-col items-center mt-2 lg:mt-0 pb-12 lg:pb-[80px] aos-init aos-animate">
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-[30px] lg:text-[46px] uppercase font-[radikalLight] text-center pt-8 lg:pt-[80px] pb-6 lg:pb-8 bg-white">
                        A Lifestyle Beyond Compare
                    </h1>
                    <p className="text-center paraFont w-[90%] lg:w-[55%] font-[radikalLight]">
                        The ORLA Collection consists of two distinct, exclusive residences,
                        forming a singular exclusive destination, sharing world className
                        amenities.
                    </p>
                    <p className="mt-8 text-center paraFont w-[90%] lg:w-[55%] font-[radikalLight]">
                        Your health and wellbeing are at the heart of The ORLA collection
                        where every aspect of a premium Dubai lifestyle is carefully
                        considered and crafted for your pleasure. Amenities include a private
                        resident only beach club, cinemas, and spa with treatment rooms.
                    </p>
                    <p className="mt-8 text-center paraFont w-[90%] lg:w-[55%] font-[radikalLight]">
                        ORLA Infinity is flawlessly tailored for an active lifestyle,
                        providing you with access to exercise studios, gyms, and a variety of
                        pools. Dive into water sports in the ocean or enjoy shores of Palm
                        Jumeirah.
                    </p>
                </div>
            </div>

            {/*  */}
            <div>
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
                {/* <SwiperCarousel
          modules={[Navigation, Scrollbar, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.arrow-right',
            prevEl: '.arrow-left',
          }}
          scrollbar={{ draggable: true }}
          className="swiper homeSwiper h-[45vh] lg:h-[93vh] swiper-initialized swiper-horizontal" /> */}
            </div>

            {/*  */}
            <div>
                <div className="overflow-hidden lg:mb-[160px] mt-[60px] lg:mt-[110px]">
                    <img src="/img/asset9.png" alt="" className="scale-150 img-zooming" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }} data-loaded="true" />
                </div>
            </div>
            {/*  */}

            <div className="h-[25vh] w-full lg:h-[45vh] relative mt-14 lg:mt-20">
                <video src="../src/assets/video/Water_website.mp4" autoPlay muted playsinline loop className="object-cover w-full h-full">
                    <source src="../src/assets/video/Water_website.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute z-10 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
                    <h1 data-aos="fade-up" data-aos-duration="1200" className="text-white uppercase text-center font-[radikalLight] text-[24px] lg:text-[46px] leading-snug w-[100vw] aos-init">
                        At the apex of an icon,<br />
                        Palm Jumeirah
                    </h1>
                </div>
            </div>
            {/*  */}

            <div className="flex flex-col items-center mt-14 lg:mt-20 lg:mb-[130px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                <p className="text-center paraFont w-[90%] lg:w-[48%] font-[radikalLight]">
                    Situated on a 16,600 sq. m. beachfront plot at the apex of the Palm’s
                    crescent, a 270-degree panoramic view showcases a mesmerizing canvas
                    that embraces the iconic Dubai skyline, and the turquoise allure of
                    the Arabian Gulf. In this sanctuary of dreams, life becomes a
                    symphony, where every heartbeat resonates with the beauty of eternity.
                </p>
            </div>

            {/*  */}

            <PaymentPlan />

            {/*  */}


            <Form />

            {/*  */}

            <div className="relative h-[15vh] lg:h-[30vh] w-[100vw] flex justify-center items-center text-sm lg:text-xl mt-[60px] lg:mt-[130px]">
                <video src="../src/assets/video/Water_website.mp4"
                    autoPlay
                    muted
                    loop
                    className="absolute object-cover w-full h-full z-[1]">
                    <source src="../src/assets/video/Water_website.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="-ml-[40px] lg:-ml-0 font-[radikalLight] uppercase flex items-center justify-center gap-3 lg:gap-16 text-white z-[2]">
                    <p className="tracking-widest cursor-pointer relative" onclick="openForm('privateMeeting')">
                        <span className="font-[serif] text-xl lg:text-3xl absolute -top-[7px] lg:-top-[8px] -left-6 lg:-left-9">
                            ←</span>
                        Book A Meeting
                    </p>
                    <span className="hero__scrollTo lineFooter">
                        <div className="line !h-[3.5rem] lg:!h-[7.5rem] !w-[2px]">
                            <div className="background"></div>
                            <div className="highlight"></div></div></span>
                    <p className="tracking-widest">
                        <a href="./residencies.html" className="relative">
                            Residences
                            <span className="font-[serif] text-xl lg:text-3xl absolute -top-[8px] -right-6 lg:-right-9">
                                →</span></a>
                    </p>
                </div>
            </div>
            {/*  */}
            <StickyFooter />
        </>
    )
}

export default Home
