import React from 'react'
import GroupImage from '../ASSETS/Group 36454.svg'
import Card from '../UI/Cards'
import Flex from '../UI/Flex'
import Grid from '../UI/Grid'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const MultiplePayment = () => {
  return (
    <>
      <div className='mx-auto bg-gray-800 w-screen pb-9 px-4 overflow-hidden my-1/10 '>
        <Flex className='container mx-auto mt-12 justify-between items-center md:space-x-11'>
          <div className='container mx-auto my-4 '>
            <img src={GroupImage} alt='' />
          </div>
          <div className=' flex-grow-1 flex flex-col lg:space-y-9 items-center xs:mt-7 lg:mt-2'>
            <h2 className='text-sm text-blue-500 pb-6'>
              Multiple Payment Method
            </h2>
            <h2 className='sm:text-base md:text-xl font-bold'>
              Accept Multiple Payment
              <span className='text-blue-500  '>Options</span>
            </h2>
            <p className='text-gray-400 text-xs mt-0'>
              Receive payments with various payment options convenient for your
              customers. In addition, we support all web3 payments and
              split-payment option
            </p>
            <Grid className='item-center gap-4'>
              <div className='flex'>
                <span className=' sm:block text-blue-500 '>
                  <BsFillCheckCircleFill />
                </span>
                <div className='flex-col'>
                  <h1 className='  ml-5 sm:text-sm  '>Crypto Payment</h1>
                  <p className='text-gray-700 text-xs'>
                    Accept payment in stablecoins via konnadex Payment Gateway
                  </p>
                </div>
              </div>
              <div className='flex'>
                <span className='sm:block text-blue-500 '>
                  <BsFillCheckCircleFill />
                </span>
                <div className='flex-col'>
                  <h1 className='ml-5 sm:text-sm  '>Bank Transfer</h1>
                  <p className=' text-gray-700 text-xs'>
                    Accept transfers to your accountt
                  </p>
                </div>
              </div>
            {/* </Grid> */}
            {/* <Grid className='item-center gap-4'> */}
              <div className='flex'>
                <span className='sm:block text-blue-500 '>
                  <BsFillCheckCircleFill />
                </span>
                <div className='flex-col'>
                  <h1 className='ml-5 sm:text-sm  '>Card Payment</h1>
                  <p className=' text-gray-700 text-xs'>
                    Accept payment in stablecoins
                  </p>
                </div>
              </div>
              <div className='flex'>
                <span className='sm:block text-blue-500 '>
                  <BsFillCheckCircleFill />
                </span>
                <div className='flex-col'>
                  <h1 className='ml-5 sm:text-sm'>Cash Payment</h1>
                  <p className=' text-gray-700 text-xs'>
                    Accept transfers to your accountt
                  </p>
                </div>
              </div>
            </Grid>
          </div>
        </Flex>
      </div>
    </>
  )
}

export default MultiplePayment
