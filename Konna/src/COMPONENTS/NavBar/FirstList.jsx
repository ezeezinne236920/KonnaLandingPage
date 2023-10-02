import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import Map from '../UI/Map'

export const FirstListData = [
  { name: 'Features', icons: <BsChevronDown /> },
  { name: 'Supported Businesses', icons: <BsChevronDown /> },
  { name: 'Pricing' },
  { name: 'About' },
]

export const FirstList = () => {
  return (
    <div className='hidden lg:flex items-center grow-1 space-x-6 text-xs mr-24'>
      <Map list={FirstListData} />
    </div>
  )
}

 
