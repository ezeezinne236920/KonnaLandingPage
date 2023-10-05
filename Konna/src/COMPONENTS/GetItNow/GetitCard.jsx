import React from 'react'
import Card from '../UI/Cards'
import Grid from '../UI/Grid'
import Flex from '../UI/Flex'
import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
import { AiOutlineApple, AiOutlineWindows } from 'react-icons/ai'
// import { BiLogoPlayStore } from 'react-icons/bi'
const GetitCard = () => {
  return (
    <div className=''>
      <Grid className='lg:grid-cols-4 gap-2 container w-4/5 mx-auto xs:ml-1/4 md:ml-1/10'>
        <div
          className='h-9 border xs:ml-2/25 sm:ml-0 xs:w-1/2  xs:h-11 sm:w-1/2 bg:w-3/5 md:w-full rounded-full px-1 lg:w-full
        '
        >
          <div className='sm:flex flex-row'>
            <GooglePlayStoreIcon />
            <div className=''>
              <h4 className='text-xxs font-thin'>Get it on</h4>
              <h1 className='xs:text-xxs lg:text-xxs xl:text-xs font-semibold'>
                Google Play store
              </h1>
            </div>
          </div>
        </div>
        <div className='flex h-9 border rounded-full xs:ml-2/25  xs:h-11 sm:ml-0 xs:w-1/2 sm:w-1/2  bg:w-3/5 md:w-full   lg:w-full'>
          <div className='xs:text-xl lg:text-xl ml-1'>
            <AiOutlineApple />
          </div>
          <div className=' mr-2 ml-2 lg:ml-px'>
            <h4 className='text-xxs font-thin'> Download on </h4>

            <h1 className='xs:text-xxs  lg:text-xxs xl:text-xs font-semibold'>
              App Store
            </h1>
          </div>
        </div>

        <div className='flex  border rounded-full xs:ml-2/25 xs:h-11 sm:ml-0  xs:w-1/2 sm:w-1/2  bg:w-3/5 md:w-full   lg:w-full h-9  '>
          <div className='sm:text-xl lg:text-xl ml-1'>
            <AiOutlineApple />
          </div>

          <div className=' mr-2 ml-2 lg:ml-px'>
            <h4 className='text-xxs font-thin'> get on </h4>

            <h1 className='sm:text-xxs xs:text-xxs xl:text-xs font-semibold'>
              Mac App Store
            </h1>
          </div>
        </div>

        <div className='flex xs:h-11  border rounded-full xs:ml-2/25 xs:w-1/2 sm:w-1/2 sm:ml-0 bg:w-3/5  md:w-full lg:w-full h-9'>
          <div className='sm:text-xl lg:text-xl ml-1'>
            <AiOutlineWindows />
          </div>

          <div className='ml-2'>
            <h6 className='text-xxs font-thin'> Get it on </h6>
            <h1 className='sm:text-xxs xl:text-xs xs:text-xxs font-semibold '>
              Windows
            </h1>
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default GetitCard
