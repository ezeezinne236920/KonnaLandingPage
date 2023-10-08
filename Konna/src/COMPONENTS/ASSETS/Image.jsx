

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
    <>
      <img src={Googleps} alt='Google Playstore' />
    </>
  )
}
export const AssetPicture = () => {
  return (
    <div>
      <img src={LandingPageAsset} alt='Asset' />
    </div>
  )
}
