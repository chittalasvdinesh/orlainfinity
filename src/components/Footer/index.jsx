import React from "react";
import Style from './footer.module.css'

const Footer = () => {

  return (
    <div className="bg-[#FEF8F0] text-black pt-10" id="deskFoot">
      <div className="grid grid-cols-7 mb-2 pb-[37px] justify-items-center lg:justify-items-start font-[radikalLight]">
        <div className="col-span-7 lg:col-span-2 lg:pl-16 flex flex-col items-center lg:items-start">
          <img src="/img/logo.svg" alt="" className="w-32 h-32 -mt-5 lg:pl-2" data-loaded="true" />
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/OmniyatOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#333333] rounded-full p-2"
            >
              <img src="/img/socials/fb.svg" alt="" className="w-4 h-4" data-loaded="true" />
            </a>
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2Fomniyatofficial%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#333333] rounded-full p-2"
            >
              <img src="/img/socials/twitter.svg" alt="" className="w-4 h-4" data-loaded="true" />
            </a>
            <a
              href="https://www.instagram.com/omniyatofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#333333] rounded-full p-2"
            >
              <img src="/img/socials/insta.svg" alt="" className="w-4 h-4" data-loaded="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/omniyat-group/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#333333] rounded-full p-2"
            >
              <img src="/img/socials/linkedin.svg" alt="" className="w-4 h-4" data-loaded="true" />
            </a>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 mt-10 lg:mt-0 text-sm ml-[60px] lg:ml-0">
          <p className="text-[#8e8e8e]">Pages</p>
          <ul className="flex flex-col gap-1.5 lg:gap-1 mt-1">
            <li><a href="#">Home</a></li>
            <li><a href="#">Residences</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Amenities</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="col-span-3 lg:col-span-1 mt-10 lg:mt-0 text-sm ml-[50px] lg:ml-0">
          <p className="text-[#8e8e8e]">Location</p>
          <ul className="flex flex-col gap-1 mt-1">
            <li><a href="location.html">Palm Jumeirah</a></li>
          </ul>
          <p className="text-[#8e8e8e] mt-2 lg:mt-[20px]">Developer</p>
          <ul className="flex flex-col gap-1 mt-1">
            <li><a href="https://www.omniyat.com/about" target="_blank" rel="noopener noreferrer">OMNIYAT</a></li>
          </ul>
          <div className="lg:hidden text-sm mt-2">
            <p className="text-[#8e8e8e]">Support</p>
            <ul className="flex flex-col gap-1 mt-1">
              <li className="cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 hidden lg:block text-sm">
          <p className="text-[#8e8e8e]">Support</p>
          <ul className="flex flex-col gap-1 mt-1">
            <li className="cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="col-span-7 lg:col-span-2 mt-8 lg:mt-0 pt-2 text-sm flex flex-col items-center lg:items-start">
          <a href="https://www.omniyat.com/" target="_blank" rel="noopener noreferrer">
            <img src="/img/Omniyat-English-Tagline_Black.png" alt="" className="h-[45px]" data-loaded="true" />
          </a>
          <button className={`${Style.contact_btn} w-[140px] mt-5`}>
            Contact Us
          </button>
          <p className="mt-4 text-center lg:text-left">
            By signing up, I agree to receive OMNIYAT’s <br /> latest news and updates in accordance <br /> with their data
            protection&nbsp;policy.
          </p>
        </div>
      </div>

      <div className="border-t border-black border-opacity-5 pt-6 pb-8">
        <div className="grid grid-cols-7 justify-items-center lg:justify-items-start gap-y-4">
          <div className="lg:pl-16 text-sm col-span-7 lg:col-span-2 font-[radikalLight]">
            Orla Infinity © 2023
          </div>
          <div className="col-span-7 lg:col-span-3 w-full">
            <ul className="flex justify-center lg:justify-start text-sm whitespace-nowrap w-full">
              <li>
                <a href="https://promotion.omniyat.com/orla/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-7 lg:col-span-2 flex gap-4 text-sm ml-[20px] lg:ml-0">
            <p className="text-[#8e8e8e]">Language</p>
            <select name="" id="languageSelect" className="bg-[#FEF8F0] w-[80px]">
              <option value="en">English</option>
              <option value="gm">German</option>
              <option value="fr">French</option>
              <option value="it">Italian</option>
              <option value="ru">Russian</option>
            </select>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer
