import { ComponentType } from '@/Enums/componentType';
import PortfolioItem from '@/Models/PortfolioItemModel';
import Button from '@/components/atoms/Button';
import Tag from '@/components/atoms/Tag';
import React from 'react';

const Card: React.FC<{portfolioItem: PortfolioItem, index:any}> = ({ portfolioItem, index }) => {

  return (
    <div className="max-w-full my-4 mx-auto bg-cardBg border-l-8 border-primary overflow-hidden md:flex">
      <div className="p-8 md:flex-1">
        <div className='text-white text-xl'>{portfolioItem.title} </div>
        <p className="text-white py-2 text-base">
          {portfolioItem.description}
        </p>
        <div className='flex flex-row justify-between mt-6'>
          <div className='pt-4'>
            <a href={portfolioItem.link} className='bg-primary text-white py-2 mt-6 mr-2 px-6 rounded font-bold border-2 border-primary'  >View Github</a>
          </div>

          <div className="pt-4 pb-2">
            {portfolioItem.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>

        </div>

      </div>
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:h-full md:w-48"
          src={portfolioItem.headerImage}
          alt="Card Image"
        />
      </div>
    </div>
  );
};

export default Card;
