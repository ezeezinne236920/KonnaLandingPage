import React from 'react'

const Card = (props) => {
  const { children, className } = props
 
  const cardClasses = `bg-blueCardBg rounded p-2 ${className}`

  return <div className={cardClasses}>{children}</div>
}

export default Card
