import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faTag } from '@fortawesome/free-solid-svg-icons';


type TagProps = {
  text: string;
  variant?: 'primary' | 'secondary';
};

const Tag: React.FC<TagProps> = ({ text, variant = 'primary' }) => {
  const bgColor = variant === 'primary' ? 'bg-primary' : 'bg-secondary';

  return (
    <div
      className={`inline-flex font-bold items-center px-3 py-1 rounded-full ${bgColor} text-white`}
    >
      <FontAwesomeIcon icon={faTag} />
      <span>{text}</span>
    </div>
  );
};

export default Tag;
