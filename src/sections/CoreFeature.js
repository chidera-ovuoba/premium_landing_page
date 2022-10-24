/** @jsxImportSource theme-ui */
import SectionHeader from '../components/SectionHeader';
import coreFeatureThumb from '../assets/mimi-thian-BYGLQ32Wjx8-unsplash 1.png';
import shapePattern from '../assets/pattern (1).png';
import { Box, Button, Container, Flex, Grid, Text } from "theme-ui";
import Image from "next/image";


const CoreFeature = () => {

  return (
    <div >
      <Flex sx={styles.coreFeatureContainer}>
        <Container sx={{
          position: 'relative',
          flex: '1 1 360px',
        '@media screen  and (max-width:880px)': {
          flex: 'unset',
        }
          
        }}>
        <Box sx={styles.coreFeatureContainer_img_wrapper}>
          <Image src={coreFeatureThumb} alt='coreFeature_thumbnail' />
        </Box>
        <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt='shapePattern' />
          </Box>
        </Container>
        <Container sx={styles.section_core_features_content_container}>
          <SectionHeader slogan='CORE FEATURES' title='Smart Jackpots that you may love this anytime & anywhere' isAlign='left' marginBottom='3rem' sxStyles={{ ...styles.section_core_features_content_title}} />
        <Grid sx={{gap: '2rem'}}>
            <Text variant="heroSecondary">Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</Text>
            <Button sx={{variant:'buttons.primary',width:'10rem'}}>Get Started</Button>
        </Grid>
      </Container>
      </Flex>
    </div>
  )
}

const styles = {
  coreFeatureContainer: {
    width: '80%',
    marginInline: 'auto',
    gap: "5rem",
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection:'row-reverse',
    alignItems: 'center',
    mb: '12rem',
    '@media screen and (min-width:880px) and (max-width:990px)': {
      gap: '1.5rem',
    }

  },
  coreFeatureContainer_img_wrapper: {
    width: '100%',
    display: 'flex',
    position:'relative',
    'img': {
      width: 'auto',
      borderRadius:'20px'
    },
    '@media screen and (min-width:880px) and (max-width:990px)': {
      gap: '1.5rem',
    }
  },
  shapeBox: {
    position: 'absolute',
    width: '80%',
    bottom:'-10%',
    right: '-25%',
    zIndex: -1,
    transform: 'scaleX(-1)',
    '@media screen and (max-width:880px)': {
     display:'none'
    }
  },
  section_core_features_content_container: {
    width: '50%',
    flex:'1 1 320px'
  },
  section_core_features_content_title: {
      fontSize: ["24px", null, "28px",null,"30px", "36px", "42px", null, "48px"],
      color: "heading_secondary",
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: "700",
      letterSpacing: "-.5px",
    }
}
export default CoreFeature