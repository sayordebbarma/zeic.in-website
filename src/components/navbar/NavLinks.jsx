import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    // Function to generate className based on current route
    const getNavLinkClass = (path) => {
        const currentPath = window.location.pathname;
        return `transition-all duration-300 ease-in-out border-red-500 ${currentPath === path ? 'border-b-2' : ''} hover:border-b-2 hover:border-red-500`;
    };

  return (
    <div>
      <ul className="flex">
        <li>
          <NavLink
            exact={true ? "true" : undefined}
            to="/"
            className={getNavLinkClass('/')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={getNavLinkClass('/products')}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={getNavLinkClass('/about')}
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/career"
            className={getNavLinkClass('/career')}
          >
            Career
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={getNavLinkClass('/contact')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
