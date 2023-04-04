import ButtonModel from '@/Models/ButtonModel'
import Link from 'next/link'
import React from 'react'

const Button:React.FC<{model: ButtonModel}> = ({model}) => {
  return (
    <Link href={model.link}><div className={model.style}>{model.text}</div></Link>
  )
}

export default Button