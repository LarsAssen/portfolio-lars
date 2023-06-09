import ButtonModel from '@/Models/ButtonModel'
import Link from 'next/link'
import React from 'react'
import { ComponentType } from "@/Enums/componentType"

const Button:React.FC<{model: ButtonModel}> = ({model}) => {
  var style = ""
  if(model.type === ComponentType.Primary){
    style = "bg-primary text-white py-2 px-6 rounded font-bold cursor-not-allowed border-2 border-primary"
  }else if(model.type === ComponentType.Secondary){
    style = "text-primary border-2 border-primary font-bold py-2 px-6 rounded cursor-not-allowed"
  }

  return (
    <Link href={model.link}><button className={style}>{model.text}</button></Link>
  )
}

export default Button