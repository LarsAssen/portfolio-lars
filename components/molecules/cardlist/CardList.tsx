import React from 'react'
import Card from '../card/Card'
import PortfolioItem from '@/Models/PortfolioItemModel'

const CardList:React.FC<{portfolioItems : PortfolioItem[]}> = ({portfolioItems}) => {
  

  
  return(
    <div  id='portfolioItems' className="">
      {portfolioItems.map((item, index) => (
         <Card index={index} {...item} key={item.title} portfolioItem={item}  />
      ))}
    </div>
  )
}

export default CardList