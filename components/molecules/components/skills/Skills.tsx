import React from 'react'
import { FaPalette, FaCode, FaDatabase, FaRocket } from 'react-icons/fa'

const Skills:React.FC<{iconName: string, title: string, description: string}> = ({iconName, title, description}) => {
  let iconElement;

  // Determine which icon to render based on the iconName prop
  switch (iconName) {
    case 'rocket':
      iconElement = <FaRocket className='text-primary h-7 w-7' />;
      break;
    case 'code':
      iconElement = <FaCode className='text-primary h-7 w-7' />;
      break;
    case 'palette':
      iconElement = <FaPalette className='text-primary h-7 w-7' />;
      break;
    case 'database':
      iconElement = <FaDatabase className='text-primary h-7 w-7' />;
      break;
    default:
      iconElement = null; // Render no icon if the prop value doesn't match
  }
    return (
      <div className="bg-cardBg relative w-80 h-80">
        <div className="absolute flex items-center justify-center left-4 z-10 -top-5 rounded-full bg-cardBg border-[6px] border-bgColor p-2 w-16 h-16">
          {iconElement}
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-white mt-10 text-xl mb-2">{title}</div>
          <p className="text-white text-base">{description}</p>
        </div>
      </div>
    );
  };
export default Skills