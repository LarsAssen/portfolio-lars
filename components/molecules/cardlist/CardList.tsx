import React from 'react'
import Card from '../card/Card'
import { CardType } from '@/Enums/cardType'
import Post from '@/Models/PostModel'
import PortfolioItem from '@/Models/PortfolioItemModel'

const CardList:React.FC<{portfolioItems : PortfolioItem[]}> = ({portfolioItems}) => {
  return(
    <div id='portfolioItems' className="grid my-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {portfolioItems.map((item) => (
         <Card key={item.id} portfolioItem={item}  />
      ))}
    </div>
  )
}

export default CardList