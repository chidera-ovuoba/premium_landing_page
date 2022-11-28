/** @jsxImportSource theme-ui */
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import { keyframes } from '@emotion/react';
import { Box, Button, Container, Flex, Grid, Heading, Text } from 'theme-ui';
import { useEffect, useRef } from 'react';

const PriceCard = ({ listdata, period,id,title,subtitle,pricing,buttonText,isAvailable,isSuggested }) => {
    const cardContent = useRef(null);
    const cardHeader = useRef(null);

    useEffect(() => {
        if (period === 'Annual Plan') {
            cardContent.current.classList.remove('price_card_container_content_monthly')
            cardHeader.current.classList.remove('price_card_container_header_monthly')
            cardContent.current.classList.add('price_card_container_content_annually')
            cardHeader.current.classList.add('price_card_container_header_annually')
        }
        if (period === 'Monthly Plan') {
            cardContent.current.classList.remove('price_card_container_content_annually')
            cardHeader.current.classList.remove('price_card_container_header_annually')
            cardContent.current.classList.add('price_card_container_content_monthly')
            cardHeader.current.classList.add('price_card_container_header_monthly')
        }
    }, [period])
    return (
        <Container sx={styles.price_card_wrapper} >
        <Container sx={styles.price_card_container} >
        <Box ref={cardHeader} sx={{mb: '2rem'}}>
        <Heading sx={styles.price_card_container_heading2}>{title}</Heading>
        <Text sx={styles.price_card_container_paragraph}>{subtitle}</Text>
          </Box>
          <Box ref={cardContent}>
          <Grid sx={styles.price_card_container_pricing_features}>
                  {listdata.map(({ name, icon }) => <Flex sx={styles.price_card_container_pricing_features_feature} key={name}>
                  {icon}
                  <Text as='p'>{name}</Text>
              </Flex>)}
          </Grid>
          <Container sx={{
              textAlign: "center",
              fontSize: '30px',
              color: 'text',
              mb:'30px'
          }}>
          <span sx={{
              fontWeight:'700'  
            }}>{pricing.split('/')[0]}</span>
            /{pricing.split('/')[1]}
            </Container>
            <Box sx={{
                display: 'grid',
                placeItems: 'center',
                mb:'1rem'
            }}>
            <Button variant='primary'>{buttonText}</Button>
            </Box>
            {isAvailable && <Button variant='textButton' sx={{
                display: 'grid',
                placeItems: 'center',
                width: '100%'
            }}>Or Start 14 Days trail</Button>}
            </Box>
            {isSuggested &&<Box sx={styles.price_card_container_tag}>Suggested</Box>}
            </Container>
            </Container>
            )
        }
        
        const styles = {
        
            price_card_wrapper: {
            height: '37em',
            display: 'grid',
            placeItems: 'center',
            maxWidth: '400px',
            minWidth: '300px',
            whiteSpace:'nowrap',
            mx:'10px'
            },
            
        price_card_container: {
        border: "2px solid rgba(38, 78, 118, 0.1)",
        borderRadius: '20px',
        p: '4rem 2rem',
        maxWidth: '400px',
        minWidth: '300px',
        whiteSpace:'nowrap',
        height: '95%',
        // mx:'10px',
        position: 'relative',
        ':hover': {
            boxShadow: 'rgb(38 78 118 / 10%) 0px 4px 25px'
        }
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