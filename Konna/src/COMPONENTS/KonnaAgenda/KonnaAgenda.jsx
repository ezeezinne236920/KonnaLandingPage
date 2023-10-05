import React from 'react'
import Flex from '../UI/Flex'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import OnlineStore from './OnlineStore'
import KonnaOfflineStore from './KonnaOfflineStore'
const KonnaAgenda = () => {
  return (
    <>
      <div className=' container w-3/5 mx-auto  mt-1/5 font-extrabold sm:mt-1/10'>
        <h1 className='sm:text-xl md:text-2xl mb-1/10  '>
          What you can do on Konna
        </h1>
      </div>
      <div className='container mx-auto '>
        <Flex className='sm:flex justify-evenly item-center lg:space-x-10'>
          <div className='flex'>
            <span className='xs:hidden sm:block text-blue-500 '>
              <BsFillCheckCircleFill />
            </span>
            <div className='flex-col'>
              <h1 className='mb-6 ml-5 sm:text-sm md:text-base'>
                Connect to buyers and suppliers
              </h1>
              <p className='mb-5 text-gray-700 text-xs'>
                Reach out to thousands of 
                customers every day and manage your
                suppliers in a hassle-free way
              </p>
            </div>
          </div>
          <div className='flex justify-evenly'>
            <span className='xs:hidden sm:block text-blue-500 '>
              <BsFillCheckCircleFill />
            </span>
            <div className='flex-col'>
              <h1 className='mb-6 ml-5 sm:text-sm md:text-base'>
                Monitor your staff's performance
              </h1>
              <p className='mb-5 text-gray-700 text-xs'>
                Reach out to thousands of customers every day and manage your
                suppliers in a hassle-free way
              </p>
            </div>
          </div>
        </Flex>
        <Flex className='sm:flex justify-between item-center lg:space-x-10'>
          <div className='flex '>
            <span className='xs:hidden sm:block text-blue-500 '>
              <BsFillCheckCircleFill />
            </span>
            <div className='flex-col'>
              <h1 className='mb-6 ml-5'>Get a personalized website</h1>
              <p className='mb-5 text-gray-700 text-xs'>
                Reach out to thousands of customers every day and manage your
                suppliers in a hassle-free way
              </p>
            </div>
          </div>
          <div className='flex '>
            <span className='xs:hidden sm:block text-blue-500 '>
              <BsFillCheckCircleFill />
            </span>
            <div className='flex-col'>
              <h1 className='mb-6 ml-5'>24/7 customer support</h1>
              <p className='mb-5 text-gray-700 text-xs'>
                Reach out to thousands of customers every day and manage your
                suppliers in a hassle-free way
              </p>
            </div>
          </div>
        </Flex>
        <Flex className='sm:flex justify-between item-center lg:space-x-10'>
          <div className='flex '>
            <span className='xs:hidden sm:block text-blue-500 '>
              <BsFillCheckCircleFill />
            </span>
            <div className='flex-col'>
              <h1 className='mb-6 ml-5'>Manage stores</h1>
              <p className='mb-5 text-gray-700 text-xs'>
                Reach out to thousands of customers every day and manage your
                suppliers in a hassle-free way
              </p>
            </div>
          </div>
          <div className='flex '>
            <span className='xs:hidden sm:block text-blue-500 '>
              <BsFillCheckCircleFill />
            </span>
            <div className='flex-col'>
              <h1 className='mb-6 ml-5'>Safe Cost</h1>
              <p className='mb-5 text-gray-700 text-xs'>
                Reach out to thousands of customers every day and manage your
                suppliers in a hassle-free way
              </p>
            </div>
          </div>
        </Flex>
        <Flex className='sm:flex justify-between item-center lg:space-x-10'>
          <div className='flex '>
            <span className='xs:hidden sm:block text-blue-500 '>
              <BsFillCheckCircleFill />
            </span>
            <div className='flex-col'>
              <h1 className='mb-6 ml-5'>Create Multiple Branches</h1>
              <p className='mb-5 text-gray-700 text-xs'>
                Reach out to thousands of customers every day and manage your
                suppliers in a hassle-free way
              </p>
            </div>
          </div>
          <div className='flex '>
            <span className='xs:hidden sm:block text-blue-500 '>
              <BsFillCheckCircleFill />
            </span>
            <div className='flex-col'>
              <h1 className='mb-6 ml-5'>Analytics and Reporting</h1>
              <p className='mb-5 text-gray-700 text-xs'>
                Reach out to thousands of customers every day and manage your
                suppliers in a hassle-free way
              </p>
            </div>
          </div>
        </Flex>
      </div>
      <OnlineStore />
      <KonnaOfflineStore />

      {/* <OfflineStore/> */}
    </>
  )
}

export default KonnaAgenda
