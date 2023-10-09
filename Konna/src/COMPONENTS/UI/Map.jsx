import React, { useState } from 'react'

export const Map = (props) => {
  const [isOnMobile, setIsOnMobile] = useState(true)
  return (
    <ul className='md:flex items-center space-x-6 grow-0 mr-10'>
      {props.list.map((item, index) => {
        const { name, icons, icon, title, desc } = item || {}
        return (
          <li key={index}>
            <a href={`#${name.toLowerCase()}`} className='flex'>
              {name}{' '}
              <span
                className='mt-0.5'
                onClick={(index) => {
                  setIsOnMobile(!isOnMobile)
                }}
              >
                {isOnMobile ? icons : icon}
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export const MapSideNav = (props) => {
  return (
    <ul className='md:flex flex-col items-center justify-between   w-full mx-auto mt-3'>
      {props.list.map((item, index) => {
        const { name, icons, title, desc } = item || {}
        return (
          <li key={index}>
            <a
              href={`#${name.toLowerCase()}`}
              className='flex py-2 border-b border-slate-700 mx-auto mb-5'
            >
              {name} <span className='mt-0.5'>{icons}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Map
