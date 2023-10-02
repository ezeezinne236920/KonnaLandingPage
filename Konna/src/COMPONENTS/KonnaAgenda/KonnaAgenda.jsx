import React from 'react'
import Flex from '../UI/Flex'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import OnlineStore from './OnlineStore'
import KonnaOfflineStore from './KonnaOfflineStore'
const KonnaAgenda = () => {
  return (
    <>
      <div className='container mx-auto ml-1/3 mt-1/5 font-extrabold'>
        <h1 className='text-2xl mb-1/10'>What you can do on Konna</h1>
      </div>
      <div className='container mx-auto '>
        <Flex className=' space-x-7 sm:flex flex'>
          <span className='bg-transparent text-blue-500 relative bottom-9'>
            <BsFillCheckCircleFill />
          </span>
          <div className=''>
            <h1 className='mb-6'>Connect to buyers and suppliers</h1>
            <p className='mb-5 text-gray-700 text-xs'>
              Reach out to thousands of customers every day and manage your
              suppliers in a hassle-free way
            </p>
          </div>
          <span className='bg-transparent text-blue-500 relative bottom-9'>
            <BsFillCheckCircleFill />
          </span>
          <div className=''>
            <h1 className='mb-6'>Connect to buyers and suppliers</h1>
            <p className='mb-5 text-gray-700 text-xs'>
              Reach out to thousands of customers every day and manage your
              suppliers in a hassle-free way
            </p>
          </div>
        </Flex>
        <Flex className=' space-x-7'>
          <span className='bg-transparent text-blue-500 relative bottom-9'>
            <BsFillCheckCircleFill />
          </span>
          <div className=''>
            <h1 className='mb-6'>Connect to buyers and suppliers</h1>
            <p className='mb-5 text-gray-700 text-xs'>
              Reach out to thousands of customers every day and manage your
              suppliers in a hassle-free way
            </p>
          </div>
          <span className='bg-transparent text-blue-500 relative bottom-10'>
            <BsFillCheckCircleFill />
          </span>
          <div className=''>
            <h1 className='mb-6'>Connect to buyers and suppliers</h1>
            <p className='mb-5 text-gray-700 text-xs'>
              Reach out to thousands of customers every day and manage your
              suppliers in a hassle-free way
            </p>
          </div>
        </Flex>
        <Flex className=' space-x-7'>
          <span className='bg-transparent text-blue-500 relative bottom-9'>
            <BsFillCheckCircleFill />
          </span>
          <div className=''>
            <h1 className='mb-6'>Connect to buyers and suppliers</h1>
            <p className='mb-5 text-gray-700 text-xs'>
              Reach out to thousands of customers every day and manage your
              suppliers in a hassle-free way
            </p>
          </div>
          <span className='bg-transparent text-blue-500 relative bottom-9'>
            <BsFillCheckCircleFill />
          </span>
          <div className=''>
            <h1 className='mb-6'>Connect to buyers and suppliers</h1>
            <p className='mb-5 text-gray-700 text-xs'>
              Reach out to thousands of customers every day and manage your
              suppliers in a hassle-free way
            </p>
          </div>
        </Flex>
        <Flex className=' space-x-7'>
          <span className='bg-transparent text-blue-500 relative bottom-10'>
            <BsFillCheckCircleFill />
          </span>
          <div className=''>
            <h1 className='mb-6'>Connect to buyers and suppliers</h1>
            <p className='mb-7 text-gray-700 text-xs'>
              Reach out to thousands of customers every day and manage your
              suppliers in a hassle-free way
            </p>
          </div>
          <span className='bg-transparent text-blue-500 relative bottom-10'>
            <BsFillCheckCircleFill />
          </span>
          <div className=''>
            <h1 className='mb-6'>Connect to buyers and suppliers</h1>
            <p className='mb-7 text-gray-700 text-xs'>
              Reach out to thousands of customers every day and manage your
              suppliers in a hassle-free way
            </p>
          </div>
        </Flex>
      </div>
      <OnlineStore />
      <KonnaOfflineStore/>

      {/* <OfflineStore/> */}
    </>
  )
}

export default KonnaAgenda
