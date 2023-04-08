import Category from '@/components/atoms/Category';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import Image from 'next/image';
import React from 'react';

type CardProps = {
  variant: 'default' | 'imaged';
  title: string;
  category: string;
  tags: string[];
  imageUrl?: string
};

const Card: React.FC<CardProps> = ({ variant, title, category, tags }) => {
  const isImaged = variant === 'imaged';

  return (
    <div
      className="border w-1/3 border-primary rounded p-4 bg-cardBg"
    >
      {isImaged && (
        <div className="mb-4">
          <Image
            src="https://via.placeholder.com/640x360.png?text=Card+Image"
            alt="adad"
            className="w-full h-40 object-cover rounded-md"
            fill={true}
          />
        </div>
      )}
      <Title size='small' text={title} />
      <Category text={category}/>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default Card;
