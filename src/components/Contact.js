import React from 'react'
import DogImg from '../assets/img/dogs/dog-contact.png'


const Contact = () => {
  return (
    <section className='bg-yellow-secondary pt-6'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-around'>
                <div className='order-1 lg:-order-1 lg:mt-16'>
                    <img className='-mb-[12px]' src={DogImg} alt='dog' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-orange font-semibold mb-3'>Contact</div>
                    <div className='text-4xl text-blue font-extrabold'>+ 995 599226093</div>
                    <div className='mb-7 text-blue'>Openin Hours: Mon - Sun: 10am-6pm</div>
                    <button className='btn'>Get an appointment</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact