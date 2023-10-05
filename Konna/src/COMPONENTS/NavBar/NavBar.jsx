import React, { useState } from 'react'
import { Image, GooglePlayStoreIcon, AssetPicture } from '../ASSETS/Image'
import { FirstListData, FirstList } from './FirstList'
import SecondList from './SecondList'
import { Map, MapSideNav } from '../UI/Map'
import { AiOutlineMenu, AiOutlineScissor } from 'react-icons/ai'
import SeamlessBusiness from '../SeamLessBusineesToolSection/SeamlessBusiness'

const NavBar = () => {
  const [isOnMobile, setIsOnMobile] = useState(true)
  return (
    <>
      <nav className='relative min-height-1/2 container mx-auto'>
        {/* flex container */}
        <div className='relative flex items-center justify-between pt-6 pb-4'>
          <div className='grow-1 xs:w-1/10 translate-x-12 '>
            <Image />
          </div>
          <FirstList />
          <div className='lg:hidden'>
            {isOnMobile ? (
              <AiOutlineMenu onClick={() => setIsOnMobile(!isOnMobile)} />
            ) : (
              <AiOutlineScissor
                onClick={() => [
                  // setMenutoggle(!menutoggle),
                  setIsOnMobile(!isOnMobile),
                ]}
              />
            )}
          </div>
          {isOnMobile ? (
            ''
          ) : (
            <div className='absolute top-8  flex flex-col items-center py-3 mt-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md lg:hidden '>
              <MapSideNav className=' ' list={FirstListData} />
              {/* <a href=''>Features</a>
            <a href=''>Supported biz</a>
            <a href=''>Price</a>
            <a href=''>About</a> */}
            </div>
          )}

          <SecondList />
        </div>
      </nav>
      <SeamlessBusiness isOnMobile={isOnMobile} />
    </>
  )
}

export default NavBar
