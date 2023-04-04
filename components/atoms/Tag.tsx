import React from 'react'

const Tag:React.FC<{text: string}> = ({text}) => {
  return (
    <div>{text}</div>
  )
}

export default Tag