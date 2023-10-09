import React from 'react'
import GroupImage from '../ASSETS/Clip path group.svg'
import Card from '../UI/Cards'
import Flex from '../UI/Flex'

const KonnaOfflineStore = () => {
  return (
    <>
      <div className='mx-auto bg-gray-800 w-screen pb-9  px-5 overflow-hidden my-1/10'>
        <Flex className='container mx-auto mt-12 justify-between items-center md:space-x-12 '>
          <div className=' flex-grow-1 flex flex-col space-y-9 items-center'>
            <h2 className='text-sm text-yellow-500 pb-6'>OFFLINE SHOP</h2>
            <h2 className='text-xl font-bold  '>
              Do you Know you Can{' '}
              <span className='text-yellow-500  '>Sell Offline</span>
            </h2>
            <p className='text-gray-500 text-xs mt-6 mb-10   '>
              Your business can still sell even when your connection has a
              downtime, or you have no internet at all. A new Offline interface
              will allow your:<p>1. Sell offline from all your stores</p>
              <p>2.Sync later when you find a connection</p>
            </p>
            <Card className=' text-yellow-500  text-xs font-medium border-yellow-500 text-center  w-3/5 mx-px pt-3 bg-transparent border '>
              Start Selling Offline
            </Card>
          </div>

          <div className='container mx-auto my-4 '>
            <img src={GroupImage} alt='' />
          </div>
        </Flex>
      </div>
    </>
  )
}

export default KonnaOfflineStore
