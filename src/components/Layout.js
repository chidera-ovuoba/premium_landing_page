import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Container } from 'theme-ui';

const Layout = ({children}) => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => window.scrollY ? setIsSticky(true) : setIsSticky(false));
    return () => {
      window.removeEventListener('scroll', () => window.scrollY ? setIsSticky(true) : setIsSticky(false));
    };
  }, []);
   

  return (
    <Container sx={{
      background: 'radial-gradient(#0898E7,#FAAE1B,#EA3A60)',
      '@media screen and (min-width:2200px)': {
        display: 'grid',
        placeContent: 'center',
      }
    }}>
    <div style={{maxWidth:'2200px',background:'white',position:'relative'}}>
    <Header className={isSticky ? 'sticky' : ''} />
    <main>
    {children}
    </main>
    <Footer/>
      </div>
      </Container>
  )
}

export default Layout