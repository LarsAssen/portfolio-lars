import React, { useEffect, useRef, useState } from 'react'
import Card from '../card/Card'
import PortfolioItem from '@/Models/PortfolioItemModel'
import { motion, useAnimation } from 'framer-motion';

const CardList:React.FC<{portfolioItems : PortfolioItem[]}> = ({portfolioItems}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.2 }
      }));
    }
  }, [controls, isVisible]);

  return(
    <div ref={ref} id='portfolioItems' className="grid my-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {portfolioItems.map((item, index) => (
         <Card index={index} {...item} controls={controls} key={item.id} portfolioItem={item}  />
      ))}
    </div>
  )
}

export default CardList