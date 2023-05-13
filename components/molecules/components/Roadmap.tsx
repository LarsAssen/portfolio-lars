import React from "react";

// Define the props interface for the roadmap component
interface RoadmapProps {
  leftJob: string;
  rightJob: string;
}

// Define the roadmap component
const Roadmap: React.FC<RoadmapProps> = ({ leftJob, rightJob }) => {
    return (
        <div className="flex justify-center items-center w-full h-screen bg-gray-100">
          <div className="w-2 h-full bg-blue-500 absolute left-1/2"></div>
          <div className="w-5/12 text-center border-2 text-gray-600 text-lg absolute left-0 ml-2 mt-20">
            {leftJob}
          </div>
          <div className="w-5/12 text-center border-2 text-gray-600 text-lg absolute right-0 mr-2 mt-20">
            {rightJob}
          </div>
        </div>
      );
};

export default Roadmap;
