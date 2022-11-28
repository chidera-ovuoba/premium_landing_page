/** @jsxImportSource theme-ui */
import { Container, Grid,Text,Paragraph, Link } from "theme-ui"

import footerImg1 from '../../assets/Group (1).png'
import footerImg2 from '../../assets/Group.png'
import footerImg3 from '../../assets/Forma 1.png'
import logo from '../../assets/logo.png'
import Image from "next/image"

const footerData = [
  {
    title: 'Join the Community',
    img: footerImg1
  },
  {
    title: 'Chat Communication',
    img: footerImg2
  },
  {
    title: 'Github Access',
    img: footerImg3
  }
]


const Footer = () => {
  return (
    <footer style={{width:'100%'}} >
      <Container sx={styles.footer_inner_container}>
        <Grid columns={[1,null,null,2,3]} sx={styles.footerCard} gap='2.5rem'>
          {
            footerData.map(({title,img}) => (
              <div style={{ textAlign: 'center' }} key={title.trim()}>
                <Image src={img} width={50} height={50} alt={title} />
                <Container sx={{marginTop:'2rem'}}>
                  <Text sx={styles.heading3}>{title}</Text>
                  <Paragraph sx={styles.pTag}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid in fugit!
                  </Paragraph>
                </Container>
              </div>
            ))
          }
        </Grid>
        <Grid sx={styles.footerBottom}>
          <Link href="/" sx={{ width: '100%' }}><Image src={logo} sx={{ maxWidth: '100%', height: 'auto' }} alt='Landguru' /></Link>
          <div style={{ margin: '0'}}>
            <nav style={styles.footerNav}>
              {['Home', 'Advertise', 'Supports', 'Marketing', 'Contact'].map((item) => (
                <Link href="/" key={item} sx={styles.footerNavLink}>{item}</Link>
            ))}
            </nav>
          </div>
          <p style={{fontSize:'1rem'}}>Copyright by 2022 RedQ, Inc</p>
       </Grid>
      </Container>
    </footer>
  )
}

const styles = {
  footer_inner_container: {
    width:'85%',
    margin:'0 auto'    
  },
  footerCard: {
    p: '6rem 1.5rem',
    placeItems:'center',
    '& div': {
      maxWidth: '270px',
      
    }
  },
  heading3: {
    color: 'heading_secondary',
    lineHeight: 1.4,
    fontWeight: 700,
    marginBottom: '1rem',
    display:'inline-block',
    fontSize: '1.4rem'
    
  },
  pTag: {
    lineHeight: 2,
    fontWeight: 400,
    fontSize: '1rem',
    fontFamily: 'font',
    wordSpacing:'0.20em'
  },
  footerBottom: {
    textAlign: 'center',
    borderTop: '2px solid #E5ECF4',
    p:'5rem 0'
  },
  footerNav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
   footerNavLink: {
      transition: 'all 0.35s ease',
      color: 'text',
      fontWeight: 400,
      cursor: 'pointer',
      fontSize: '15px',
      lineHeight: 1.8,
      p: ' 0.5rem 1.3rem',
      '&:hover': {
        color:'primary'
      }
    }
}




export default Footer