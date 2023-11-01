import React from 'react'

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer>
        <p> ©{thisYear} farhanzip</p>
    </footer>
  )
}

export default Footer