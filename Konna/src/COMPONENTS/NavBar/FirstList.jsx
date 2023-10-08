import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import Map from '../UI/Map'

export const FirstListData = [
  { name: 'Features', icons: <BsChevronDown />, icon: <BsChevronUp /> },
  {
    name: 'Supported Businesses',
    icons: <BsChevronDown />,
    icon: <BsChevronUp />,
  },
  ,
  { name: 'Pricing' },
  { name: 'About' },
]

export const FirstList = () => {
   
  return (
    <div className='hidden text-xxs lg:flex items-center grow-0  text-xs absolute left-12 ml-12 '>
      <Map list={FirstListData} />
    </div>
  )
}
