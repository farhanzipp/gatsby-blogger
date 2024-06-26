import { Link } from 'gatsby';
import React from 'react';

function Breadcrumb({ crumbs }) {
  return (
    <nav className="mb-5">
      <ul className="inline-flex text-xs italic">
        {crumbs.map((crumb, index) => (
          <li key={index}>
            {index === crumbs.length - 1 ? (
              <span>{crumb.label}</span>
            ) : (
              <Link to={crumb.path}>{crumb.label}</Link>
            )}
            {index < crumbs.length - 1 && ' > '}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumb;
