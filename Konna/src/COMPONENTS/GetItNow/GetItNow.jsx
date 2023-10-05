import React, { useState } from 'react'
import Card from '../UI/Cards'
import Flex from '../UI/Flex'
import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
// import SeamlessGridCard from '../SeamLessBusineesToolSection/SeamlessGridCard'
import GetitCard from './GetitCard'
const GetItNow = () => {
  return (
    <>
      <div className='container w-3/5 mx-auto bg-blue-600 rounded-lg flex-col items-center py-1'>
        <div className={`container mx-auto w-4/5   lg:text-xl xs:ml-1/10 ml-1`}>
          <h1 className='sm:text-sm md:text-base sm:ml-3/10 md:ml-8/25 lg:text-xl ml-1 font-bold  h-1/4'>
            What are you waiting for?
          </h1>
          <p className='sm:ml-6 text-xs lg:ml-16 text-gray-400 font-base lg:text-sm  pl-4 my-6'>
            Make your business online/offline with/without internet
          </p>

          <div className='px-px bg-white text-blue-600 text-center w-2/5 mx-auto rounded-sm xs:text-xxs lg:text-sm'>
            Get Started Now!
          </div>
        </div>

        <GetitCard />
      </div>
    </>
  )
}

export default GetItNow
/**
 *
 */
