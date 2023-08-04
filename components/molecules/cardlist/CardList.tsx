import React from 'react'
import Card from '../card/Card'
import PortfolioItem from '@/Models/PortfolioItemModel'
import Title from '@/components/atoms/Title'

const CardList:React.FC<{portfolioItems : PortfolioItem[]}> = ({portfolioItems}) => {
  

  
  return(
    <div  id='portfolioItems' className="mx-10">
      <Title text='Latest Portfolio items' />
      {portfolioItems.map((item, index) => (
         <Card index={index} {...item} key={item.title} portfolioItem={item}  />
      ))}
    </div>
  )
}

export default CardList