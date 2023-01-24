/** @jsxImportSource theme-ui */
import { keyframes } from "@emotion/react";
import SectionHeader from '../components/SectionHeader';
import FeatureCardColumn from '../components/FeatureCardColumn';
import { IoIosPlay } from 'react-icons/io';
import serviceThumb from '../assets/paige-cody-ITTqjS3UpoY-unsplash 1 (1).png';
import shapePattern from '../assets/pattern (1).png';
import smartSvg from '../assets/Group4.png';
import secureSvg from '../assets/Group3.png';
import { Box, Button, Container, Flex, Grid } from "theme-ui";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { useState } from "react";


const serviceData = {
  heading: {
    slogan: 'OUR SERVICES',
    title:'Business Goals Achieved with Design' 
  },
  features: [
    {
    id: 1,
    src: smartSvg,
    title: 'Pro Subscription',
    text:'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.'
  },
  {
    id: 2,
    src: secureSvg,
    title: 'Partnership deal',
    text:'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.'
  }
  ]
}

const animation_videoBtn = keyframes`
 from{
  opacity:0.9;
  transform:scale(1);  
}
 to{
  opacity:0;
  transform:scale(1.5); 
}
`
const ServiceSection = () => {
 const [videoOpen, setVideoOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <div >
      <Flex sx={styles.serviceSectionContainer}>
        <Container sx={{
          position: 'relative',
          flex: '1 1 360px',
        '@media screen  and (max-width:880px)': {
          flex: 'unset',
        }
        }}>
        <Box sx={styles.serviceSectionContainer_img_wrapper}>
          <Image src={serviceThumb} alt='service_thumbnail' />
          <Button
            sx={styles.videoBtn}
            onClick={handleClick}
            style={{padding:0}}
          >
              <IoIosPlay/>
          </Button>
        </Box>
        <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt='shapePattern' />
          </Box>
        </Container>
        <Container sx={styles.section_service_section_content_container}>
          <SectionHeader {...serviceData.heading} isAlign='left' marginBottom='3rem' sxStyles={{ ...styles.section_service_section_content_title}} />
        <Grid sx={{flex:1,gap: '4rem'}}>
        {
            serviceData.features.map((item) => (
              <FeatureCardColumn key={item.id} {...item}  width='80px' height='85px' />
          ))
        }
        </Grid>
      </Container>
      </Flex>
      <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="YaGMit-KC9o"
        onClose={() => setVideoOpen(false)}
      />
    </div>
  )
}

const styles = {
  serviceSectionContainer: {
    width: '80%',
    marginInline: 'auto',
    gap: "6rem",
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    mb: '12rem',
    '@media screen and (min-width:880px) and (max-width:990px)': {
      gap:'1.5rem'
    }
  },
  serviceSectionContainer_img_wrapper: {
    position: 'relative',
    width: '100%',
    display:'flex',
    'img': {
      width: 'auto',
      borderRadius:'20px'
    }
  },
  videoBtn: {
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    top: '50%',
    left: '50%',
    borderRadius: '50%',
    width: '5rem',
    height: '5rem',
    display: 'grid',
    placeItems: 'center',
    background:'rgba(255,255,255,0.5)',
    'svg': {
      fontSize: '300%',
      '@media screen and (max-width:400px)': {
        fontSize:'200%'
      }
    },
    '&::before': {
      content:'""',
      position: 'absolute',
      borderRadius:"50%",
      width: '100%',
      height: '100%',
      background: '#ea3a60',
      zIndex: -1,
      animation:`${animation_videoBtn} 2s ease infinite`
    }
  },
  shapeBox: {
    position: 'absolute',
    width: '80%',
    bottom:'-10%',
    left: '-25%',
    zIndex:-1,
    '@media screen and (max-width:880px)': {
     display:'none'
    }
  },
  section_service_section_content_container: {
    width: '50%',
    flex:'1 1 320px'
  },
  section_service_section_content_title: {
      fontSize: ["24px", null, "28px",null,"30px", "36px", "42px", null, "48px"],
      color: "heading_secondary",
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: "700",
      letterSpacing: "-.5px",
    }
}

export default ServiceSection