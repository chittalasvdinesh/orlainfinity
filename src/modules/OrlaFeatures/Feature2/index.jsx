import React from 'react'

const Feature2 = () => {
    return (
        <section className="lg:h-[100vh] grid grid-cols-6 items-center justify-items-center lg:-mt-28">
            <div className="col-span-6 lg:col-span-4 w-[100%] h-[100%] lg:h-[70%] overflow-hidden">
                <img src="/img/zoomImg2.png" alt="" className="object-cover object-center scale-150 img-zooming" data-loaded="true" />
            </div>
            <div className="flex flex-col items-center w-full col-span-6 lg:col-span-2 py-14 lg:py-0 aos-init aos-animate" data-aos-duration="1200" data-aos="fade-up" data-aos-delay="400">
                <p className="font-[radikalLight] text-center flex justify-center w-[90%] lg:w-[75%]">
                    Every detail is finessed, smooth to sight and touch from the
                    incredible scale of floor-to-ceiling windows and dual living. Step
                    into your duplex residence through direct lift access, where
                    double-height ceilings instantly give a sense of spaciousness and
                    serenity.
                </p>
            </div>
        </section>
    )
}

export default Feature2
