import React, {useEffect, useState} from 'react'

import {bundleData} from '../data'

import Bundles from './Bundles'

import IgorVideo from './IgorVideo'

import Igo from '../assets/img/dogs/igo.png'

import IgoHat from '../assets/img/dogs/igohat.png'


const Igor = () => {

    
  return (
    <section className=''>
        
        <div className='p-12 flex flex-col bg-[#FEF6AF] justify-center items-center md:flex-col'>
            {/* text */}
            <div className='w-1/2 flex flex-col mb-0 items-center justify-center text-center'>
                <img src={IgoHat} alt='frenchie' className='w-[250px] h-[250px] mb-9 rounded-full object-cover' />
                <h2 className='h2 mb-3'>Meet Igor</h2>
            </div>
               <div className='w-1/2'><p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
               </div>
        </div>
        
    </section>
  )
}

export default Igor