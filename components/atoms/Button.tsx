import ButtonType from '@/Models/ButtonType'
import React from 'react'

const Button:React.FC<{type: ButtonType, text: string, link: string }> = ({type, text, link}) => {
  return (
    <div>{text}</div>
  )
}

export default Button