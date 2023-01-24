import { useEffect, useState } from "react";
import { Box } from "theme-ui";
// import { Scrollbar } from 'react--custom-scrollbars';
import {IoMdClose,IoMdMenu} from 'react-icons/io'
import Drawer from '../Drawer';
import { Link } from "react-scroll";
import { FaFacebookF, FaTwitter, FaGithubAlt, FaDribbble } from 'react-icons/fa';
import menuItems from './header.data';

const social = [
    {
        path: '/',
        icon:<FaFacebookF/>
    },
    {
        path: '/',
        icon:<FaGithubAlt/>
    },
    {
        path: '/',
        icon:<FaTwitter/>
    },
    {
        path: '/',
        icon:<FaDribbble/>
    }
]


const MobileDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
        setWindowWidth(window.innerWidth);
        return () => {
        window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
        };
    }, [windowWidth])
    return (
        <Drawer
            open={isDrawerOpen}
            width={`${ windowWidth <= 500 ? '75%' : '50%'}`}
            drawerHandler={
                <Box sx={styles.handler}>
                <IoMdMenu size='26px' color="#000"/>
                </Box>
            }
            windowWidth={windowWidth}
            onClose={() => setIsDrawerOpen(false)}
            onOpen={() => setIsDrawerOpen(true)}
            closeButton={<IoMdClose size="24px" color="#000" />}
            drawerStyle={styles.drawer}
            closeBtnStyle={styles.close}
      >
       <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItems.map((menuItem, i) => (
              <Link
                activeClass="active_mobile_drawer"
                to={menuItem.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {menuItem.label}
              </Link>
            ))}
          </Box>
          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map((socialItem, i) => (
                <Box  key={i} sx={styles.social.icon}>
                  <Link to={socialItem.path}>{socialItem.icon}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>
  )
}

const styles = {
    handler: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: '0',
        width: '26px',
        marginLeft:'2rem',
        '@media screen and (min-width:950px)':{
        display:'none'
        },
        '@media screen and (max-width:500px)':{
        marginLeft:'1rem'
        } 
    },
    drawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "6rem",
    pb: "3rem",
    px: "2rem",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#343D48",
      py: "15px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
        transition: "all 0.25s",
      "&:hover": {
          color: "#2563FF",
          borderColor: 'red'
      },
      "&.active_mobile_drawer": {
          color: "#2563FF",
        },
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#343D48",
      fontSize: '20px',
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "#2563FF",
      },
    },
  },
}







export default MobileDrawer