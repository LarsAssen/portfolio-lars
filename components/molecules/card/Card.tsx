import PortfolioItem from '@/Models/PortfolioItemModel';
import Category from '@/components/atoms/Category';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import React from 'react';

const Card: React.FC<{portfolioItem: PortfolioItem, index:any}> = ({ portfolioItem, index }) => {

  return (
    <div className="bg-cardBg h-64 mx-10 my-2 border-l-8 border-primary">
      <div className='flex justify-between'>
        <div className="px-6 py-4">
            <div className='my-3'>
              <div className=''>
              <Title size='small' text={portfolioItem.title} />
              </div>
            <div className=''>
            <Category text={portfolioItem.category}/>
            </div>
          </div>
          <p className="text-white mt-20 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="px-6 pt-4 pb-2">
          {portfolioItem.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
        </div>
        </div>
        <div className=''>
        <img
          src="/lars.png"
          alt="Image"
          className="h-full"
        />
      </div>
      </div>    
    </div>
  );
};

export default Card;
