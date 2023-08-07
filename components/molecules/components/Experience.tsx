import Tag from '@/components/atoms/Tag';
import Title from '@/components/atoms/Title';
import React from 'react';

interface Experience {
  title: string;
  company: string;
  date: string;
  tags: string[];
}

interface Education {
  degree: string;
  institution: string;
  date: string;
  tags: string[];
}

interface Props {
  experiences: Experience[];
  educations: Education[];
}

const Roadmap: React.FC<Props> = ({ experiences, educations }) => {
  return (
    <div id='roadmap' className="mx-20 mt-20 pt-20">
      <Title text='Work Experience'/>
      <ul className="mb-8">
        {experiences.map((experience, index) => (
          <div key={index} className="my-4 mx-auto bg-cardBg border-l-8 border-primary">
          <div className="p-8">
            <p>{experience.date}</p>
            <Title size='small' text={experience.title} />
            <p className="text-white py-2 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="pt-4 pb-2">
              {experience.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        </div>
        ))}
      </ul>

      <Title text='Education' />
      <ul>
        {educations.map((education, index) => (
          <div key={index} className="max-w-full my-4 mx-auto bg-cardBg border-l-8 border-primary overflow-hidden md:flex">
          <div className="p-8 md:flex-1">
            <p>{education.date}</p>
            <Title size='small' text={education.degree} />
            <p className="text-white py-2 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="pt-4 pb-2">
              {education.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        </div>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;
