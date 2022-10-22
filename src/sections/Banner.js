/** @jsxImportSource theme-ui */
import { Box, Button, Container, Grid, Heading, Text } from 'theme-ui';
import BannerImg from '../assets/Browser-mockup.png'
import BlueBg from '../assets/Shape1.png'
import OrangeBg from '../assets/Shape2.png'
import Image from 'next/future/image';
const Banner = () => {
  return (
    <Container id='home' sx={styles.section_home_container}>
      <Image src={BlueBg}/>
      <Image src={OrangeBg}/>
      <Grid sx={styles.section_home}>
         <Box sx={styles.banner_contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Top Quality Digital Products to Explore
          </Heading>
          <Text as="p" variant="heroSecondary">
          Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.
          </Text>
          <Button variant="primary">Explore</Button>
        </Box>
        <Box sx={styles.banner_imageBox}>
          <Image src={BannerImg} alt="Banner" />
        </Box>
      </Grid>
    </Container>
  )
}

const styles = {
  section_home_container: {
    p: '13rem 0 2rem 0',
    position:'relative',
     ' & > img:nth-of-type(1)': {
    position: 'absolute',
    content: '""',
    bottom: '90px',
    left: 0,
    height: '60%',
    width: '70%',
       zIndex: -1,
    '@media screen and (max-width:900px)': {
      bottom:'80px',
    },
       '@media screen and (max-width:530px)': {
         bottom: '60px',
         height: '40%',
         width: '60%',
       },
       '@media screen and (max-width:330px)': {
         bottom: '50px',
         height: '35%',
         width: '70%',
       },
       '@media screen and (min-width:1350px)': {
         bottom: '150px',
         height: '75%',
         width: '80%',
       }
    },
     ' & img:nth-of-type(2)': {
    position: 'absolute',
   content: '""',
    bottom: '100px',
    right: 0,
    height: '60%',
    width: '40%',
    zIndex: -1,
       '@media screen and (max-width:900px)': {
    bottom:'80px',
    },
       '@media screen and (max-width:530px)': {
         bottom: '60px',
         height: '40%',
         width: '40%',
       },
       '@media screen and (max-width:330px)': {
         bottom: '50px',
         height: '35%',
         width: '50%',
       },
       '@media screen and (min-width:1350px)': {
         bottom: '150px',
         height: '75%',
         width: '50%',
       }
    }
  },
  section_home: {
    placeItems: 'center',
    width: '85%',
    margin: '0 auto',
    
  },
  banner_contentBox: {
    color: 'text',
    lineHeight: 1.8,
    m:'0 auto',
    textAlign: 'center',
    marginBottom: '40px',
    width: '57%',
     '@media screen and (max-width:530px)': {
    width: '90%',
    }
    
  },
  banner_imageBox: {
    width:'100%',
    height: '100%',
    '& > img':{
    width:'100%',
    height: '100%',
    }
  }

} 

export default Banner