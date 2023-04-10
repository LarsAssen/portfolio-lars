import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faTag } from '@fortawesome/free-solid-svg-icons';


type CategoryProps = {
  text: string;
  variant?: 'primary' | 'secondary';
};

const Category: React.FC<CategoryProps> = ({ text, variant = 'primary' }) => {
  const bgColor = variant === 'primary' ? 'bg-primary' : 'bg-secondary';

  return (
    <div
      className={`inline-flex font-bold items-center border-2 border-white px-3 py-1 rounded ${bgColor} text-white`}
    >
      <span>{text}</span>
    </div>
  );
};

export default Category;