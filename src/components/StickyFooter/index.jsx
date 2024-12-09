import React, { useEffect, useState } from 'react'

const StickyFooter = () => {
  const [scrollDirection, setScrollDirection] = useState("up"); // "up" or "down"
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const atBottom = window.innerHeight + currentScrollPos >= document.documentElement.scrollHeight;
      console.log(atBottom, 'setScrollDirection("down");')

      if (currentScrollPos > prevScrollPos) {
        if (atBottom) {
          setScrollDirection("up");
        }
        else {
          setScrollDirection("down");
        }
      } else if (currentScrollPos < prevScrollPos) {
        setScrollDirection("up");
      }

      setPrevScrollPos(currentScrollPos);

    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div
      id="footer"
      className={`fixed  ${scrollDirection === 'down' ? 'bottom-0' : '-bottom-[50px]'} left-0 flex justify-between items-center h-[40px] px-5 lg:px-28 bg-white w-full z-[999] drop-shadow-2xl animate sticked`}
      style={{ display: 'flex' }}
    >
      <div className="hidden lg:flex justify-between lg:w-full">
        <div className="flex items-center gap-14">
          <img
            src="/img/Omniyat-logo_Black.png"
            alt=""
            className="h-[10px] lg:h-[15px]"
            data-loaded="true"
          />
        </div>
      </div>
      <button

        className="lg:hidden font-[radikalLight] text-[10px] lg:text-xs w-[130px] h-[30px] text-white bg-[#9A9A9A] hover:bg-[#231F20] uppercase"
      >
        DOWNLOAD brochure
      </button>
      <div className="flex items-center gap-4 lg:gap-3">
        <div className="hidden lg:flex gap-1 gap-y-2">
          <button
            className="font-[radikalLight] text-[8px] lg:text-[10px] tracking-wider w-[150px] h-[30px] text-white bg-[#9A9A9A] hover:bg-[#231F20] uppercase"
          >
            Register interest
          </button>

          <button
            className="font-[radikalLight] text-[8px] lg:text-[10px] tracking-wider w-[150px] h-[30px] text-white bg-[#9A9A9A] hover:bg-[#231F20] uppercase"
          >
            DOWNLOAD brochure
          </button>
        </div>

        <div className="flex items-center gap-3 lg:gap-8">
          <a
            href="https://api.whatsapp.com/send?phone=971544886666&amp;text=Hello,%20I%20am%20interested%20in%20the%20Orla Infinity, Dorchester Collection,&nbsp;Dubai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row gap-1 items-center">
              <img
                src="/img/socials/wp.svg"
                alt=""
                className="h-5 w-5"
                data-loaded="true"
              />
              <span className="uppercase text-[11px]">Whatsapp</span>
            </div>
          </a>
          <a href="tel:+971544886666">
            <div className="flex flex-row items-center gap-1">
              <img
                src="/img/socials/call.svg"
                alt=""
                className="h-4 w-4"
                data-loaded="true"
              />
              <span className="uppercase text-[11px]">Call</span>
            </div>
          </a>
        </div>
      </div>
    </div>

  )
}

export default StickyFooter
