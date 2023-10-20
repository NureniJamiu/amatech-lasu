import Image from 'next/image'
import React from 'react'
import Link from "next/link";


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-gradient md:px-20 md:py-10 h-screen md:flex items-center'>
            <div className='flex flex-col md:flex-row gap-5 w-full items-center text-neutral-100 px-5'>
                <div className='md:flex-1'>
                    <div className=' md:w-96 md:mx-auto'>
                        <div className='flex items-center gap-2 py-'>
                            <Image src="/lasu.png" alt='logo' width={80} height={80} className='rounded-full' />
                            <Image src="/logo.jpg" alt='logo' width={80} height={80} className='rounded-full' />
                        </div>
                        <span className='hidden md:block text-4xl font-bold '>Administrators only</span>
                    </div>
                    <p className='hidden md:block w-96 mx-auto text-xl mt-3'>This portal is exclusively for authorized administrators who play a pivotal role in maintaining and enhancing the website.

                        <span className='inline-block text-sm mt-2'>Here, you{"'"}ll find the tools and features necessary to oversee and improve our services.</span> </p>

                </div>

                <div className='md:flex-1'>
                    <div className=''>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout