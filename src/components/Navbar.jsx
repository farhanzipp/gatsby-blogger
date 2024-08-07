import React, { useState } from 'react';
import { Link } from 'gatsby';

function Navbar({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menus = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Projects', link: '/project' },
    { id: 3, title: 'Blogs', link: '/blog' },
  ];

  return (
    <header className="fixed z-50 top-0 left-0 w-full">
      <div className="w-full flex py-4 px-5 sm:px-11 md:px-20 lg:px-32 xl:px-52  items-center justify-between mx-auto font-works bg-secondary">
        <Link to="/">
          <h1 className="text-2xl font-bricolage font-bold ">
            {title}
          </h1>
        </Link>

        <nav className={`absolute w-full left-0 top-20 md:w-fit md:top-0 md:relative md:block ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="mx-5 md:mx-0 shadow-solid-rb md:shadow-none flex flex-col gap-4 p-4 md:p-0 border-2 border-black rounded-lg font-medium bg-secondary md:flex-row md:border-0 md:bg-transparent">
            {menus.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="block py-2 pl-3 pr-4 text-xl text-gray-900 rounded md:border-0 hover:text-accentred md:p-0 "
                  activeClassName="active"
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
