import { Link } from 'gatsby'
import React from 'react'

const Breadcrumb = ({ crumbs }) => {
  return (
    <nav className='mb-5'>
        <ul className='flex dark:text-stone-200 italic'>
            {crumbs.map((crumb, index) => (
            <li key={index}>
                {index === crumbs.length - 1 ? (
                <span>{crumb.label}</span>
                ) : (
                <Link to={crumb.path}>{crumb.label}</Link>
                )}
                {index < crumbs.length - 1 && '/'}
            </li>
            ))}
        </ul>
    </nav>
  )
}

export default Breadcrumb