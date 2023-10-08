import React from 'react'
import Card from '../UI/Cards'
import Grid from '../UI/Grid'
import Flex from '../UI/Flex'
import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
import { AiOutlineApple, AiOutlineWindows } from 'react-icons/ai'
// import { BiLogoPlayStore } from 'react-icons/bi'
const SeamlessGridCard = () => {
  return (
    <div className='container mx-auto items-center'>
      <Grid className='lg:grid-cols-4 gap-2 text-center items-center '>
        <div
          className='flex text-center items-center xs:justify-center space-x-2 border border-gray-800 rounded-full bg:w-full
        '
        >
          <div className='w-1/10 text-xl'>
            <GooglePlayStoreIcon />
          </div>

          <div className='text-center'>
            <h4 className='text-xxs font-thin'>Get it on</h4>
            <h1 className='xs:text-xxs xl:text-xs font-semibold '>
              Google Play store
            </h1>
          </div>
        </div>
        <div
          className='flex  border border-gray-800 xs:justify-center space-x-2 rounded-full bg:w-full items-center
        '
        >
          <div className=' text-3xl '>
            <AiOutlineApple />
          </div>
          <div className=' text-center '>
            <h4 className='text-xxs font-thin'> Download on the </h4>

            <h1 className='xs:text-xxs  lg:text-xxs xl:text-xs font-semibold'>
              App Store
            </h1>
          </div>
        </div>

        <div className=' container  flex text-center  xs:justify-center space-x-2 border border-gray-800 rounded-full bg:w-full items-center'>
          <div className=' text-3xl '>
            <AiOutlineApple />
          </div>

          <div className='text-center'>
            <h4 className='text-xxs font-thin'> get on </h4>

            <h1 className='sm:text-xxs xs:text-xxs xl:text-xs font-semibold'>
              Mac App Store
            </h1>
          </div>
        </div>

        <div className='flex text-center xs:justify-center space-x-2 border border-gray-800 rounded-full bg:w-full items-center xs:items-center  '>
          <div className='text-3xl'>
            <AiOutlineWindows />
          </div>

          <div className='text-center'>
            <h6 className='text-xxs font-thin'> Get it on </h6>
            <h1 className='sm:text-xxs xl:text-xs xs:text-xxs font-semibold'>
              Windows
            </h1>
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default SeamlessGridCard
