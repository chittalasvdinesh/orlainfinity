import React from 'react'

const Feature1 = () => {
    return (
        <section className="lg:h-[100vh] grid grid-cols-6 items-center justify-items-center">
            <div data-aos-duration="1200" data-aos="fade-up" data-aos-delay="400" className="font-[radikalLight] text-center py-14 lg:py-0 col-span-6 lg:col-span-2 w-[90%] lg:w-[75%] flex flex-col items-center justify-center aos-init aos-animate">
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
        </section>
    )
}

export default Feature1
