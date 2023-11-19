import React from 'react'
// import Navbar from './_components/_sections/Navbar'
import Footer from './_components/_sections/Footer'

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("./_components/_sections/Navbar"), {
    ssr: false,
});

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