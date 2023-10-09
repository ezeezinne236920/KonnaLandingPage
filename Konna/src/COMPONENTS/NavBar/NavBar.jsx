import React, { useState } from 'react'
// import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
import { FirstListData, FirstList } from './FirstList'
import SecondList from './SecondList'
import { Map, MapSideNav } from '../UI/Map'
import { AiOutlineMenu, AiOutlineScissor } from 'react-icons/ai'
import SeamlessBusiness from '../SeamLessBusineesToolSection/SeamlessBusiness'
import {Image,GooglePlayStoreIcon, AssetPicture} from '../ASSETS/Image'
// import styles from './NavBar.module.css'

const NavBar = () => {
  const [isOnMobile, setIsOnMobile] = useState(true)
  return (
    <>
      <nav className='relative min-h-1/2 container mx-auto py-4'>
        <div className=' flex items-center  xs:mx-4  justify-between '>
          <div className='xs:w-1/10 md:w-2/25 grow-0'>
            <Image />
          </div>
          <FirstList />
          <div className='lg:hidden'>
            {isOnMobile ? (
              <AiOutlineMenu onClick={() => setIsOnMobile(!isOnMobile)} />
            ) : (
              <AiOutlineScissor onClick={() => [setIsOnMobile(!isOnMobile)]} />
            )}
          </div>

          <SecondList />
        </div>
        {isOnMobile ? (
          ''
        ) : (
          <div className='absolute  bg-blueBgColor flex flex-col items-center self-end top-8  py-3  mt-6 space-y-6 font-bold h-[400px] w-auto sm:self-center left-6 right-6 drop-shadow-md lg:hidden'>
            <MapSideNav className=' ' list={FirstListData} />
          </div>
        )}
      </nav>
      <SeamlessBusiness isOnMobile={isOnMobile} />
    </>
  )
}

export default NavBar
