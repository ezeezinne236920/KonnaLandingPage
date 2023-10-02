import React from 'react'
import Card from '../UI/Cards'
import Grid from '../UI/Grid'
import Flex from '../UI/Flex'
import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
import { AiOutlineApple, AiOutlineWindows } from 'react-icons/ai'

const SeamlessGridCard = () => {
  return (
    <div className='w-4/5'>
      {/* <Grid className=' text-center sm:translate-x-16  lg:translate-x-1 sm:hidden lg:hidden md:hidden xl:hidden translate-x-1 closeGrid'>
        <div className='border rounded-full sm:w-1/2 ml-12 xl:w-4/5  bg-slate-400'>
          <Flex className=' '>
            <GooglePlayStoreIcon />

            <div className='lg:ml-0 xl:ml-0'>
              <h4 className='text-xxs font-thin'>Get it on</h4>
              <h1 className='lg:text-xxs xl: text-xs font-semibold'>
                Google Play store
              </h1>
            </div>
          </Flex>
        </div>
        <div className='border rounded-full sm:w-1/2  ml-12'>
          <Flex>
            <div className='text-2xl   ml-2'>
              <AiOutlineApple />
            </div>
            <div className=' mr-2'>
              <h4 className='text-xxs font-thin'> Download on the </h4>
              <h1 className='lg:text-xxs xl: text-xs font-semibold'>
                App Store
              </h1>
            </div>
          </Flex>
        </div>
        <div className='border rounded-full sm:w-1/2  ml-12'>
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
        <div className='border rounded-full sm:w-1/2  ml-12'>
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
      </Grid> */}
      <Flex className='text-center sm:translate-x-16 mt-9  lg:translate-x-1 xl: block translate-x-1  bg-slate-600 openGrid'>
        <div className='border rounded-full sm:w-1/2 mb-2 ml-12 md: rounded-md lg:rounded-md xl:rounded-full'>
          <Flex className=' '>
            <GooglePlayStoreIcon />

            <div className='lg:ml-0 xl:ml-0'>
              <h4 className='text-xxs font-thin'>Get it on</h4>
              <h1 className='lg:text-xxs xl: text-xs font-semibold'>
                Google Play store
              </h1>
            </div>
          </Flex>
        </div>
        <div className='border rounded-full sm:w-1/2 mb-2 ml-12 md: rounded-md lg:rounded-md xl:rounded-full'>
          <Flex>
            <div className='text-2xl  ml-2'>
              <AiOutlineApple />
            </div>
            <div className=' mr-2'>
              <h4 className='text-xxs font-thin'> Download on the </h4>
              <h1 className='lg:text-xxs xl: text-xs font-semibold'>
                App Store
              </h1>
            </div>
          </Flex>
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
        <div className='border rounded-full sm:w-1/2 mb-2 ml-12 md: rounded-md lg:rounded-md xl:rounded-full'>
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
      </Flex>
    </div>
  )
}

export default SeamlessGridCard
