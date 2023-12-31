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
    <div className="dark:bg-slate-800">
      <Navbar title={siteTitle} />
      <main className="pt-16 pb-3 px-5 md:px-32 xl:px-52 2xl:w-2/3 mx-auto min-h-screen dark:bg-slate-800">
        {children}
      </main>
      <Footer title={siteTitle} />
    </div>
  );
}

export default PageLayout;
