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
  category: string | null;
  tags: string[] | null;
  imageUrl?: string
};

const Card: React.FC<CardProps> = ({ cardType, title, description, category, tags }) => {

  return (
    <div
      className="border w-1/3 border-primary rounded p-4 bg-cardBg"
    >
        {/* <div className="mb-4">
          <Image
            src="https://via.placeholder.com/640x360.png?text=Card+Image"
            alt="adad"
            className="w-full h-40 object-cover rounded-md"
            fill={true}
          />
        </div> */}
      <Title size='small' text={title} />
      <p className="text-sm text-gray-500">{description}</p>
      {/* <Category text={category}/>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div> */}
    </div>
  );
};

export default Card;
