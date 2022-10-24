/** @jsxImportSource theme-ui */
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import { Box, Button, Container, Flex, Grid, Heading, Text } from 'theme-ui';

const PriceCard = () => {
  return (
      <Container sx={styles.price_card_container}>
          <Box sx={styles.price_card_container_header}>
              <Heading sx={styles.price_card_container_heading2}>Free Plan</Heading>
              <Text sx={styles.price_card_container_paragraph}>For Small teams or office</Text>
          </Box>
          <Grid sx={styles.price_card_container_pricing_features}>
              <Flex sx={styles.price_card_container_pricing_features_feature}>
                  <RiCheckboxCircleFill />
                  <Text as='p'>1,000's of Templates</Text>
              </Flex>
              <Flex sx={styles.price_card_container_pricing_features_feature}>
                  <RiCheckboxCircleFill />
                  <Text as='p'>1,000's of Templates</Text>
              </Flex>
              <Flex sx={styles.price_card_container_pricing_features_feature}>
                  <RiCheckboxCircleFill />
                  <Text as='p'>1,000's of Templates</Text>
              </Flex>
              <Flex sx={styles.price_card_container_pricing_features_feature}>
                  <RiCheckboxCircleFill />
                  <Text as='p'>1,000's of Templates</Text>
              </Flex>
          </Grid>
          <Container sx={{
              textAlign: "center",
              fontSize: '30px',
              color: 'text',
              mb:'30px'
          }}>
            <span sx={{
             fontWeight:'700'  
              }}>$0</span>
              /Monthly
          </Container>
          <Box sx={{
              display: 'grid',
              placeItems: 'center',
              mb:'1rem'
          }}>
              <Button variant='primary'>Start free trail</Button>
          </Box>
          <Button variant='textButton' sx={{
              display: 'grid',
              placeItems: 'center',
              width:'100%'
          }}>Or Start 14 Days trail</Button>
          <Box sx={styles.price_card_container_tag}>Suggested</Box>
      </Container>
  )
}

const styles = {
    price_card_container: {
        border: "2px solid rgba(38, 78, 118, 0.1)",
        borderRadius: '20px',
        p: '4rem 2rem',
        maxWidth: '400px',
        minWidth: '290px',
        height: '36em',
        position: 'relative',
        ':hover': {
            boxShadow: 'rgb(38 78 118 / 10%) 0px 4px 25px'
        }
    },
    price_card_container_header: {
        mb:'2rem'
    },
    price_card_container_heading2: {
    lineHeight: '1.25',
    fontWeight: '700',
    letterSpacing: '-0.55px',
    color: '#0F2137',
    fontSize: '20px',
    marginBottom: '10px'
    },
    price_card_container_paragraph: {
    color: 'text',
    lineHeight: '1.5',
    fontSize: '16px',
    },
    price_card_container_pricing_features: {
        mb: '2rem',
        gap:'1rem',
    },
    price_card_container_pricing_features_feature: {
        gap: '1rem',
        'svg': {
            width: '1.6rem',
            height: '1.6rem',
            color:'primary'
        },
        'p': {
            fontSize: '1.2rem',
            lineHeight:1.3
        }
    },
    price_card_container_tag: {
        position: 'absolute',
        top: 0,
        left: "10%",
        backgroundColor:'yellow',
        borderRadius: '5px',
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: 1.2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'absolute',
        top: '-17px',
        letterSpacing: '-0.14px',
        paddingLeft: '12px',
        paddingRight: '12px',
        height: '32px',
    }
}
export default PriceCard