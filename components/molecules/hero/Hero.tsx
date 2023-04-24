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
      className="relative flex flex-row items-center justify-between bg-cover bg-center bg-opacity-50"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="flex flex-col justify-center max-w-md p-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-4">{text}</p>
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClick}
        >
          {buttonText}
        </button> */}
      </div>
      <img src={imageUrl} alt="Hero" className="w-1/2" />
    </div>
  );
};

export default Hero;
