import React from 'react';
import { FaTag } from 'react-icons/fa';

type TagProps = {
  text: string;
  variant?: 'primary' | 'secondary';
};

const Tag: React.FC<TagProps> = ({ text, variant = 'primary' }) => {
  const bgColor = variant === 'primary' ? 'bg-primary' : 'bg-secondary';

  return (
    <div
      className={`inline-flex font-bold items-center mr-3 px-3 py-1 rounded-full ${bgColor} text-white`}
    >
      <FaTag className='mr-2' />
      <span>{text}</span>
    </div>
  );
};

export default Tag;
