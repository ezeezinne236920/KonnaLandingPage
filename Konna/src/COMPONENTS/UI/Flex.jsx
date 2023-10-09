import React from 'react'

const Flex = (props) => {
  const { children, className } = props

  const cardClasses = `flex flex-col  md:flex-row  ${className}`

  return <div className={cardClasses}>{children}</div>
}

export default Flex
