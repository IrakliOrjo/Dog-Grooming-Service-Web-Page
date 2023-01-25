import React from 'react'


import PhoneIcon from '../assets/img/phone.svg'


const Program = () => {
  return (
    <div>
      {/*Phone icons and phone number */}
     <div className='flex lg:gap-x-[10px] items-baseline justify-end'>
      <img className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]' src={PhoneIcon} alt='' />
      <div className='lg:text-[23px] text-blue font-extrabold'>+995 599226093</div>
     </div>
     {/*open hours*/}
     <div className='text-sm'>
      {/*Show only on desktop mmode */}
      <div className='hidden lg:flex'>Openin Hours: Mon - Sun: 10am - 6pm</div>
    
     {/*Show only on mobile mmode */}
      <div className='lg:hidden text-right'>Mon - Sun: 10am - 6pm</div>
     </div>
    </div>
  )
}

export default Program