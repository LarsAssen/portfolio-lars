import Roadmap from '@/components/molecules/components/Roadmap'
import React from 'react'


const experience:React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'ABC Inc.',
      date: '2018 - Present'
    },
    {
      title: 'Intern',
      company: 'XYZ Corp.',
      date: '2017 - 2018'
    }
  ];

  const educations = [
    {
      degree: 'Bachelor of Science',
      institution: 'University of ABC',
      date: '2013 - 2017'
    },
    {
      degree: 'High School Diploma',
      institution: 'XYZ High School',
      date: '2009 - 2013'
    }
  ];


  return (
    <div>
      <Roadmap experiences={experiences} educations={educations} />
    </div>
  )
}

export default experience