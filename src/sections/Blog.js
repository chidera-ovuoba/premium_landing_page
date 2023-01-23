/** @jsxImportSource theme-ui */
import Image from "next/future/image";
import { Box, Container, Flex, Grid, Heading, Text } from "theme-ui";
import SectionHeader from "../components/SectionHeader";
import blog1 from '../assets/paige-cody-ITTqjS3UpoY-unsplash 1.png';
import blog2 from '../assets/mimi-thian-i5cd_SlY8XY-unsplash 1.png';
import blog3 from '../assets/mimi-thian-GXEcTqlZHno-unsplash 1.png';
import CarouselWrapper from "../components/CarouselWrapper";

const blogData = [
    {
        id:1,
        img: blog1,
        title: 'Product Marketing: Creative Market',
        name: "James Carter",
        date:"Oct 20,2020"
    },
    {
        id:2,
        img: blog2,
        title: 'Product Marketing: Monoploy Market',
        name: "Cali Cartel",
        date:"Oct 20,2020"
    },
    {
        id:3,
        img: blog3,
        title: 'Product Marketing: Startup Product Sales',
        name: "Aston Aagar",
        date:"Oct 20,2020"
    },
    {
        id:4,
        img: blog1,
        title: 'Product Marketing: Creative Market',
        name: "James Carter",
        date:"Oct 20,2020"
    }
]
const Blog = () => {
  return (
    <>
    <Container sx={styles.blog_wrapper}>
              <SectionHeader slogan='OUR BLOG' title='Explore our products for your business solution' />
              <CarouselWrapper style={{height:'450px',alignItems:'center'}}>
                  {blogData.map(({ date, img, name, title, id }) => <Container sx={styles.blog_card_container} key={id} className='blog'>
                       <Box>
                          <Image src={img} alt={name} />
                          </Box>
                      <Box sx={styles.blog_card_container_content}>
                          <Heading as='h2'>{title}</Heading>
                          <Flex sx={{
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              flexWrap: 'wrap',
                              gap:'10px'
                          }}>
                          <Text as='span'>{name}</Text>
                          <Text as='span'>{date}</Text>
                          </Flex>
                      </Box>
                  </Container>)}
                  </CarouselWrapper>
      </Container>  
      </>
  )
}

const styles = {
    blog_wrapper: {
    width: '80%',
    margin: '0 auto',
    p:"5rem 0",
    },
    blog_card_container: {
        border: "2px solid rgba(38, 78, 118, 0.1)",
        borderRadius: '10px',
        width: '400px',
        minWidth: '400px',
        height:'392px',
        boxShadow: 'rgb(38 78 118 / 12%) 0px 4px 10px',
        transition: 'all 0.5s',
        whiteSpace:'nowrap',
        mx: '10px',
         '@media screen and (max-width:520px)': {
           minWidth: '324px',
        },
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
        whiteSpace:'normal',
        color: 'heading',
        fontWeight: 700,
        lineHeight: 1.5,
        marginBottom: '25px',
        '@media screen and (max-width:330px)': {
           fontSize: '15px',
          },
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