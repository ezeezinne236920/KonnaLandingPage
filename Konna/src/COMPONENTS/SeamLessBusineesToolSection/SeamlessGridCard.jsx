import React from 'react'
import Card from '../UI/Cards'
import Grid from '../UI/Grid'
import Flex from '../UI/Flex'
import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
import { AiOutlineApple, AiOutlineWindows } from 'react-icons/ai'
import IconComponents from './IconComponents'
const SeamlessGridCard = () => {
  return (
    <div className='container mx-auto items-center'>
      <Grid className='lg:grid-cols-4 gap-2 xs:gap-4 text-center items-center '>
        <div
          className='flex text-center items-center xs:justify-center space-x-1 border border-gray-800 rounded-full bg:w-full
        '
        >
          <div className='w-1/10 text-xl'>
            <GooglePlayStoreIcon />
          </div>

          <div className='text-left'>
            <h4 className='text-xxs font-thin'>Get it on</h4>
            <h1 className='xs:text-xxs xl:text-xs font-semibold '>
              Google Play store
            </h1>
          </div>
        </div>

        <IconComponents
          icon={<AiOutlineApple />}
          h4='Download on the'
          h1='App Store'
        />
        <IconComponents
          icon={<AiOutlineApple />}
          h4='Get on'
          h1='Mac App Store'
        />
        <IconComponents
          icon={<AiOutlineWindows />}
          h4='Get it on'
          h1='Windows'
        />
      </Grid>
    </div>
  )
}

export default SeamlessGridCard
