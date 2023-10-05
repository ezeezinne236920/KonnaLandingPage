import React, { useState } from 'react'
import Card from '../UI/Cards'
import Flex from '../UI/Flex'
import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
import SeamlessGridCard from './SeamlessGridCard'

const SeamlessBusiness = ({ isOnMobile }) => {
  // const [isOnMobile, setIsOnMobile] = useState({ isOnMobile })
  return (
    <>
      <div className=' w-4/5 mt-10 mx-auto  flex-col items-center md:ml-0'>
        <div
          className={`${
            isOnMobile ? '' : 'mt-1/2'
          } sm:ml-0 md:ml-3/10  mx-auto lg: ml-1`}
        >
          <h1 className='sm:text-xl ml-1/4 md:text-3xl ml-12 lg:text-3xl mx-auto font-bold h-1/4'>
            A Seamless Business, Management Tool
            {/* <div className='sm:ml-6 lg:ml-12'>Management Tool</div> */}
          </h1>
          <p className='sm:ml-6 text-xs lg:ml-16 text-gray-400 font-medium pl-4 my-6'>
            The most reliable alternative to manage stock and track sales, Take
            <div className='sm:ml-1  md:ml-3  lg:ml-12'>
              your business Global and let the world know your trade
            </div>
          </p>
          <Card className='px-px container mx-auto text-center  my-1  xs:w-2/5 ml-1/5 font-medium text-xxs md:w-2/5 ml-3/10'>
            Get Started
          </Card>
          
        </div>

        <SeamlessGridCard />
      </div>
      <div className='flex-col overflow-x-hidden scroll-mx-0 relative'>
        <div className=' w-4/5 md:w-3/5 container mx-auto'>
          <AssetPicture />
        </div>
      </div>{' '}
      <Card className='h-full bottom-0.5 '>
        <Flex className=' justify-between min-h-[50%] bottom-0.5 translate-x-7 container mx-auto'>
          <div className='flex-col my-3 '>
            <h1 className='text-xl  xs:text-base lg:text-2xl font-medium'>
              Boost your revenue,
            </h1>
            <p className='  xs:text-xxs sm:text-xxs  md:text-sm'>
              gain insight that help you grow and scale your business faster
            </p>
          </div>
          <div className=' flex space-x-7'>
            <Card className='bg-blue-900'>
              <h1 className=' font-extrabold xs:text-xl md:text-3xl'>100+</h1>
              <p>Business World wide</p>
            </Card>
            <Card className=''>
              <h1 className=' font-extrabold xs:text-xl md:text-3xl'>10+</h1>
              <p>Trusted Customers</p>
            </Card>
          </div>
        </Flex>
      </Card>
    </>
  )
}

export default SeamlessBusiness
