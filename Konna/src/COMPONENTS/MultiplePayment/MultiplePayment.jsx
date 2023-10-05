import React from 'react'
import GroupImage from '../ASSETS/Group 36454.svg'
import Card from '../UI/Cards'
import Flex from '../UI/Flex'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const MultiplePayment = () => {
  return (
    <>
      <div className='mx-auto bg-gray-800 w-screen pb-9  overflow-hidden my-1/10'>
        <Flex className='container mx-auto mt-12 justify-between '>
          <div className='container mx-auto my-4 '>
            <img src={GroupImage} alt='' />
          </div>
          <div className=' flex-grow-1 flex flex-col space-y-9-items-center ml-1/10 xs:mt-7 lg:mt-2'>
            <h2 className='text-sm text-blue-500 pb-6'>
              Multiple Payment Method
            </h2>
            <h2 className='sm:text-base md:text-xl font-bold'>
              Accept Multiple Payment
              <span className='text-blue-500  '>Options</span>
            </h2>
            <p className='text-gray-400 text-xs mt-6 mb-10'>
              Receive payments with various payment options convenient for your
              customers. In addition, we support all web3 payments and
              split-payment option
            </p>
            <Flex className='sm:flex justify-evenly item-center lg:space-x-10'>
              <div className='flex'>
                <span className='xs:hidden sm:block text-blue-500 '>
                  <BsFillCheckCircleFill />
                </span>
                <div className='flex-col'>
                  <h1 className='  ml-5 sm:text-sm  '>Crypto Payment</h1>
                  <p className='mb-5 text-gray-700 text-xs'>
                    Accept payment in stablecoins via konnadex Payment Gateway
                  </p>
                </div>
              </div>
              <div className='flex'>
                <span className='xs:hidden sm:block text-blue-500 '>
                  <BsFillCheckCircleFill />
                </span>
                <div className='flex-col'>
                  <h1 className='ml-5 sm:text-sm  '>Bank Transfer</h1>
                  <p className='mb-5 text-gray-700 text-xs'>
                    Accept transfers to your accountt
                  </p>
                </div>
              </div>
            </Flex>
            <Flex className='sm:flex justify-evenly item-center lg:space-x-10'>
              <div className='flex'>
                <span className='xs:hidden sm:block text-blue-500 '>
                  <BsFillCheckCircleFill />
                </span>
                <div className='flex-col'>
                  <h1 className='  ml-5 sm:text-sm  '>Card Payment</h1>
                  <p className='mb-5 text-gray-700 text-xs'>
                    Accept payment in stablecoins  
                  </p>
                </div>
              </div>
              <div className='flex'>
                <span className='xs:hidden sm:block text-blue-500 '>
                  <BsFillCheckCircleFill />
                </span>
                <div className='flex-col'>
                  <h1 className='  ml-5 sm:text-sm  '>Cash Payment</h1>
                  <p className='mb-5 text-gray-700 text-xs'>
                    Accept transfers to your accountt
                  </p>
                </div>
              </div>
            </Flex>
          </div>
        </Flex>
      </div>
    </>
  )
}

export default MultiplePayment
