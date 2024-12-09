import React from 'react'

const TitleVideo = () => {
    return (
        <section className="h-[25vh] w-full lg:h-[45vh] relative mt-14 lg:mt-20">
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
        </section>
    )
}

export default TitleVideo
