import React from 'react'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-auto">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-4">
          <a
            href="https://www.facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            <FontAwesomeIcon  color='white' size='2x' icon={faFacebook} />
          </a>
          <a
            href="https://www.twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            <FontAwesomeIcon  color='white' size='2x' icon={faInstagram} />
          </a>
          <a
            href="https://www.instagram.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            <FontAwesomeIcon  color='white' size='2x' icon={faLinkedin} />
          </a>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-4">
          <a
            href="https://www.example1.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            Example 1
          </a>
          <a
            href="https://www.example2.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            Example 2
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;