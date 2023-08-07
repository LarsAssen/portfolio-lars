import React from 'react'
import Skills from './Skills'
import Title from '@/components/atoms/Title'

const SkillsList = () => {
  return (
    <div className='mx-20 my-32'>
    <Title text='Skills' />
    <div className="my-4 flex justify-between flex-wrap">
          <Skills />
          <Skills />
          <Skills />
          <Skills />
        </div>
    
    </div>
  )
}

export default SkillsList