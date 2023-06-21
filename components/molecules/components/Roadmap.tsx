import Title from '@/components/atoms/Title';
import React from 'react';

interface Experience {
  title: string;
  company: string;
  date: string;
}

interface Education {
  degree: string;
  institution: string;
  date: string;
}

interface Props {
  experiences: Experience[];
  educations: Education[];
}

const Roadmap: React.FC<Props> = ({ experiences, educations }) => {
  return (
    <div id='roadmap' className="container w-full px-4 md:px-6  md:max-w-3xl mx-auto pt-20">
      <Title text='Work Experience'/>
      <ul className="mb-8">
        {experiences.map((experience, index) => (
          <li key={index} className="mb-2">
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <p className="text-gray-500">{experience.company}</p>
            <p className="text-gray-500">{experience.date}</p>
          </li>
        ))}
      </ul>

      <Title text='Education' />
      <ul>
        {educations.map((education, index) => (
          <li key={index} className="mb-2">
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-gray-500">{education.institution}</p>
            <p className="text-gray-500">{education.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;
