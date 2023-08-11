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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <div className='flex flex-row justify-between mt-6'>
          <div className='pt-4'>
            <Button model={{link: "#", type:ComponentType.Primary, text: "View Project"}} />
            <Button model={{link: "#", type:ComponentType.Secondary, text: "Visit Github"}} />
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
          src="lars.png"
          alt="Card Image"
        />
      </div>
    </div>
  );
};

export default Card;
