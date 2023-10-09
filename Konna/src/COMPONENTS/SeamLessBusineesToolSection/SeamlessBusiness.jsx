import React, { useState } from 'react'
import Card from '../UI/Cards'
import Flex from '../UI/Flex'
import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
import SeamlessGridCard from './SeamlessGridCard'

const SeamlessBusiness = ({ isOnMobile }) => {
  // const [isOnMobile, setIsOnMobile] = useState({ isOnMobile })
  return (
    <>
      <div className='flex-col w-3/5 container mx-auto   mt-10  items-center min-h-[40%]'>
        <div
          className={`${
            isOnMobile ? '' : ' '
          } sm:ml-0  container mx-auto text-center`}
        >
          <h1 className='sm:text-base md:text-5xl '>
            A Seamless Business, Management Tool
            {/* <div className='sm:ml-6 lg:ml-12'>Management Tool</div> */}
          </h1>
          <p className='sm:ml-6 text-xs  text-gray-500 font-medium my-7'>
            The most reliable alternative to manage stock and track sales, Take
            <div className=''>
              your business Global and let the world know your trade
            </div>
          </p>
          <Card className='px-px container mx-auto text-center  my-1  xs:w-3/5 font-medium text-xxs'>
            Get Started
          </Card>
        </div>

        <SeamlessGridCard />
      </div>
      <div className='flex-col overflow-hidden scroll-hidden relative '>
        <div className='  md:w-4/5 container mx-auto mb-[-3rem] '>
          <AssetPicture />
        </div>
        4
      </div>
      <Card className='rounded-none min-h-[80%] w-full sm:mx-0 xs:p-0 justify-center p-8 md:mx-15 pr-3'>
        <Flex className='justify-between mx-auto  text-center p-5'>
          <div className=' flex-col my-3 justify-center md:ml-8 xs:ml-0'>
            <h1 className=' last:xs:text-xl md:text-3xl font-exrabold pb-3'>
              Boost your revenue,
            </h1>
            <p className='  xs:text-xxs sm:text-xxs '>
              gain insight that help you grow and scale your business faster
            </p>
          </div>
          <div className=' flex  space-x-7 text-center lg:mr-5 xs:ml-11 md:ml-5'>
            <Card className='shadow-xl  '>
              <h1 className=' font-extrabold xs:text-xl md:text-3xl'>100+</h1>
              <p className='text-xxs'>Business World wide</p>
            </Card>
            <Card className='shadow-xl '>
              <h1 className=' font-extrabold xs:text-xl md:text-3xl'>10+</h1>
              <p className='text-xxs'>Trusted Customers</p>
            </Card>
          </div>
        </Flex>
      </Card>
    </>
  )
}

export default SeamlessBusiness
