import React from 'react'

import Image from "next/image"
import Link from 'next/link'

import MobileMenu from '../MobileMenu'

import { navLinks } from '../../_mock'
import { Button } from '@/components/ui/button'

const Navbar = () => {
    return (
        <nav className='sticky left-0 top-0 h-20 bg-white w-full px-5 '>
            <div className=' md:px-10 lg:px-20 flex items-center justify-between gap-5'>
                <div className='flex items-center gap-1'>
                    <Image src="/lasu.png" alt='amatech logo' width={50} height={50} />

                    <Image src="/logo.jpg" alt='amatech logo' width={70} height={70} />
                </div>

                <div className='hidden lg:flex items-center gap-7'>
                    <div className='flex items-center gap-4'>
                        {navLinks.map(({ title, url }) => (
                            <Link href={url} key={title} className='text-green-700 py-2 border-b-2 border-white hover:border-b-[#7fe509] hover:text-[#7fe509] hover:border-b-2 transition-all ease-in-out duration-150'>
                                {title}
                            </Link>
                        ))}
                    </div>

                    <div className='hidden lg:flex gap-1'>
                        <Link href="/vote"><Button className='border-2 rounded border-green-600 text-green-700 hover:bg-green-600 hover:text-white'>Voting System</Button></Link>
                        <Link href="/sign-in">
                            <Button className='btn-gradient rounded'>Admin🔒</Button></Link>
                    </div>
                </div>

                <div className='lg:hidden'>
                    <MobileMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar