import Head from 'next/head'
import Hero from '@/components/molecules/hero/Hero'
import PortfolioItem from '@/Models/PortfolioItemModel'
import CardList from '@/components/molecules/cardlist/CardList'
import Experience from '@/components/molecules/components/Experience'
import SkillsList from '@/components/molecules/components/skills/SkillsList'
import About from '@/components/molecules/about/About'
import Contact from '@/components/molecules/contact/Contact'


const personalImage = "/lars.png"
const bgimage = 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
const experiences = [
  {
    title: 'Internship',
    company: 'De Nieuwe Zaak',
    date: '2019',
    tags: ['React', '.NET Core'],
  },
  {
    title: 'Internship',
    company: 'E-Active',
    date: '2020',
    tags: ['Symphony', 'React', 'Python'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Kruitbosch',
    date: '2020 - Present',
    tags: ['React', 'Typescript', '.NET Core'],
  },
  {
    title: 'Internship',
    company: 'Arcady',
    date: 'Sep 2021 - Feb 2022',
    tags: ['React', 'Typescript', '.NET Core'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Arcady',
    date: 'Feb 2022 - Oct 2022',
    tags: ['React', 'Typescript', '.NET Core'],
  }
];

const educations = [
  {
    degree: 'HBO-ICT Software Engineering',
    institution: 'Christelijke Hogeschool Windesheim',
    date: '2018 - 2023',
    tags: ['React', 'NextJS', 'TailwindCSS'],
  },
  {
    degree: 'The Complete Web Developer Course 2.0',
    institution: 'Udemy',
    date: '2023',
    tags: ['HTML', 'CSS', 'Javascript','MySQL', 'NodeJS'],
  }
];


const Home:React.FC = () => {
  const portfolioItems:PortfolioItem[] = [{
    title: 'Portfolio Site',
    description: 'I built this portfolio site using NextJS, TailwindCSS and Typescript. I used the Atomic Design pattern to structure the components. I also used the Model-View-ViewModel pattern to structure the data.',
    headerImage: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['Typescript', 'NextJS', 'TailwindCSS'],
    date: "2021-04-01",
    link: "https://github.com/LarsAssen/portfolio-lars",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nis",
  },
  {
    title: 'Personal Running Blog',
    description: 'I built the front-end of this blog using NextJS and TailwindCSS. I used Strapi as a headless CMS. I used the Model-View-ViewModel pattern to structure the data.',
    headerImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    tags: ['NextJS', 'TailwindCSS', 'Strapi'],
    date: "2021-04-01",
    link: "https://github.com/LarsAssen/blog-frontend",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nis",
  },
    ]

  return (
    <>
      <Head>
        <title>Portfolio Lars</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='pb-20'>
        <Hero title='Lars Assen' backgroundImageUrl={bgimage} imageUrl={personalImage} text='And I design and build stuff for the web' buttonText='follow me' onClick={() => {}} />
        <CardList portfolioItems={portfolioItems}  />
        <SkillsList />
        <Experience experiences={experiences} educations={educations} />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default Home