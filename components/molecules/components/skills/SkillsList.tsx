import React from 'react'
import Skills from './Skills'
import Title from '@/components/atoms/Title'

const SkillsList = () => {
  return (
    <div id='skills' className='mx-20 my-32'>
    <Title text='Skills' number='2.  ' />
    <div className="my-8 flex justify-between flex-wrap">
          <Skills title='Design' description='Designing beautiful and functional apps that will blow you away.' iconName='palette' />
          <Skills title='Front-End' description='Using modern technologies such as React, Next.js, and more to build functional, responsive front-ends.' iconName='code' />
          <Skills  title='Back-End' description='The skills to handle modern server and database technologies.' iconName='database'/>
          <Skills title='Dev Ops' description='Knowledge of the Dev Ops landscape to get your apps launched, and stay online' iconName='rocket' />
        </div>
    
    </div>
  )
}

export default SkillsList