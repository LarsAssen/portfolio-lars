import { ComponentType } from '@/Enums/componentType';
import Button from '@/components/atoms/Button';
import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  text: string;
  imageUrl: string;
  buttonText: string;
  onClick: () => void;
  backgroundImageUrl: string;
};

const Hero: React.FC<Props> = ({
  title,
  text,
  imageUrl,
  buttonText,
  onClick,
  backgroundImageUrl,
}) => {
  return (
    <div
      className="h-screen justify-between bg-cover bg-center bg-opacity-10"
      id='hero'
    >
      <div className='mx-20 top-52 relative flex flex-row items-center '>
        <div className="flex flex-col justify-center max-w-md p-4">
          <h3 className='text-primary'>Hi Im</h3>
          <h1 className="text-4xl text-primary font-bold mb-4">{title}</h1>
          <p className="text-lg mb-4 text-white">{text}</p>
          <Button model={{link: "/", type: ComponentType.Secondary, text: "Portfolio"}} />
        </div>
        <div className='flex relative ml-auto flex-col justify-center'>
        <div className="absolute top-4 left-4 w-full h-full border-solid border-4 border-primary"></div>
          <Image className='z-10' src={imageUrl} alt="Hero" width={500} height={500} />
          </div>
      </div>
    </div>
  );
};

export default Hero;
