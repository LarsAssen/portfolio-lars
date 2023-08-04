import PortfolioItem from '@/Models/PortfolioItemModel';
import Category from '@/components/atoms/Category';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import React from 'react';

const Card: React.FC<{portfolioItem: PortfolioItem, index:any}> = ({ portfolioItem, index }) => {

  return (
    <div className="max-w-full my-4 mx-auto bg-cardBg border-l-8 border-primary overflow-hidden md:flex">
      <div className="p-8 md:flex-1">
        <Category text={portfolioItem.category}/>
        <Title size='small' text={portfolioItem.title} />
        <p className="text-white py-2 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <div className="pt-4 pb-2">
          {portfolioItem.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:h-full md:w-48"
          src="lars.png"
          alt="Card Image"
        />
      </div>
    </div>
  );
};

export default Card;
