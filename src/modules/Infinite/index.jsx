import React, { useEffect, useState } from 'react'
import Style from './infinite.module.css'
const Infinite = () => {
  const [translateY, setTranslateY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setTranslateY(scrollPosition * 0.1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="h-[40vh] lg:h-[100vh] relative overflow-hidden">
      <div style={{ overflow: 'hidden', height: '443px !important', position: 'relative' }}><img src="/img/Asset3.png" alt="" className={`h-[45vh] lg:h-[100vh] w-[100vw] ${Style.img}`} style={{ transform: `translate3d(0px, ${translateY}px, 0px)` }} data-loaded="true" /></div>
      <div className="absolute uppercase top-[65%] -translate-y-[65%] left-[50%] -translate-x-[50%] text-white">
        <h1 className="font-[radikal] text-[16px] lg:text-[34px] ml-1 lg:ml-3 tracking-wider drop-shadow">
          Welcome to the
        </h1>
        <h2 className="text-[48px] lg:text-[150px] tracking-[10px] lg:tracking-[65px] leading-[60px] lg:leading-[155px] font-[radikalThin] drop-shadow">
          Infinite
        </h2>
      </div>
    </section>
  )
}

export default Infinite
