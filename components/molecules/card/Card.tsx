import PortfolioItem from '@/Models/PortfolioItemModel';
import Category from '@/components/atoms/Category';
import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import React from 'react';

const Card: React.FC<{portfolioItem: PortfolioItem, index:any}> = ({ portfolioItem, index }) => {

  return (
    // <div className="bg-cardBg h-64 mx-10 my-2 border-l-8 border-primary">
    //   <div className='flex justify-between'>
    //     <div className="px-6 py-4">
    //         <div className='my-3'>
    //           <div className=''>
    //           <Title size='small' text={portfolioItem.title} />
    //           </div>
    //         <div className=''>
    //         <Category text={portfolioItem.category}/>
    //         </div>
    //       </div>
    //       <p className="text-white mt-20 text-base">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //       </p>
    //       <div className="px-6 pt-4 pb-2">
    //       {portfolioItem.tags.map((tag) => (
    //           <Tag key={tag} text={tag} />
    //         ))}
    //     </div>
    //     </div>
    //     <div className=''>
    //     <img
    //       src="/lars.png"
    //       alt="Image"
    //       className="h-full"
    //     />
    //   </div>
    //   </div>    
    // </div>
    <div className="max-w-full my-4 mx-auto bg-cardBg border-l-8 border-primary overflow-hidden md:flex">
    {/* Content on the left */}
    <div className="p-8 md:flex-1">
    <Category text={portfolioItem.category}/>
    <Title size='small' text={portfolioItem.title} />
    <p className="text-white py-2 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    <div className="pt-4 pb-2">
      {portfolioItem.tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </div>
    
    {/* Image on the right */}
    <div className="md:flex-shrink-0">
      <img
        className="h-48 w-full object-cover md:h-full md:w-48"
        src="lars.png"
        alt="Card Image"
      />
    </div>
  </div>
  );
};

export default Card;
