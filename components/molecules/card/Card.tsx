import { CardType } from '@/Enums/cardType';
import Category from '@/components/atoms/Category';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import React from 'react';

type CardProps = {
  cardType: CardType;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string
};

const Card: React.FC<CardProps> = ({ cardType, title, description, category, tags, imageUrl }) => {

  return (
    // <div
    //   className="border block border-primary rounded p-4 bg-cardBg"
    // >
    //     <div className="mb-4">
    //       {/* <img
    //         src={`http://localhost:1337${imageUrl}`}
    //         alt="adad"
    //         className="w-full h-40 object-cover rounded-md"
    //         fill={true}
    //       /> */}
    //     </div>
    //     <div className='flex my-3'>
    //       <Title size='small' text={title} />
    //       <Category text={category}/>
    //     </div>
    //   <p className="text-sm text-gray-200">{description}</p>
    //   <div className="flex flex-wrap">
    //     {tags.map((tag) => (
    //       <Tag key={tag} text={tag} />
    //     ))}
    //   </div>
    // </div>
    <div className="overflow-hidden border border-primary rounded bg-cardBg">
      <img className="w-full" src="/lars.png" alt="Mountain"></img>
      <div className="px-6 py-4">
          <div className='relative my-3'>
            <div className='absolute left-0'>
            <Title size='small' text={title} />
            </div>
          <div className='absolute right-0'>
          <Category text={category}/>
          </div>
        </div>
        <p className="text-white mt-20 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
      </div>
    </div>
  );
};

export default Card;
