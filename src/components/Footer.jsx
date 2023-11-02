import React from 'react'

const Footer = ( {title} ) => {
  const thisYear = new Date().getFullYear();
  return (
    <footer>
        <p> ©{thisYear} {title}</p>
    </footer>
  )
}

export default Footer