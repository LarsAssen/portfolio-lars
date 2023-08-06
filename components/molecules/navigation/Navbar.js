import React, { useEffect, useState } from "react";
import Link from "next/link";
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
<nav className={`w-full fixed transition-all duration-500 dark:bg-gray-900 z-50 ${
        scrollPosition > 100 ? "bg-navBg opacity-100" : "bg-transparent opacity-90"
}`}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
        <AnchorLink href='#hero' className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink className="block py-2 pl-3 pr-4 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#portfolioItems">Portfolio</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#roadmap" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experience</AnchorLink>
        </li>
        <li>
          <Link href="#about" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Nav;