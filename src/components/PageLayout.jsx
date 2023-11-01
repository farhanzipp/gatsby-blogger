import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PageLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default PageLayout