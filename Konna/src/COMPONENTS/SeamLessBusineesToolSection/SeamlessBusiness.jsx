import React, { useState } from 'react'
import Card from '../UI/Cards'
import Flex from '../UI/Flex'
import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
import SeamlessGridCard from './SeamlessGridCard'

const SeamlessBusiness = ({ isOnMobile }) => {
  // const [isOnMobile, setIsOnMobile] = useState({ isOnMobile })
  return (
    <>
      <div className=' w-3/5 mt-10 mx-auto  flex-col items-center'>
        <div className={`${isOnMobile ? '' : 'mt-1/2'} ml-14 mx-auto `}>
          <h1 className='sm:text-xl md:text-3xl ml-12 lg:text-5xl mx-auto font-bold ml-9 h-1/4'>
            A Seamless Business, Management Tool
            {/* <div className='sm:ml-6 lg:ml-12'>Management Tool</div> */}
          </h1>
          <p className='sm:ml-6 text-xs font-light lg:ml-16   pl-4 my-6'>
            The most reliable alternative to manage stock and track sales, Take
            <div className='sm:ml-1  md:ml-3 lg:ml-12'>
              your business Global and let the world know your trade
            </div>
          </p>
        </div>
        <Card className='px-px mx-auto pl-8 my-1 sm:w-2/5  md:w-1/5 ml-1/5'>
          {' '}
          Get Started
        </Card>
        <SeamlessGridCard />
      </div>
      <div className='flex-col overflow-x-hidden scroll-mx-0 relative'>
        <div className='w-3/5 mx-auto'>
          <AssetPicture />
        </div>

        <Card className='min-h-10vh w-screen absolute bottom-0.5'>
          <Flex className=' bg-blueCardBg min-h-10vh container m-auto justify-between my-6'>
            <div className='flex-col'>
              <h1 className='text-xl font-medium'>Boost your revenue,</h1>
              <p>
                gain insight that help you grow and scale your business faster
              </p>
            </div>
            <div className=' flex space-x-7'>
              <Card className='bg-blue-900'>
                <h1 className='  text-4xl font-extrabold'>100+</h1>
                <p>Business World wide</p>
              </Card>
              <Card className='bg-blue-900'>
                <h1 className='  text-4xl font-extrabold'>10k+</h1>
                <p>Trusted Customers</p>
              </Card>
            </div>
          </Flex>
        </Card>
      </div>
    </>
  )
}

export default SeamlessBusiness
