"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path=usePathname();
    // useEffect(()=>{
    //     console.log(path)
    // },[])

  return (
    <div className='flex p-6 items-center justify-between bg-secondary shadow-md'>
      <Link href="/">
          <Image src={'/logo.svg'} width={140} height={100} alt='logo' />
      </Link>
        <ul className='hidden md:flex gap-12'>
          <Link href={"/dashboard"}>
          {/* //$ path is a variable that holds the current path of the page */}
            <li className={`hover:text-primary hover:font-bold text-2xl transition-all
            cursor-pointer
            ${path=='/dashboard'&&'text-primary font-bold'}
            `}
            
            >Dashboard</li>
            </Link>
            
            <li className={`hover:text-primary hover:font-bold text-2xl transition-all
            cursor-pointer
            ${path=='/dashboard/questions'&&'text-primary font-bold'}
            `}>Questions</li>
              <Link href={"/dashboard/upgrade"}>
            <li className={`hover:text-primary hover:font-bold text-2xl transition-all
            cursor-pointer
            ${path=='/dashboard/upgrade'&&'text-primary font-bold'}
            `}>Upgrade</li>
            </Link>
            <li className={`hover:text-primary hover:font-bold text-2xl transition-all
            cursor-pointer
            ${path=='/dashboard/how'&&'text-primary font-bold'}
            `}>How it Works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header