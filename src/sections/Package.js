/** @jsxImportSource theme-ui */
import { useRef, useState } from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import { Box, Button, Container } from 'theme-ui';
import SectionHeader from '../components/SectionHeader';
import PriceCard from '../components/PriceCard';
import CarouselWrapper from '../components/CarouselWrapper';

const Package = () => {
  const ButtonLeftRef = useRef(null)
  const ButtonRightRef = useRef(null)
  const [period, setPeriod] = useState('Monthly Plan');
  const PriceCardData = {
    priceData: [
      {
        id: 1,
        title: 'Free Plan',
        subtitle: 'For Small teams or office',
        pricing: `${ period ==='Annual Plan'? '$0/Annually': "$0/Monthly"}`,
        buttonText: "Start free trial",
        isAvailable: false,
        isSuggested: false,
        listdata: [
      {
        name: 'Drag & Drop Builder',
        icon: period === 'Annual Plan' ? <MdCancel/>: <RiCheckboxCircleFill/>
      },
      {
        name: "1,000's of Templates",
        icon:<RiCheckboxCircleFill/>
      },
      {
        name: 'Blog Support Tools',
        icon:<RiCheckboxCircleFill/>
      },
      {
        name: 'eCommerce Store',
        icon: period === 'Annual Plan' ?  <RiCheckboxCircleFill/> : <MdCancel/>
      }
     ]
      },
      {
        id: 2,
        title: 'Business king',
        subtitle: 'For Enterprise business',
        pricing: `${ period ==='Annual Plan'? '$25/Annually': "$15/Monthly"}`,
        buttonText: "Create account",
        isAvailable: true,
        isSuggested: false,
        listdata: [
      {
        name: 'Drag & Drop Builder',
        icon:<RiCheckboxCircleFill/>
      },
      {
        name: "1,000's of Templates",
        icon:<RiCheckboxCircleFill/>
      },
      {
        name: 'Blog Support Tools',
        icon:<RiCheckboxCircleFill/>
      },
      {
        name: 'eCommerce Store',
        icon:<RiCheckboxCircleFill/>
      }
     ],
      },
      {
        id: 3,
        title: 'Pro Master',
        subtitle: 'For pro level developers',
        pricing:`${ period ==='Annual Plan'? '$39/Annually': "$24/Monthly"}`,
        buttonText: "Create account",
        isAvailable: true,
        isSuggested: true,
        listdata: [
      {
        name: 'Drag & Drop Builder',
        icon:<RiCheckboxCircleFill/>
      },
      {
        name: "1,000's of Templates",
        icon:<RiCheckboxCircleFill/>
      },
      {
        name: 'Blog Support Tools',
        icon:<RiCheckboxCircleFill/>
      },
      {
        name: 'eCommerce Store',
        icon:<RiCheckboxCircleFill/>
      }
     ],
      }
]
}
  
  const handleButtonClick = (e) => {
    e.preventDefault()
    if (e.target.innerHTML === 'Annual Plan') {
      ButtonRightRef.current.classList.add('active')
      ButtonLeftRef.current.classList.remove('active')
      setPeriod('Annual Plan')
    }
    if (e.target.innerHTML === 'Monthly Plan') {
      ButtonLeftRef.current.classList.add('active')
      ButtonRightRef.current.classList.remove('active')
      setPeriod('Monthly Plan')
    }
    

  }
  return (
    <div id='pricing'>
      <Container sx={styles.pricing_section_container} >
        <Box sx={styles.pricing_section_wrapper}>
          <SectionHeader slogan='PRICING PLAN' title='Choose your pricing policy' />
          <Box sx={styles.pricing_section_filters_container}>
          <div sx={styles.pricing_section_filters}>
          <Button type='button' sx={styles.pricing_section_filters_btn} onClick={handleButtonClick} ref={ButtonLeftRef} className='active'>Monthly Plan</Button>    
          <Button type='button' sx={styles.pricing_section_filters_btn} onClick={handleButtonClick} ref={ButtonRightRef}>Annual Plan</Button>    
            </div>
          </Box>
          <CarouselWrapper removeButton={true}>
          {
            PriceCardData.priceData.map((data) => <PriceCard {...data} period={period} key={data.id}/>)
          }
          </CarouselWrapper>
          </Box>
      </Container>
    </div>
  )
}

const styles = {
  pricing_section_container: {
    margin:'4rem 0'
  },
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