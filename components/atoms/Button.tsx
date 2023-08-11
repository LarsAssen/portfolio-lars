import ButtonModel from '@/Models/ButtonModel'
import React from 'react'
import { ComponentType } from "@/Enums/componentType"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Button:React.FC<{model: ButtonModel}> = ({model}) => {
  var style = ""
  if(model.type === ComponentType.Primary){
    style = "bg-primary text-white py-2 mt-6 mr-2 px-6 rounded font-bold border-2 border-primary"
  }else if(model.type === ComponentType.Secondary){
    style = "text-primary mr-2 border-2 mt-6 border-primary font-bold py-2 px-6 rounded"
  }

  return (
    <AnchorLink href={model.link} className={style}>{model.text}</AnchorLink>
  )
}

export default Button