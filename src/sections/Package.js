/** @jsxImportSource theme-ui */
import { useRef } from 'react';
import { Box, Button, Container } from 'theme-ui';
import SectionHeader from '../components/SectionHeader';
import PriceCard from '../components/PriceCard';

const Package = () => {
  const ButtonLeftRef = useRef(null)
  const ButtonRightRef = useRef(null)

  const handleButtonClick = (e) => {
    e.preventDefault()
    if (e.target.innerHTML === 'Annual Plan') {
      ButtonRightRef.current.classList.add('active')
      ButtonLeftRef.current.classList.remove('active')
    }
    if (e.target.innerHTML === 'Monthly Plan') {
      ButtonLeftRef.current.classList.add('active')
      ButtonRightRef.current.classList.remove('active')
    }
    

  }
  return (
    <div>
      <Container variant='section.pricing'>
        <Box sx={styles.pricing_section_wrapper}>
          <SectionHeader slogan='PRICING PLAN' title='Choose your pricing policy' />
          <Box sx={styles.pricing_section_filters_container}>
          <div sx={styles.pricing_section_filters}>
          <Button type='button' sx={styles.pricing_section_filters_btn} onClick={handleButtonClick} ref={ButtonLeftRef}>Monthly Plan</Button>    
          <Button type='button' sx={styles.pricing_section_filters_btn} onClick={handleButtonClick} ref={ButtonRightRef}>Annual Plan</Button>    
            </div>
          </Box>
          <PriceCard/>
        </Box>
      </Container>
    </div>
  )
}

const styles = {
  pricing_section_wrapper: {
    width: '80%',
    margin:'0 auto'
  },
  pricing_section_filters_container: {
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    marginBottom:'4rem'
  },
  pricing_section_filters: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB'
  },
  pricing_section_filters_btn: {
    border: '0',
    borderRadius: '5px',
    lineHeight: '1.2',
    fontWeight: '500',
    cursor: 'pointer',
    letterSpacing: '-0.24px',
    transition: 'all 0.3s ease',
    backgroundColor:'transparent',
    padding: '15px 27px',
    fontSize: '16px',
    color: '#0f2137',
    '&.active': {
      transition: 'all 0.3s ease',
      backgroundColor:'#ffffff',
      boxShadow:' 0 3px 4px rgba(38,78,118,0.1)',
      
    }
  }
}

export default Package