import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import Card from '../UI/Cards'
import styles from './SecondList.module.css'

const SecondList = () => {
  return (
    <>
      <div className='hidden md:flex items-center grow-1 space-x-6 text-xs'>
        <a href='#name' className='text-xxs'>
          Login
        </a>
        <Card>
          <a href='#Register' className='text-xxs'>
            Register
          </a>
        </Card>
        <a
          href='#Download'
          className='flex border border-blueCardBg rounded-sm p-1 text-blueCardBg'
        >
          Download
          <span className='mt-0.5'>
            <BsChevronDown />
          </span>
        </a>
      </div>
      {/* <Card className='md:hidden w-1/5 mr-2'>
        <a href='#Register text-sm '>Register</a>
      </Card> */}
    </>
  )
}

export default SecondList
