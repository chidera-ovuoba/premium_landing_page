/** @jsxImportSource theme-ui */
import { Container, Flex, Grid } from "theme-ui";
import SectionHeader from "../components/SectionHeader";

const Blog = () => {
  return (
    <div>
    <Container sx={styles.blog_wrapper}>
              <SectionHeader slogan='OUR BLOG' title='Explore our products for your business solution' />
              <Flex>
                  <Container sx={styles.blog_card_container}>
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
        p: '4rem 2rem',
        maxWidth: '450px',
        minWidth: '290px',
        // height: '36em',
        position: 'relative',
        ':hover': {
            boxShadow: 'rgb(38 78 118 / 10%) 0px 4px 25px'
        }
    }
}
export default Blog