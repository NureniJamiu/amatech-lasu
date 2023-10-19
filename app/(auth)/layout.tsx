import Image from 'next/image'
import React from 'react'
import Link from "next/link";


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-green-900 px-20 py-10 h-screen flex items-center'>
            <div className='flex w-full items-center text-neutral-200'>
                <div className='flex-1'>
                    <div className=' w-96 mx-auto'>
                        <div className='flex items-center gap-2'>
                            <Image src="/lasu.png" alt='logo' width={80} height={80} className='rounded-full' />
                            <Image src="/logo.jpg" alt='logo' width={80} height={80} className='rounded-full' />
                        </div>
                        <span className='text-4xl font-bold '>Welcome<span className='text-5xl'>👋</span></span>
                    </div>
                    <p className='w-96 mx-auto text-xl mt-3'>Please <Link href="/sign-in" className='underline text-blue-400 italic'>Signin</Link> or <Link className='underline text-blue-400 italic' href="/sign-up">Signup</Link> to continue...</p>
                </div>

                <div className='flex-1'>
                    <div className=''>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout