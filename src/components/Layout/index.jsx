import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import MobileHeader from '../MobileHeader'

const Layout = ({ children }) => {
    const [showmobileNavItems, setShowMobileNavItems] = useState(false)
    console.log(showmobileNavItems, 'showmobileNavItems')

    return (
        <>

            <Header setShowMobileNavItems={setShowMobileNavItems} showmobileNavItems={showmobileNavItems} />
            <MobileHeader setShowMobileNavItems={setShowMobileNavItems} showmobileNavItems={showmobileNavItems} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
