import React from 'react'
import Navbar from './_components/_sections/Navbar'
import Footer from './_components/_sections/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout