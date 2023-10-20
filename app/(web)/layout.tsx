import React from 'react'
import Navbar from './_components/_sections/Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout