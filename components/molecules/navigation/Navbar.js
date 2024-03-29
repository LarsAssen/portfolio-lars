import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Nav() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const logo = "../logo.png"
  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [activeLink, setActiveLink] = useState('');

  // Function to check which section is currently in view
  const checkSectionInView = () => {
    const anchorLinks = document.querySelectorAll('[data-section]');
    anchorLinks.forEach((link) => {
      const sectionId = link.getAttribute('data-section');
      const section = document.getElementById(sectionId);
      if (section.getBoundingClientRect().top  <= 0) {
        setActiveLink(sectionId);
        console.log(activeLink);
      }
    });
  };

  // Function to handle scrolling and update the active link
  const handleScroll = () => {
    checkSectionInView();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [isOpen, setIsOpen] = useState(false);
  return (
<nav className={`w-full fixed transition-all duration-500 z-50 ${
        scrollPosition > 100 ? "bg-cardBg opacity-100" : "bg-transparent opacity-90"
}`}>
  <div className="max-w-screen mx-20 flex flex-wrap items-center justify-between">
    <a href="" className="flex items-center">
        <img src={logo} className="h-20 mr-3" alt="Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <AnchorLink href='#hero' data-section="hero" className={`${activeLink === 'hero'? 'text-primary font-bold':'text-white font-normal'} block py-2 pl-3 rounded md:bg-transparent md:p-0  md:hover:dark:text-blue-500`} aria-current="page">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink data-section="portfolioItems" className={`${activeLink === 'portfolioItems'? 'text-primary font-bold':'text-white font-normal'} block py-2 pl-3 rounded md:bg-transparent md:p-0 md:dark:text-blue-500`} href="#portfolioItems">Portfolio</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#skills" data-section="skills" className={`${activeLink === 'skills'? 'text-primary font-bold':'text-white font-normal'} block py-2 pl-3 rounded md:bg-transparent md:p-0 md:dark:text-blue-500`}>Skills</AnchorLink>
        </li>
        <li>
          <AnchorLink data-section="experience" href="#experience" className={`${activeLink === 'experience'? 'text-primary font-bold':'text-white font-normal'} block py-2 pl-3 rounded md:bg-transparent md:p-0 md:dark:text-blue-500`}>Experience</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about" data-section="about" className={`${activeLink === 'about'? 'text-primary font-bold':'text-white font-normal'} block py-2 pl-3 rounded md:bg-transparent md:p-0 md:dark:text-blue-500`}>About</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact" data-section="contact" className={`${activeLink === 'contact'? 'text-primary font-bold':'text-white font-normal'} block py-2 pl-3 rounded md:bg-transparent md:p-0 md:dark:text-blue-500`}>Contact</AnchorLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Nav;