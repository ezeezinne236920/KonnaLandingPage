

import React from 'react'
import Logo from './LogoImg.svg'
import Googleps from './Googleps.png'
import LandingPageAsset from './LandingPageAsset.svg'

export const Image = () => {
  return (
     
      <img src={Logo} alt='Logo' />
     
  )
}

export const GooglePlayStoreIcon = () => {
  return (
    <div className='xs:hidden sm:block w-1/10 ml-4  lg:w-1/5 ml-px  xl:3/5'>
      <img src={Googleps} alt='Google Playstore' />
    </div>
  )
}
export const AssetPicture = () => {
  return (
    <div>
      <img src={LandingPageAsset} alt='Asset' />
    </div>
  )
}
