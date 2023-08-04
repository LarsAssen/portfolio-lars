import React from 'react'
import Skills from './Skills'
import Title from '@/components/atoms/Title'

const SkillsList = () => {
  return (
    <>
    <Title text='Skills' />
    <div className="mx-10 my-4 flex justify-between flex-wrap">
          <Skills />
          <Skills />
          <Skills />
          <Skills />
        </div>
    
    </>
  )
}

export default SkillsList