import React from 'react'
import Card from '../UI/Cards'
import Grid from '../UI/Grid'
import Flex from '../UI/Flex'
import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
import { AiOutlineApple, AiOutlineWindows } from 'react-icons/ai'
// import { BiLogoPlayStore } from 'react-icons/bi'
const SeamlessGridCard = () => {
  return (
    <div className=' '>
      <Grid className='lg:grid-cols-4 gap-2 xs:ml-3/10 sm:ml-2/5 bg:ml-3/10 md:ml-3/10'>
        <div
          className='h-11 border xs:ml-2/25 sm:ml-0 xs:w-1/2 sm:w-1/2 bg:w-3/5 md:w-full rounded-full px-1 lg:w-full
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
        <div className='flex h-11 border rounded-full xs:ml-2/25   sm:ml-0 xs:w-1/2 sm:w-1/2  bg:w-3/5 md:w-full   lg:w-full'>
          <div className='xs:text-xl text-3xl lg:text-3xl ml-1'>
            <AiOutlineApple />
          </div>
          <div className=' mr-2 ml-2'>
            <h4 className='text-xxs font-thin'> Download on the </h4>

            <h1 className='xs:text-xxs  lg:text-xxs xl:text-xs font-semibold'>
              App Store
            </h1>
          </div>
        </div>

        <div className='flex h-11 border rounded-full xs:ml-2/25 sm:ml-0  xs:w-1/2 sm:w-1/2  bg:w-3/5 md:w-full   lg:w-full   '>
          <div className='sm:text-xl lg:text-3xl ml-1'>
            <AiOutlineApple />
          </div>

          <div className=' mr-2 ml-2'>
            <h4 className='text-xxs font-thin'> get on </h4>

            <h1 className='sm:text-xxs xs:text-xxs xl:text-xs font-semibold'>
              Mac App Store
            </h1>
          </div>
        </div>

        <div className='flex h-11 border rounded-full xs:ml-2/25 xs:w-1/2 sm:w-1/2 xs:w-1/2 sm:ml-0 bg:w-3/5  md:w-full lg:w-full'>
          <div className='sm:text-xl lg:text-3xl ml-1'>
            <AiOutlineWindows />
          </div>

          <div className='ml-2'>
            <h6 className='text-xxs font-thin'> Get it on </h6>
            <h1 className='sm:text-xxs xl:text-xs xs:text-xxs font-semibold'>
              Windows
            </h1>
          </div>
        </div>
      </Grid>
      {/* <Flex className='  my-9'>
        <div className='border rounded-full md- xl:border rounded-full mb-2 ml-1/5'>
          <div className='flex '>
            <GooglePlayStoreIcon />

            <div className='lg:ml-0 xl:ml-0'>
              <h4 className='text-xxs font-thin'>Get it on</h4>
              <h1 className='lg:text-xxs xl: text-xs font-semibold'>
                Google Play store
              </h1>
            </div>
          </div>
        </div>
        <div className='border rounded-full sm:ml-1/5 md:ml-3 w-4/5 bg-slate-400'>
          <div className='flex '>
            <div className='text-2xl  ml-2'>
              <AiOutlineApple />
            </div>
            <div className=' mr-2'>
              <h4 className='text-xxs font-thin'> Download on the </h4>
              <h1 className='lg:text-xxs xl: text-xs font-semibold'>
                App Store
              </h1>
            </div>
          </div>
        </div>
        <div className='border rounded-full sm:w-1/2 mb-2 ml-12 md: rounded-md lg:rounded-full xl:rounded-full'>
          <Flex className=''>
            <div className='text-2xl   ml-2'>
              <AiOutlineApple />
            </div>
            <div className=' mr-2'>
              <h4 className='text-xxs font-thin'> get on </h4>
              <h1 className='lg:text-xxs xl: text-xs font-semibold'>
                Mac App Store
              </h1>
            </div>
          </Flex>
        </div>
        <div className='border rounded-full sm:w-1/2 mb-2 ml-12 md: rounded-md lg:rounded-full xl:rounded-full'>
          <Flex>
            <div className='text-xsm   ml-2'>
              <AiOutlineWindows />
            </div>
            <div className=' mr-4'>
              <h6 className='text-xxs font-thin'> Get it on </h6>
              <h1 className='lg:text-xxs xl: text-xs font-semibold'>Windows</h1>
            </div>
          </Flex>
        </div>
      </Flex> */}
    </div>
  )
}

export default SeamlessGridCard
