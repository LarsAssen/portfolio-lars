import ButtonModel from '@/Models/ButtonModel'
import Link from 'next/link'
import React from 'react'
import { ComponentType } from "@/Enums/componentType"

const Button:React.FC<{model: ButtonModel}> = ({model}) => {
  var style = ""
  if(model.type === ComponentType.Primary){
    style = "bg-primary text-white font-bold py-2 px-4 rounded cursor-not-allowed"
  }else if(model.type === ComponentType.Secondary){
    style = "bg-secondary text-white font-bold py-2 px-4 rounded cursor-not-allowed"
  }

  return (
    <Link href={model.link}><div className={style}>{model.text}</div></Link>
  )
}

export default Button