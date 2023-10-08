import React from 'react'

const Grid = (props) => {
  const { children, className } = props

  const cardClasses = `items-center grid gap-4 sm:grid-cols-1 my-9 md:grid-cols-2 ${className}`

  return <div className={cardClasses}>{children}</div>
}

export default Grid
