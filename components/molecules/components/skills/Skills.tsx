import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Skills:React.FC<{}> = () => {
    return (
      <div className="bg-cardBg w-80 h-80 overflow-hidden">
        <div className="relative left-4 -top-3 rounded-full bg-cardBg border-[6px] border-bgColor p-2 w-16 h-16">
        <FontAwesomeIcon icon={faReact} className="text-primary" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Title</div>
          <p className="text-gray-700 text-base">Description</p>
        </div>
      </div>
    );
  };
export default Skills