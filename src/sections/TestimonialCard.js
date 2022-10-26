/** @jsxImportSource theme-ui */
import Image from "next/future/image";
import { Box, Container, Flex, Grid, Heading, Text } from "theme-ui";
import SectionHeader from "../components/SectionHeader";
import rating from '../assets/star.png'
import ellipse from '../assets/Ellipse.png'
const TestimonialCard = () => {
  return (
    <div>
    <Container sx={styles.testimonial_wrapper}>
        <SectionHeader slogan='TESTIMONIAL' title='Meet Client Satisfaction' />
        <Flex>
          <Container sx={styles.testimonial_card_container}>
            <Flex sx={styles.testimonial_card}>
              <Image src={rating} />
              <Heading as='h2'>Modern look & trending design</Heading>
              <Text as='p'>
              Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.
              </Text>
              <Flex sx={styles.testimonial_card_profile}>
                <Image src={ellipse} />
                <Box sx={{
                  flexDirection: 'column',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  alignItems:'flex-start'
                }}>
                  <Heading as='h6'>Denny Hilguston</Heading>
                  <Text as='span'>@denny.hil</Text>
                </Box>
              </Flex>
              </Flex>
          </Container>
        </Flex>
    
      </Container>
    </div>
  )
}
const styles = {
  testimonial_wrapper: {
    width: '80%',
    margin: '0 auto',
    p:"5rem 0"
  },
  // teamSection_team_cards_grid: {
  //   gridTemplateColumns: 'repeat(3,1fr)',
  //   '@media screen and (min-width:1200px)': {
  //     gap:'2rem'
  //   },
  //   '@media screen and (max-width:1100px)': {
  //     gridTemplateColumns: 'repeat(2,1fr)',
  //   }
  // },
  testimonial_card_container: {
        border: "2px solid rgba(38, 78, 118, 0.1)",
        borderRadius: '10px',
        p: '4rem 2rem',
        maxWidth: '450px',
        minWidth: '290px',
        // height: '36em',
        position: 'relative',
        ':hover': {
            boxShadow: 'rgb(38 78 118 / 10%) 0px 4px 25px'
        }
  },
  testimonial_card: {
    flexDirection: 'column',
    gap: '2rem',
    ' & > img ': {
      height:'28px',
      width:'150px'
    },
    'h2': {
    letterSpacing: '-0.55px',
    fontWeight: '700',
    color: 'text',
    lineHeight: 1.6,
    fontSize: '22px'
    },
    'p': {
    color: 'text',
    lineHeight: 2,
    fontSize: '20px',
    }
  },
  testimonial_card_profile:{
    gap: '2rem',
    'h6': {
    letterSpacing: '-0.55px',
    fontWeight: 700,
    color: 'text',
    lineHeight: 1.3,
    fontSize: '22px',
    },
    'img': {
      width: '65px',
      height:'65px'
    },
    'span': {
    color: 'primary',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: 1.4
    }
  }
}
export default TestimonialCard