import React, {useState, useEffect} from 'react'

import Logo from '../assets/img/logo.svg'

import {CgMenuRight} from 'react-icons/cg'

import Nav from './Nav'
import NavMobile from './NavMobile'
import Program from './Program'

const Header = () => {
//header bg
    const [bg, setBg] = useState(false)
//nav mobile state
    const [navMobile, setNavMobile] = useState(false)
//scroll event
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setBg(true) : setBg(false)
            
    },)
})

  return (
    <header className={`${bg ?
        "bg-white py-5 shadow-md" : "bg-none" 
       } fixed w-full right-0 left-0 z-10 transition-all duration-300`}>
        <div className='container mx-auto flex justify-between items-center'>
            <a href='#'>
                <img src={Logo} alt='logo' />
            </a>
            <div className='hidden lg:flex'>
                <Nav />
            </div>
            <Program />
            <div onClick={() => setNavMobile(!navMobile)} className='lg:hidden cursor-pointer '>
                <CgMenuRight  className='text-blue text-3xl' />
            </div>
            <div className={`${
            navMobile ? 'max-h-[260px]' : 'max-h-0'
          } fixed w-full bg-yellow shadow-lg top-[78px] left-0 h-full overflow-hidden transition-all`}
        >
                <NavMobile />
            </div>
        </div>
        </header>
  )
}

export default Header