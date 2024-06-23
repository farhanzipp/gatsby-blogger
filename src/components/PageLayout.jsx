import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navbar from './Navbar';
import Footer from './Footer';

function PageLayout({ children }) {
  const siteData = useStaticQuery(graphql`
    query siteData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = siteData.site.siteMetadata.title;

  return (
    <div className='bg-secondary'>
      <Navbar title={siteTitle} />
      <main className="pt-14">
        {children}
      </main>
      <Footer title={siteTitle} />
    </div>
  );
}

export default PageLayout;
