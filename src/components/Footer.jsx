import { Link } from 'gatsby';
import React from 'react';

function Footer({ title }) {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="grid grid-cols-2 mx-auto md:grid-cols-3 md:w-3/4 xl:w-2/3 gap-4 p-6">
        <ul>
          <li>
            <p className="font-bold mb-2 dark:text-white">FOLLOW</p>
          </li>
          <li>
            <a href="https://github.com/farhanzipp" className="text-gray-500" target="_blank" rel="noopener noreferrer" aria-label={`visit ${title} github page`}>Github</a>
          </li>
          <li>
            <p className="text-gray-500">Instagram</p>
          </li>
        </ul>
        <ul>
          <li>
            <p className="font-bold mb-2 dark:text-white">RESOURCES</p>
          </li>
          <li>
            <a href="https://www.gatsbyjs.com/" className="text-gray-500" target="_blank" rel="noopener noreferrer">Gatsby.js</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" className="text-gray-500" target="_blank" rel="noopener noreferrer">Tailwind</a>
          </li>
        </ul>
        <ul>
          <li>
            <p className="font-bold mb-2 dark:text-white justify-self-end">LEGAL</p>
          </li>
          <li>
            <Link to="/privacy-policy">
              <p className="text-gray-500">Privacy Policy</p>
            </Link>
          </li>
          <li>
            <Link to="/terms-condition">
              <p className="text-gray-500">Terms & Condition</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:grid grid-cols-2 items-center py-4">
        <p className="text-center text-neutral-700 dark:text-neutral-200">
          {' '}
          ©
          {thisYear}
          {' '}
          {title}
        </p>
        <div className="flex w-full gap-3 justify-center items-center">
          <a href="https://www.facebook.com/" className=" text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer" aria-label={`visit ${title} facebook page`}>
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="https://twitter.com/?lang=en" className=" text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer" aria-label={`visit ${title} twitter page`}>
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="https://github.com/farhanzipp" className=" text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer" aria-label={`visit ${title} github page`}>
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          <a href="https://www.instagram.com/farhanzip/" className=" text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer" aria-label={`visit ${title} instagram page`}>
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/" className=" text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer" aria-label={`visit ${title} youtube page`}>
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="currentColor">
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
