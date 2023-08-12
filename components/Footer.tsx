import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col
    text-black-100 mt-5 border-t 
    border-gray-100'>
        <div className='flex max-md:flex-col
        flex-wrap justify-between gap-5 sm:px-16 
        px-6 py-10'>
            <div className='flex flex-col
            justify-start items-start gap-6'>
                <Image src="/logo.svg"
                alt='logo' width={118}
                height={18} 
                className='object-contain' 
                />
                <p className='text-base
                text-gray-700'>
                    CarHub 2023 <br/>
                    All right reserved &copy;
                </p>
            </div>
            <div className='footer__links'>
                {footerLinks.map((Links) => (
                    <div key={Links.title}
                    className='footer__link'>
                        <h3 className='font-bold'>{Links.title}</h3>
                        {Links.links.map((item) => (
                            <Link
                                key={item.title}
                                href={item.url}
                                className="text-gray-500"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}

            </div>
            </div>

            <div className='flex justify-between mt-10 border-t
            border-grey-100 sm:px-16 px-6 py-10'>
                <p>@2023 CarHub. All rights reserved</p> 
                    <div className='footer__copyright-link'>
                            <Link href="/"
                            className='text-grey-500'>
                                Privacy Policy
                            </Link>
                    </div>
            </div>
       

    </footer>
  )
}

export default Footer