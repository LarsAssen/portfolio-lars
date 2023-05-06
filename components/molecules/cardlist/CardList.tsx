import React from 'react'
import Card from '../card/Card'
import { CardType } from '@/Enums/cardType'
import Post from '@/Models/PostModel'
import PortfolioItem from '@/Models/PortfolioItemModel'

const CardList:React.FC<{items: Post[] | PortfolioItem[], type: CardType}> = ({items, type}) => {
  return(
    <div className="grid my-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
         <Card key={item.id} title={item.title} description={item.description} cardType={type} category={item.category} tags={item.tags} imageUrl={item.headerImage}  />
      ))}
    </div>
  )
}

export default CardList