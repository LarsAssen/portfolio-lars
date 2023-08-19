import { ComponentType } from '@/Enums/componentType';
import Button from '@/components/atoms/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

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

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1, // Adjust the stagger to control the timing between word animations
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const lines = [
    { text: 'Hi I\'m', style: 'text-primary' },
    { text: 'Lars Assen', style: 'lg:text-6xl text-2xl text-primary opacity-50 font-bold mb-4' },
    { text: 'A Full stack developer and designer', style: 'lg:text-6xl text-2xl text-white font-medium mb-4' },
    { text: 'I’m a fullstack web developer who specializes', style: 'text-white' },
    { text: 'in modern technologies to build beautiful, fast', style: 'text-white' },
    { text: 'and responsive web solutions.', style: 'text-white' },
  ];


  return (
    <div
      className="h-screen relative bg-cover bg-center bg-opacity-10"
      id='hero'
    >
       
       <div
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary opacity-20 transform rotate-45 origin-bottom-left"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      ></div>

      {/* Lower triangle */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary opacity-20 transform rotate-45 origin-top-right"
        style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}
      ></div>

      <div className='lg:top-52 top-20 mx-20 relative flex flex-col lg:flex-row items-center '>
      <div className="flex flex-col justify-center lg:mr-64 lg:max-w-mds">
        <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {lines.map((line, index) => (
            <div key={index} className={line.style}>
              {line.text.split(' ').map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
        </div>
        <div className='flex flex-row'>
        <Button model={{link: "#portfolioItems", type: ComponentType.Primary, text: "Portfolio"}} />
        <Button model={{link: "#contact", type: ComponentType.Secondary, text: "Contact"}} />
        </div>
      </div>
        <div className='flex relative ml-auto flex-col justify-center'>
        <div className="absolute lg:top-4 lg:left-4 w-full h-full border-solid border-4 border-primary"></div>
          <Image className='z-10 mt-4' src={imageUrl} alt="Hero" width={500} height={500} />
          </div>
      </div>
    </div>
  );
};

export default Hero;
