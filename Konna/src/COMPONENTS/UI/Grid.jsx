import React from 'react'

const Grid = (props) => {
  const { children, className } = props

  const cardClasses = `items-center sm:grid-cols-2 my-9 gap-2  md: grid grid-cols-4 lg:grid-cols-4 xl:grid grid-cols-4 gap-3 ${className}`

  return <div className={cardClasses}>{children}</div>
}

export default Grid
