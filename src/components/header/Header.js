/** @jsxImportSource theme-ui */
import { Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/react";
import { Link } from "react-scroll";
import Logo from '../Logo';
import LogoDark from '../../assets/logo.png';
import MobileDrawer from './MobileDrawer';
import menuItems from './header.data';

const Header = ({className}) => {
  return (
    <header sx={styles.header} className={className} id='header'>
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex sx={styles.nav}>
          {menuItems.map(({ label, path },i) => (
          <Link 
            activeClass="active__class"
            to={path}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            key={i}
            >
              {label}
          </Link>
        ))}
        </Flex>
        <Button variant="secondary">Get Started</Button>
        <MobileDrawer/>
      </Container>
    </header>
  )
}

const animationSticky =keyframes`{
  0% {
    position: fixed,
    opacity: 1
  }
100% {
    position: absolute,
    opacity: 1,
    transition: all 0.4s ease;
}
}`


const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${animationSticky} 0.4s ease`,
    zIndex:100,
    '&.sticky': {
      position: 'fixed',
    backgroundColor:'#FFFFFF',
    color: '#000000',
    boxShadow:'0 1px 2px rgb(0 0 0 / 6%)',
    padding:'1rem 0',
    }
  },
  container: {
    width:'85%',
    mx: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media screen and (max-width:520px)': {
       width:'90%'
    }
  },
  nav: {
    margin: '0 auto',
    'a': {
          fontSize: '16px',
          fontWeight: 'body',
          px:'25px',
          cursor: 'pointer',
          lineHeight: 'nav',
          transition: 'all 0.5s',
          '&:hover': {
            color:'primary'
      },
     '@media screen and (max-width:950px)': {
       display:"none"
    }
    }
  }

}

export default Header