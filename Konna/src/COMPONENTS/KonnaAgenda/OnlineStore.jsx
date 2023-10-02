import React from 'react'
import ComponentImage from '../ASSETS/Component 1.svg'
import Card from '../UI/Cards'
import Flex from '../UI/Flex'

const OnlineStore = () => {
  return (
    <>
      <Flex className='container mx-auto mt-12 justify-between'>
        <Card className=' flex-grow-0 rotate-360'>
          <div className='translate-x-2 translate-y-4  '>
            <img src={ComponentImage} alt='' />
          </div>
        </Card>
        <div className=' flex-grow-1 flex flex-col space-y-9-items-center ml-1/10'>
          <h2 className='text-sm text-blue-500 pb-6'>ONLINE STORE</h2>
          <h2 className='text-xl font-bold'>
            Your Own ONLINE STORE is Just a{' '}
            <span className='text-blue-500  '>Few Clicks Away</span>
          </h2>
          <p className='text-gray-500 text-xs mt-6 mb-10'>
            Create a customised online store that helps you reach out to
            customers well without borders, accept payments in various forms and
            grow your business{' '}
          </p>
          <Card className='text-blue-500  text-xs font-medium bg-gray-700 pb-9 w-3/5 h-px pl-1/5 pt-3'>
            Create Online Shop
          </Card>
        </div>
      </Flex>
    </>
  )
}

export default OnlineStore
