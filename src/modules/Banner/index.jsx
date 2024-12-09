
import Style from './banner.module.css'

const Banner = () => {
  return (
    <div className="relative h-[100vh]">
      <img src='/img/desktop_banner.jpg' alt='banner-image' className="hidden sm:block h-[100vh] w-[100vw] object-cover" />

      <img src="/img/mobile_banner.jpg" alt="" className="h-[100vh] w-[100vw] lg:hidden" />
      <span className={Style.banner_scrollTo}><span className="text-xs tracking-little text-white uppercase absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">scroll down</span>
        <div className={Style.line}>
          <div className={Style.background}></div>
          <div className={Style.highlight}></div></div></span>
    </div>
  )
}

export default Banner
