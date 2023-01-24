/** @jsxImportSource theme-ui */
import Image from 'next/future/image'
import { Box, Container, Grid, Heading, IconButton, Text } from 'theme-ui';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram,BsTwitter } from 'react-icons/bs';


const TeamCard = ({name,title,img}) => {
  return (
      <Container sx={styles.team_card_wrapper}>
          <Image src={img} alt={name} />
          <Box sx={{ marginTop: '1.5rem' }}>
              <Heading as='h2'>{name}</Heading>
              <Text as='p'>{title}</Text>
          </Box>
          <Grid sx={styles.social_icons_grid}>
              <IconButton><FaFacebookF/></IconButton>
              <IconButton><BsTwitter/></IconButton>
              <IconButton><BsInstagram/></IconButton>
          </Grid>
      </Container>
  )
}

const styles = {
    team_card_wrapper: {
    color: '#343D48',
    lineHeight: '1.8',
    transition: 'all ease 0.4s',
    borderRadius: '8px',
    position: 'relative',
    display:'grid',
    placeItems:'center',
    padding:"2rem 4.5rem",
    '@media screen and (max-width:720px)': {
           padding:"2rem 3rem",
    },
    '@media screen and (max-width:600px)': {
           padding:"2rem 1.5rem",
    },
    '@media screen and (max-width:400px)': {
           padding:"2rem .6rem",
    },
    'img':{
        width:['60px','80px','100px', null,'120px',null,'150px'],
        height:['60px','80px','100px', null,'120px',null,'150px']
    },
    'h2': {
    textAlign: 'center',
    letterSpacing: '-.55px',
    color: '#0F2137',
    fontWeight: 700,
    transition: 'color 0.5s',
    marginBottom: '5px',
    lineHeight: 1.35,
    fontSize: '20px',
    },
    'p':{
    textAlign: 'center',
    lineHeight: 1.5,
    color: '#343D48',
    transition: 'color 0.5s',
    fontSize: '16px',
},
//  '& div:last-of-type': {
    
//   transition:'all 0.4s ease',
// },
':hover div:last-of-type':{
    transition:'all 0.4s ease',
    transform: "scaleY(1)",
    opacity:1
    
    },
    ':hover':{
        boxShadow: '0 4px 10px rgb(39 83 123 / 12%)',
        '@media screen and (max-width:950px)': {
            padding:"2rem .6rem",
            boxShadow: 'unset',
        }
    },
    '&:hover h2,button':{
        color:'#ea3a60'
    },
    '&:hover p':{
        color:'#ea3a60'
    }
    },
    social_icons_grid: {
        position: 'absolute',
        bottom: '30px',
        right: '25px',
        transition:'all 0.4s ease',
        transform: "scaleY(0)",
        opacity:0,
        transformOrigin: '0% bottom',
        '@media screen and (max-width:950px)': {
            position: 'static',
            opacity:1,
            gridTemplateColumns: 'repeat(3,1fr)',
            transform: 'unset',
            marginTop:'1.5rem'
        },
        'button': {
            padding: 0,
            width: 'unset',
            height: 'unset',
            '&:hover': {
                cursor: 'pointer',
                color:'#0F2137'
            },
        
        'svg':{
            fontSize: '18px',
            '@media screen and (min-width:1200px)': {
             fontSize: '22px',
            }
        }
        }
    }
}

export default TeamCard