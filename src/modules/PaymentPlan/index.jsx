import React from 'react'
import Style from './paymentplan.module.css'
const PaymentPlan = () => {
    return (
        <section className="mt-16 lg:mt-0 bg-[url('/img/paymentBg.png')] bg-no-repeat bg-cover bg-center font-[radikalLight] py-16">
            <h1 className="text-center text-[28px] lg:text-[36px]">PAYMENT PLAN</h1>
            <div className="hidden lg:grid grid-cols-5 justify-center items-center text-center lg:px-14 mt-8 gap-2">
                <div className="border-r border-black">
                    <p className={Style.payment_percent}>5%</p>
                    <p className={Style.payment_info}>
                        Booking Form Effective Date
                        <br />
                        <br />
                    </p>
                </div>
                <div>
                    <p className={Style.payment_percent}>20%</p>
                    <p className={Style.payment_info}>
                        Sale &amp; Purchase Agreement
                        <br />
                        Effective Date
                    </p>
                </div>
                <div className="border-r border-l border-black">
                    <p className={Style.payment_percent}>10%</p>
                    <p className={Style.payment_info}>
                        12 months from Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div className="border-r border-black">
                    <p className={Style.payment_percent}>7.5%</p>
                    <p className={Style.payment_info}>
                        18 months from Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div>
                    <p className={Style.payment_percent}>7.5%</p>
                    <p className={Style.payment_info}>
                        24 months from Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
            </div>

            <div className="hidden lg:grid grid-cols-4 justify-center items-center text-center lg:px-44 mt-12">
                <div className="border-r border-black">
                    <p className={Style.payment_percent}>5%</p>
                    <p className={Style.payment_info}>
                        28 months from Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div>
                    <p className={Style.payment_percent}>5%</p>
                    <p className={Style.payment_info}>
                        32 months from Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div className="border-r border-l border-black">
                    <p className={Style.payment_percent}>10%</p>
                    <p className={Style.payment_info}>
                        36 months from Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div>
                    <p className={Style.payment_percent}>30%</p>
                    <p className={Style.payment_info}>
                        Project Completion Date
                        <br />
                        <br />
                    </p>
                </div>
            </div>

            {/* Mobile view */}
            <div className="grid lg:hidden grid-cols-3 justify-center items-center text-center gap-y-6 mt-8">
                <div>
                    <p className={Style.payment_percent}>5%</p>
                    <p className={Style.payment_info}>
                        Booking Form
                        <br />
                        Effective Date
                    </p>
                </div>
                <div className="border-r border-l border-black pb-[14px]">
                    <p className={Style.payment_percent}>20%</p>
                    <p className={Style.payment_info}>
                        Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div>
                    <p className={Style.payment_percent}>10%</p>
                    <p className={Style.payment_info}>
                        12 months from
                        <br />
                        Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div>
                    <p className={Style.payment_percent}>7.5%</p>
                    <p className={Style.payment_info}>
                        18 months from
                        <br />
                        Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div className="border-r border-l border-black">
                    <p className={Style.payment_percent}>7.5%</p>
                    <p className={Style.payment_info}>
                        24 months from
                        <br />
                        Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div>
                    <p className={Style.payment_percent}>5%</p>
                    <p className={Style.payment_info}>
                        28 months from
                        <br />
                        Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div>
                    <p className={Style.payment_percent}>5%</p>
                    <p className={Style.payment_info}>
                        32 months from
                        <br />
                        Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div className="border-r border-l border-black">
                    <p className={Style.payment_percent}>10%</p>
                    <p className={Style.payment_info}>
                        36 months from
                        <br />
                        Sale &amp; Purchase
                        <br />
                        Agreement Effective Date
                    </p>
                </div>
                <div>
                    <p className={Style.payment_percent}>30%</p>
                    <p className={Style.payment_info}>Project Completion Date</p>
                </div>
            </div>
        </section>
    )
}

export default PaymentPlan
