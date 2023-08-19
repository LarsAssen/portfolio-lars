import Title from '@/components/atoms/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Image from 'next/image'

const About = () => {
    const personalImage = "/lars.png"
  return (
    <div className='h-screen' id='about' >
      <div className='lg:mx-20 mx-4 top-52 relative flex flex-col lg:flex-row items-center '>
        <div>
        <Title number='5.  ' text="About me" />
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
        <div className='text-white'>Socials</div>
          <div className='flex flex-row'>
            <a className='mr-2 mt-2' href="https://www.linkedin.com/in/lars-assen/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon  color='white' size='4x' icon={faLinkedin} />
            </a>
            <a className='mx-2 mt-2' href='https://www.instagram.com/larsassen/' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon  color='white' size='4x' icon={faInstagram} />
            </a>
            <a className='mx-2 mt-2' href='https://www.facebook.com/lars.assen.9/'>
            <FontAwesomeIcon color='white' size='4x' icon={faFacebook} />
            </a>
          </div>
        </div>
        <div>
        <Image src={personalImage} alt="Hero" width={500} height={500} />
        </div>
      </div>  
    </div>
  )
}

export default About