import React from 'react'

import {navigation} from '../data'

const Nav = () => {
  return (
    <nav className='text-[18px] capitalize'>
      <ul className='flex gap-x-10'>
        {navigation.map((item,index) => {
          return (<li>
            <a className='capilatize hover:text-orange transition' href={item.href} >{item.name}</a>
          </li>)
        })}
      </ul>
    </nav>
  )
}

export default Nav