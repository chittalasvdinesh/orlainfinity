import React from 'react'

const MeetingVideo = () => {
    return (
        <section className="relative h-[15vh] lg:h-[30vh] w-[100vw] flex justify-center items-center text-sm lg:text-xl mt-[60px] lg:mt-[130px]">
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
        </section>
    )
}

export default MeetingVideo
