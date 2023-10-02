import React from 'react'

export const Map = (props) => {
  return (
    <ul className='md:flex items-center space-x-9'>
      {props.list.map((item, index) => {
        const { name, icons, title, desc } = item || {}
        return (
          <li key={index}>
            <a href={`#${name.toLowerCase()}`} className='flex'>
              {name} <span className='mt-0.5'>{icons}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export const MapSideNav = (props) => {
  return (
    <ul className='md:flex flex-col items-center justify-between border w-full rounded-xl mx-auto mt-3'>
      {props.list.map((item, index) => {
        const { name, icons, title, desc } = item || {}
        return (
          <li key={index}>
            <a
              href={`#${name.toLowerCase()}`}
              className='flex py-2 border-b mx-auto'
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
