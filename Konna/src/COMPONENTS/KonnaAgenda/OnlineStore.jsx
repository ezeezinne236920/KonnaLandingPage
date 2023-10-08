import React from 'react'
import ComponentImage from '../ASSETS/Component 1.svg'
import Card from '../UI/Cards'
import Flex from '../UI/Flex'

const OnlineStore = () => {
  return (
    <>
      <Flex className='container mx-auto mt-12  items-center justify-evenly md:space-x-12 '>
        <div className='bg-blueCardBg rounded-t container mx-auto flex-grow-0 mb-3 sm:w-3/5 md:w-full '>
          <div className='sm:translate-y-4 md:translate-y-7/20 lg:translate-y-1/10'>
            <img src={ComponentImage} alt='' />
          </div>
        </div>
        <div className=' flex-grow-1 flex flex-col items-center xs:mt-7 lg:mt-2'>
          <h2 className='text-sm text-blue-500 pb-6'>ONLINE STORE</h2>
          <h2 className='sm:text-base md:text-xl font-bold'>
            Your Own ONLINE STORE is Just a{' '}
            <span className='text-blue-500  '>Few Clicks Away</span>
          </h2>
          <p className='text-gray-500 text-xs mt-6 mb-10'>
            Create a customised online store that helps you reach out to
            customers well without borders, accept payments in various forms and
            grow your business{' '}
          </p>
          <Card className=' text-blue-500  text-xs font-medium bg-gray-700 text-center  w-3/5 mx-px pt-3 bg-transparent border '>
            Start Selling Offline
          </Card>
        </div>
      </Flex>
    </>
  )
}

export default OnlineStore
