import React from 'react'
import Banner from '../../modules/Banner'
import SeaAndSky from '../../modules/SeaAndSky'
import Infinite from '../../modules/Infinite'
import SwiperCarousel from '../../components/SwiperCarousel'
import Form from '../../modules/Form'
import StickyFooter from '../../components/StickyFooter'
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import PaymentPlan from '../../modules/PaymentPlan'
import MeetingVideo from '../../modules/MeetingVideo'
import TitleVideo from '../../modules/TitleVideo'
import LocationText from '../../modules/LocationText'
import TopCarosuel from '../../modules/TopCarousel'
import WelcomeText from '../../modules/WelcomeText'
import Feature1 from '../../modules/OrlaFeatures/Feature1'
import Feature2 from '../../modules/OrlaFeatures/Feature2'
import BottomCarousel from '../../modules/BottomCarousel'


const Home = () => {
    return (
        <>
            <Banner />
            <SeaAndSky />
            <Infinite />
            {/*  */}
            <LocationText />
            {/*  */}
            <TopCarosuel />
            {/*  */}
            <WelcomeText />
            {/*  */}
            <Feature1 />
            {/*  */}
            <Feature2 />
            {/*  */}
            <section>
                <img src="/img/bigImg2.png" alt="" data-loaded="true" />
                <h1 className="text-[30px] lg:text-[46px] uppercase font-[radikalLight] text-center pt-8 lg:pt-[80px] pb-6 lg:pb-16 sticky bottom-0 bg-white">
                    Masterful Collaborations
                </h1>
            </section>
            {/*  */}
            <section>
                <div className="flex flex-col items-center -mt-6 lg:-mt-16">
                    <div className="w-full flex flex-col items-center aos-init aos-animate" data-aos-duration="1200" data-aos="fade-up">
                        <p className="font-[radikalLight] w-[90%] lg:w-[55%] text-center mt-8">
                            ORLA Infinity is a testament to OMNIYAT's commitment to perfection,
                            achieved through the collaboration of brilliant creative minds
                            united by a shared vision. Every inch of this architectural wonder
                            reflects our unmatched expertise, transcending ordinary living and
                            embracing a world of extraordinary experiences.
                        </p>
                        <p className="font-[radikalLight] mt-8 w-[90%] lg:w-[55%] text-center">
                            At ORLA Infinity, architecture has been seamlessly designed by
                            Foster + Partners, with exquisite interiors crafted by YODEZEEN
                            combining textures and materials to create an inviting environment
                            for&nbsp;refined&nbsp;living.
                        </p>
                        <p className="font-[radikalLight] mt-8 w-[90%] lg:w-[55%] text-center">
                            From the doorman’s warm welcome, to your dedicated concierge and 270
                            degree sunrise to sunset views from your terrace, everything at ORLA
                            Infinity is designed to make life flow with natural ease.
                        </p>
                    </div>
                </div>
            </section>
            {/*  */}
            <div>
                <div style={{ overflow: 'hidden', height: '532px !important', marginTop: '130px', marginBottom: '0px', position: 'relative' }}><img src="/img/asset5.png" alt="" className="mt-[60px] lg:mt-[130px] w-[100%] lg:w-[100vw] h-[100%] lg:h-[100vh] ukiyo" style={{ display: 'block', overflow: 'hidden', backfaceVisibility: 'hidden', objectFit: 'cover', marginTop: '0px', marginBottom: '0px', width: '1440px', height: '798px !important', transform: 'translate3d(0px, -267.165px, 0px)' }} data-loaded="true" /></div>
            </div>
            {/*  */}
            <section data-aos-duration="1200" data-aos="fade-up" className="flex flex-col items-center mt-2 lg:mt-0 pb-12 lg:pb-[80px] aos-init aos-animate">
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-[30px] lg:text-[46px] uppercase font-[radikalLight] text-center pt-8 lg:pt-[80px] pb-6 lg:pb-8 bg-white">
                        A Lifestyle Beyond Compare
                    </h1>
                    <p className="text-center w-[90%] lg:w-[55%] font-[radikalLight]">
                        The ORLA Collection consists of two distinct, exclusive residences,
                        forming a singular exclusive destination, sharing world className
                        amenities.
                    </p>
                    <p className="mt-8 text-center w-[90%] lg:w-[55%] font-[radikalLight]">
                        Your health and wellbeing are at the heart of The ORLA collection
                        where every aspect of a premium Dubai lifestyle is carefully
                        considered and crafted for your pleasure. Amenities include a private
                        resident only beach club, cinemas, and spa with treatment rooms.
                    </p>
                    <p className="mt-8 text-center w-[90%] lg:w-[55%] font-[radikalLight]">
                        ORLA Infinity is flawlessly tailored for an active lifestyle,
                        providing you with access to exercise studios, gyms, and a variety of
                        pools. Dive into water sports in the ocean or enjoy shores of Palm
                        Jumeirah.
                    </p>
                </div>
            </section>
            {/*  */}
            <BottomCarousel />
            {/*  */}
            <section>
                <div className="overflow-hidden lg:mb-[160px] mt-[60px] lg:mt-[110px]">
                    <img src="/img/asset9.png" alt="" className="scale-150 img-zooming" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }} data-loaded="true" />
                </div>
            </section>
            {/*  */}
            <TitleVideo />
            {/*  */}
            <section className="flex flex-col items-center mt-14 lg:mt-20 lg:mb-[130px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                <p className="text-center w-[90%] lg:w-[48%] font-[radikalLight]">
                    Situated on a 16,600 sq. m. beachfront plot at the apex of the Palm’s
                    crescent, a 270-degree panoramic view showcases a mesmerizing canvas
                    that embraces the iconic Dubai skyline, and the turquoise allure of
                    the Arabian Gulf. In this sanctuary of dreams, life becomes a
                    symphony, where every heartbeat resonates with the beauty of eternity.
                </p>
            </section>
            {/*  */}
            <PaymentPlan />
            {/*  */}
            <Form />
            {/*  */}
            <MeetingVideo />
            {/*  */}
            <StickyFooter />
        </>
    )
}

export default Home
