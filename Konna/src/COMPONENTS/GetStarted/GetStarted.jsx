import React from 'react'
import Grid from '../UI/Grid'
import Card from '../UI/Cards'
import Flex from '../UI/Flex'
import Frame from '../ASSETS/Frame.svg'
import Capa from '../ASSETS/Capa_1.svg'
import Layer from '../ASSETS/Layer_1.svg'

const GetStarted = () => {
  return (
    <div className='container mx-auto'>
      <div className='container mx-auto ml-3/20 mt-1/10 font-extrabold'>
        <p className='text-sm ml-2/5'>How it works</p>
        <h1 className='text-2xl ml-8/25 mt-11'>HOW TO GET STARTED</h1>
      </div>
      <Grid className=' min-h-1/2 text-center'>
        <Card className='bg-gray-800 w-4/5'>
          <Flex className='space-x-6 mb-3'>
            <div className='w-3/10'>
              <img src={Frame} alt='' />
            </div>
            <Card className='text-sm translate-x-5'>
              <h1 className=''>step 1</h1>
            </Card>
          </Flex>
          <h1 className='text-sm font-bold mx-auto pl-3'>
            Create a Konna Account
          </h1>
          <p className='text-xxs text-gray-500  my-3'>
            Create a Konna account as a new user or login as a registered user
          </p>
        </Card>
        <Card className='bg-gray-800 w-4/5'>
          <Flex className='space-x-6  mb-3'>
            <div className='w-3/10'>
              <img src={Capa} alt='' />
            </div>
            <Card className='text-sm translate-x-5'>
              <h1 className=''>step 2</h1>
            </Card>
          </Flex>
          <h1 className='text-sm font-bold mx-auto pl-3'>
            Add your Product to inventory
          </h1>
          <p className='text-xxs text-gray-500 my-3'>
            Add your product to inventory, with product photos, prices quantties
            spcification
          </p>
        </Card>
        <Card className='bg-gray-800 w-4/5'>
          <Flex className='space-x-6 mb-3 '>
            <div className='w-3/10'>
              <img src={Layer} alt='' />
            </div>
            <Card className='text-sm translate-x-5'>
              <h1 className=''>step 3</h1>
            </Card>
          </Flex>
          <h1 className='text-sm font-bold mx-auto pl-3'>Create your Store</h1>
          <p className='text-xxs text-gray-500 my-3'>
            Setup and customize your shop with logos, and banners, then add
            products from inventory
          </p>
        </Card>
        <Card className='bg-gray-800 w-4/5'>
          <Flex className='space-x-6  mb-3'>
            <div className='w-3/10'>
              <img src={Frame} alt='' />
            </div>
            <Card className='text-sm translate-x-5'>
              <h1 className=''>step 4</h1>
            </Card>
          </Flex>
          <h1 className='text-sm font-bold mx-auto pl-3'>Start Selling</h1>
          <p className='text-xxs text-gray-500 my-3'>
            Share Your Store Link and start sellingShare Your Store Link and
            start sellingShare Your Store Link and start selling
          </p>
        </Card>
      </Grid>
    </div>
  )
}

export default GetStarted
