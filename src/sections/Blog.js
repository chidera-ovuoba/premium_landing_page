/** @jsxImportSource theme-ui */
import Image from "next/future/image";
import { Box, Container, Flex, Grid, Heading, Text } from "theme-ui";
import SectionHeader from "../components/SectionHeader";
import blog1 from '../assets/paige-cody-ITTqjS3UpoY-unsplash 1.png';

const Blog = () => {
  return (
    <div>
    <Container sx={styles.blog_wrapper}>
              <SectionHeader slogan='OUR BLOG' title='Explore our products for your business solution' />
              <Flex>
                  <Container sx={styles.blog_card_container}>
                      <Image src={blog1} />
                      <Box sx={styles.blog_card_container_content}>
                          <Heading as='h2'>Product Marketing: Creative Market</Heading>
                          <Flex sx={{
                              justifyContent: 'space-between',
                              width: '100%',
                              alignItems:'center'
                          }}>
                          <Text as='span'>James Carter</Text>
                          <Text as='span'>Oct 20, 2020</Text>
                          </Flex>
                      </Box>
                  </Container>
                  </Flex>
      </Container>  
      </div>
  )
}

const styles = {
    blog_wrapper: {
    width: '80%',
    margin: '0 auto',
    p:"5rem 0"
    },
    blog_card_container: {
        border: "2px solid rgba(38, 78, 118, 0.1)",
        borderRadius: '10px',
        maxWidth: '400px',
        minWidth: '290px',
        boxShadow: 'rgb(38 78 118 / 12%) 0px 4px 10px',
        // height: '36em',
        position: 'relative',
        transition:'all 0.5s',
        ':hover': {
            boxShadow: 'rgb(38 78 118 / 10%) 0px 4px 25px',
            transform:'scale(1.1)'
        },
        'img': {
            width: '100%',
            borderRadius: '8px 8px 0 0 ',
            height: '257px',
            display:'flex'
        }
    },
    blog_card_container_content: {
        p: '1rem 2rem',
        'h2': {
        letterSpacing: '-0.55px',
        fontSize: '20px',
        width:'80%',
        color: 'heading',
        fontWeight: 700,
        lineHeight: 1.5,
        marginBottom: '25px',
        ':hover':{
            cursor: 'pointer',
            color:'primary'
        }  
        },
        'span:first-of-type': {
            color:'primary'
        }
    }
}
export default Blog