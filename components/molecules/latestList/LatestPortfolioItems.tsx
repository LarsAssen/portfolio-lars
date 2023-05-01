import React from 'react'
import Card from '../card/Card'
import PortfolioItem from '@/Models/PortfolioItemModel'

const LatestPortfolioItems:React.FC<{portfolioItems: PortfolioItem[]}> = ({portfolioItems}) => {
  return (
    <div>
        <ul>
            {portfolioItems.map((portfolioItem: PortfolioItem) => (
                <Card key={1} category='' variant='default' tags={[""]} title=''  ></Card>
            ))}
        </ul>
    </div>
  )
}

export default LatestPortfolioItems