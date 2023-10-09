import React from 'react'

const IconComponents = (props) => {
  return (
    <div className=' container  flex text-center  xs:justify-center space-x-1 border border-gray-800 rounded-full bg:w-full items-center'>
      <div className=' text-3xl '>{props.icon}</div>

      <div className='text-left'>
        <h4 className='text-xxs font-thin'>{props.h4}</h4>
        <h1 className='xs:text-xxs xl:text-xs font-semibold '>{props.h1}</h1>
      </div>
    </div>
  )
}

export default IconComponents
