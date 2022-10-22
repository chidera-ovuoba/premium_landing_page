/** @jsxImportSource theme-ui */
import { Container,Flex, Grid } from "theme-ui"
import SectionHeader from '../components/SectionHeader';
import FeatureCardColumn from '../components/FeatureCardColumn';
import Performance from '../assets/Group5.png';
import Partnership from '../assets/Group4.png';
import Subscription from '../assets/Group3.png';
import Support from '../assets/Group2.png';

const featureData = [
  {
    id: 1,
    src: Performance,
    title: 'Fast Performance',
    text:'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.'
  },
  {
    id: 2,
    src: Subscription,
    title: 'Pro Subscription',
    text:'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.'
  },
  {
    id: 3,
    src: Partnership,
    title: 'Partnership deal',
    text:'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.'
  },
  {
    id: 4,
    src: Support,
    title: 'Customer Support',
    text:'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.'
  },
]

const Feature = () => {
  return (
  <div sx={{ variant: 'section.feature' }} id='feature'>
      <Container sx={styles.section_features_container}>
        <SectionHeader
          slogan='QUALITY FEATURES'
          title='Amazing useful features'
        />
        <Grid sx={styles.grid_section_features}>
        {
            featureData.map((item) => (
              <FeatureCardColumn key={item.id} {...item} isColumn={false} width='95px' height='104px' />
          ))
        }
        </Grid>
      </Container>
    </div>
  )
}

const styles = {
  grid_section_features: {
    
    gap: '4rem',
    gridTemplateColumns:'repeat(2,minmax(250px,1fr))',
    '@media screen and (max-width:800px)': {
    gridTemplateColumns:'repeat(1,minmax(250px,400px))'
    }
  },
  section_features_container: {
    width: '80%',
    margin: '0 auto',
    
  }
}
export default Feature