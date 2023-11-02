import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { graphql, useStaticQuery } from 'gatsby'

const PageLayout = ({children}) => {
  const siteData = useStaticQuery(graphql`
    query siteData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = siteData.site.siteMetadata.title

  return (
    <div>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer title={siteTitle} />
    </div>
  )
}

export default PageLayout