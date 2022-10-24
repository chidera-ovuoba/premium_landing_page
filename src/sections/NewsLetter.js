/** @jsxImportSource theme-ui */
import { Button, Container, Flex, Grid, Input, Text } from 'theme-ui'

const NewsLetter = () => {
    return (
        <Container sx={styles.newsLetter_section}>
            <Container>
            <Grid sx={styles.newsLetter_section_grid} gap='1rem'>
                
                <Text sx={styles.newsLetter_section_grid_h2}>
                Subscribe to our Blog
                </Text>
                <Text sx={styles.newsLetter_section_grid_p}>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor incididunt labore dolore.</Text>
                <Flex sx={styles.newsLetter_section_grid_input_container}>
                <Input type="email" id="email" sx={styles.newsLetter_section_grid_input} name="email" placeholder="Enter your email address" />
                    <Button type="submit" sx={styles.subscribe__btn}>Subscribe</Button>
                    </Flex>
                    
            </Grid>
            </Container>
        </Container>
  )
}

const styles = {
    newsLetter_section: {
        width: '80%',
        margin: '0 auto',
    },
    newsLetter_section_grid: {
        p: '6rem 0',
        textAlign: 'center',
        backgroundColor: 'primary',
        borderRadius: '10px',

    },  
    newsLetter_section_grid_h2: {
    color: 'background',
    placeSelf:'center',
    fontWeight: 700,
    marginBottom: '15px',
    letterSpacing: '-1.5px',
    lineHeight: 1.25,
    fontSize: '36px',
    '@media screen and (max-width:460px)': {
        fontSize: '26px',
        letterSpacing: '1px',
        fontWeight: 600
    },
    '@media screen and (max-width:300px)': {
        fontSize: '18px',
        width:'90%',
        fontWeight: 600
    },
    
    },
    newsLetter_section_grid_p: {
    placeSelf:'center',
    color: 'background',
    p: '0rem 1.5rem',
    lineHeight: 2,
    fontSize: '18px',
    width:'60%',
    '@media screen and (max-width:800px)': {
            width:'80%'
    },
    '@media screen and (max-width:600px)': {
            width:'90%'
    }
    },
    newsLetter_section_grid_input_container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        margin: '0 auto',
        width: '55%',
        mt: '1rem',
        flexDirection: 'column',
        gap:'1rem',
        '@media screen and (max-width:800px)': {
            width:'80%'
        },
        '@media screen and (max-width:600px)': {
            width:'90%'
        },
        '@media screen and (max-width:500px)': {
            width:'80%'
        }
    },
    newsLetter_section_grid_input: {
    width: '100%',
    appearance: 'none',
    borderRadius: '50px',
    fontWeight: 500,
    color: 'heading',
    p:'2.2rem 2rem',
    backgroundColor: 'background',
    textAlign: 'left',
    fontSize: '16px',
    height: '60px',
    outline:0,
    border:0,
    '&::placeholder':{
      fontSize: '16px',
      fontWeight: 600,
      color: 'primary',  
    },
    '@media screen and (max-width:600px)': {
        pl:'1.2rem'
    }
    },

    subscribe__btn: {
    position:'absolute',
    right:'10px',
    appearance: 'none',
    display: 'inline-block',
    textDecoration: 'none',
    borderRadius: '45px',
    cursor: 'pointer',
    lineHeight: 1.2,
    transition: 'all 0.25s',
    fontWeight: 500,
    color: 'white',
    padding: '1.2rem 1.9rem',
    fontSize: '16px',
    flexShrink: 0,
    marginLeft: '10px',
    backgroundColor: 'primary',
    marginTop: 0,
     '&:hover':{
        boxShadow: 'rgb(233 76 84 / 57%) 0px 9px 20px -5px'
    },
    '@media screen and (max-width:500px)': {
        position: 'static',
        width: '100%',
        backgroundColor: 'heading',
    }
     
     
    }

}

export default NewsLetter