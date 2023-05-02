import PortfolioItem from '@/Models/PortfolioItemModel';
import Title from '@/components/atoms/Title'
import { getPortfolioItems } from '@/services/PortfolioItemService';
import React from 'react'

const index:React.FC<{portfolioItems: PortfolioItem[]}> = ({portfolioItems}) => {
  return (
    <div>
      <Title text='Portfolio' />
    </div>
  )
}
export async function getStaticProps() {
  const portfolioItems = await getPortfolioItems();
  return {
    props: {
      portfolioItems: portfolioItems,
    },
  };
}

export default index