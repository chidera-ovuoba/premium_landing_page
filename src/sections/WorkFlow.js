import Image from 'next/future/image';
import React from 'react'
import { Container, Flex, Grid, Heading, Text } from 'theme-ui';
import VectorTopLeft from '../assets/VectorTopLeft.png';
import VectorTopRight from '../assets/VectorTopRight.png';
import VectorBottomLeft from '../assets/VectorBottomLeft.png';
import VectorBottomRight from '../assets/VectorBottomRight.png';
import SectionHeader from '../components/SectionHeader';
import arrowSrc from '../assets/arrow.png';
const workFlowData = [
  {
    title: 'Set disbursement Instructions',
    id:'01'
  },
  {
    title: 'Assembly retrieves funds from your account',
    id:'02'
  },
  {
    title: 'Assembly initiates disbursement',
    id:'03'
  },
  {
    title: 'Customer receives funds payment',
    id:'04'
  }  
]


const WorkFlow = () => {
  return (
    <div>
      <Container sx={styles.workFlow_wrapper}>
        <SectionHeader isWhite={true} slogan='WHATS THE FUNCTION' title='Let’s see how it works' />
        <Grid sx={styles.workFlow_content}>
        {
          workFlowData.map(({title,id}) => (
            <Flex sx={{
             minWidth: '200px',
             maxWidth:'100%',
             flexDirection:'column',
             gap: '2rem',
             '@media screen and (max-width:400px)': {
               flexDirection:'column'
             }
            }}
        key={id}      
            >
              <Flex className='workFlow_content_image' sx={styles.workFlow_content_image}>
              <Container sx={styles.workFlow_content_heading}>{id}</Container>
              <Image src={arrowSrc}  style={styles.workFlow_content_arrow}  alt={title} />
              </Flex>
      <Flex sx={{justifyContent:'space-between',flexDirection:'column',width:'80%'}}>
      <Heading as='h2' variant="featureCardHeading"  sx={{
        color: 'white',
        mb: 2,
       }}
      children={title}
      />
      <Text
        variant="featureCardText"
      sx={{
       color: 'white',
       opacity: 0.7,
        }}>
        Get your blood tests delivered at home collect a sample from the your blood tests.
        </Text>
        </Flex>
    </Flex>
          ))}
          </Grid>
      </Container>
    </div>
  )
}
const styles = {
  workFlow_wrapper: {
    p: '6rem 0 10rem',
    position:'relative',
    backgroundColor: 'primary',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left:0,
     backgroundImage: `url(${VectorTopLeft.src}), url(${VectorBottomLeft.src}), url(${VectorTopRight.src}), url(${VectorBottomRight.src}) `,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `20% 30%`,
    backgroundPosition: `left top, left bottom, right top, right bottom`,
    backgroundBlendMode: 'luminosity',
    opacity:0.3,
    width: '100%',
    height:'100%',
    '@media screen  and (max-width:700px)': {
       backgroundSize: `35% 20%`,
    },
    '@media screen  and (min-width:1100px)': {
      backgroundSize: `15% 40%`,
    }
   }
  },
  workFlow_content: {
    width: "80%",
    margin: '0 auto',
    placeItems: 'center',
    gridTemplateColumns: 'repeat(2,1fr)',
    '& div:nth-of-type(4) .workFlow_content_image img ': {
    display:'none'
    },
    '& div:nth-of-type(4) .workFlow_content_image': {
      placeSelf:'start'
    },
    '& div:nth-of-type(2n+1) .workFlow_content_image img': {
      transform: 'scaleY(-1)',
    },
    '& div:nth-of-type(2) .workFlow_content_image img': {
      placeSelf:'end'
    },
    '@media screen and (min-width:1170px)': {
      gridTemplateColumns: 'repeat(4,1fr)',
    },
    '@media screen and (max-width:600px)': {
      gridTemplateColumns: 'repeat(1,1fr)',
    },
    '@media screen and (max-width:1170px)': {
       '& div .workFlow_content_image img ': {
         display:'none'
      }
    }
  },
  workFlow_content_image: {
    justifyContent: 'space-between',
    
  },
  workFlow_content_heading: {
    lineHeight: 1.8,
    margin:'0',
    flexShrink: 0,
    backgroundColor: 'white',
    display: 'grid',
    placeItems: 'center',
    fontWeight: 700, 
    color: '#234582',
    width: '70px',
    height: '70px',
    borderRadius: '30px',
    fontSize: '30px',
    mb:'20px'
  },
  workFlow_content_arrow: {
    width: '70%',
    height:'50%'
  }
  } 
export default WorkFlow