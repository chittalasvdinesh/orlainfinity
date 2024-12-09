import React from 'react';

const MobileHeader = ({ setShowMobileNavItems, showmobileNavItems }) => {


    return (
        <nav
            id="mobileNav"
            className="lg:hidden h-[100vh] w-[100vw] bg-black bg-opacity-60 backdrop-blur-[18px] flex flex-col items-start justify-center pl-[50px] fixed z-50 -left-[100vw] transition-all ease-in-out duration-[1100ms]"
            style={{ left: showmobileNavItems ? '0px' : '-100vw' }}
        >
            <img
                src="/img/xmark.svg"
                alt="Close Navigation"
                id="xmarkMobileNav"
                className="absolute top-4 right-4 w-10 h-10 stroke-[1px] cursor-pointer stroke-white"
                data-loaded="true"
                onClick={() => {
                    setShowMobileNavItems(!showmobileNavItems)
                }}
            />
            <ul
                className="flex flex-col gap-6 font-[radikalLight] text-white text-lg uppercase"
                id="mobileNavList"
            >
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href="./residencies.html">Residences</a>
                </li>
                <li>
                    <a href="./partners.html">Partners</a>
                </li>
                <li>
                    <a href="./amenities.html">Amenities</a>
                </li>
                <li>
                    <a href="./services.html">Services</a>
                </li>
            </ul>
            <ul className="font-[radikalLight] text-white text-[12px] uppercase mt-[50px] gap-6 flex flex-col">
                <li>Contact Us</li>
                <li>
                    <a href="./location.html">Location</a>
                </li>
            </ul>
        </nav>
    );
};

export default MobileHeader;
