import React, { useState } from 'react';
import { Link } from 'gatsby';

function Navbar({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menus = [
    {title : "Home", link : "/"},
    {title : "Projects", link : "/project"},
    {title : "Blogs", link : "/blog"},
  ]

  return (
    <header className="fixed z-50 top-0 left-0 w-full">
      <div className="w-full flex py-4 px-3 md:px-20  items-center justify-between mx-auto font-works bg-secondary">
        <Link to="/">
          <h1 className="text-xl font-bricolage font-bold ">
            {title}
          </h1>
        </Link>

        <nav className={`absolute w-full left-0 top-14 md:w-fit md:top-0 md:relative md:block ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="flex flex-col gap-4 p-4 md:p-0 border rounded-lg font-medium border-gray-100  bg-gray-50 md:flex-row md:border-0 md:bg-transparent">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu.link}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 hover:text-accentred md:p-0 "
                  activeClassName="text-accentred"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="justify-center text-sm text-gray-500 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          {!isMenuOpen ? (
            <svg className="w-5 h-5 duration-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6 duration-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
