import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({children}) => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => window.scrollY ? setIsSticky(true) : setIsSticky(false));
    return () => {
      window.removeEventListener('scroll', () => window.scrollY ? setIsSticky(true) : setIsSticky(false));
    };
  }, []);
   

  return (
    <div>
      <Header className={isSticky ? 'sticky' : ''} />
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout