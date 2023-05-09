import Title from '@/components/atoms/Title'
import React from 'react'
import Image from 'next/image'

const index:React.FC<{}> = ({}) => {
  const personalImage = "/lars.png"
  return (
    <div className='h-screen'>
      <div className='mx-20 top-52 relative flex flex-row items-center '>
        <div>
        <Title text="About me" />
      <p className='my-2 text-white'>Hi there, my name is Lars and
         I really enjoy building websites 
         and web apps with the latest technologies. 
         In my free time I enjoy running, reading, and working out.
      </p>
      <p className='my-2 text-white'>
         After travelling around New Zealand in a small
          camper with my wife, we decided to settle down in
           Christchurch and start our life here. 
      </p>
        </div>
        <div>
        <Image src={personalImage} alt="Hero" width={500} height={500} />
        </div>
      </div>  
    </div>
  )
}

export default index