import React, { useState } from 'react'
import Card from '../UI/Cards'
import Flex from '../UI/Flex'
import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
import SeamlessGridCard from '../SeamLessBusineesToolSection/SeamlessGridCard'
// import GetitCard from './GetitCard'
const GetItNow = () => {
  return (
    <>
      <div className='container w-4/5 mx-auto bg-blue-600 rounded-lg flex-col items-center py-7'>
        <div className={`container mx-auto  text-center lg:text-xl`}>
          <h1 className='sm:text-xs md:text-base  font-bold  h-1/4'>
            What are you waiting for?
          </h1>
          <p className=' text-gray-400 font-base lg:text-sm  pl-4 my-6'>
            Make your business online/offline with/without internet
          </p>

          <div className='px-px bg-white text-blue-600 text-center items-center mx-auto rounded-md xs:w-1/5 xs:text-xxs lg:text-xs  xs:w-3/5  md:w-3/10 my-9'>
            Get Started Now!
          </div>
        </div>
        <div className=' container mx-auto w-4/5'>
          <SeamlessGridCard />
        </div>
      </div>
    </>
  )
}

export default GetItNow
