import React from 'react'

import Image from "next/image"
import Link from 'next/link'
import MobileMenu from "./MobileMenu"

import { navLinks } from '../_mock'
import { Button } from '@/components/ui/button'

const Navbar = () => {
    return (
        <nav className='sticky left-0 top-0 h-20 bg-white w-full px-5 md:px-10 lg:px-20'>
            <div className='flex items-center justify-between gap-5'>
                <Image src="/logo.jpg" alt='amatech logo' width={80} height={80} />

                <div className='hidden lg:flex items-center gap-7'>
                    <div className='flex items-center gap-4'>
                        {navLinks.map(({ title, url }) => (
                            <Link href={url} key={title} className='hover:text-green-600'>
                                {title}
                            </Link>
                        ))}
                    </div>

                    <div className='hidden lg:flex gap-1'>
                        <Button>Voting System</Button>
                        <Button className='bg-green-700 hover:bg-green-800'>Admin🔒</Button>
                    </div>
                </div>



                <MobileMenu />
            </div>
        </nav>
    )
}

export default Navbar