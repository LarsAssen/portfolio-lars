import Title from '@/components/atoms/Title'
import React from 'react'

const index:React.FC<{}> = ({}) => {
  return (
    <div className='h-screen'>
      <div className='mx-20 top-52 relative flex flex-row items-center '>
      <Title text="About me" />
      <p className='my-2 text-white'>Hi there, my name is Lars and
         I really enjoy building websites 
         and web apps with the latest technologies. 
         In my free time I enjoy running, reading, and working out.
      </p>
      <p>
         After travelling around New Zealand in a small
          camper with my wife, we decided to settle down in
           Christchurch and start our life here. 
      </p>
      </div>  
    </div>
  )
}

export default index