import { CardType } from '@/Enums/cardType';
import Category from '@/components/atoms/Category';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import Image from 'next/image';
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
    <div
      className="border border-primary rounded p-4 bg-cardBg"
    >
        <div className="mb-4">
          {/* <img
            src={`http://localhost:1337${imageUrl}`}
            alt="adad"
            className="w-full h-40 object-cover rounded-md"
            fill={true}
          /> */}
        </div>
        <div className='flex my-3'>
          <Title size='small' text={title} />
          <Category text={category}/>
        </div>
      <p className="text-sm text-gray-200">{description}</p>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default Card;
