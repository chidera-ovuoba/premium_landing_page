/** @jsxImportSource theme-ui */
import { Container,Flex, Grid } from "theme-ui"
import SectionHeader from '../components/SectionHeader';
import FeatureCardColumn from '../components/FeatureCardColumn';
import Performance from '../assets/Group5.png';
import Partnership from '../assets/Group4.png';
import Subscription from '../assets/Group3.png';
import Support from '../assets/Group2.png';

const keyFeatureData = [
  {
    id: 1,
    src: Performance,
    title: 'Fast Performance',
    text:'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    id: 2,
    src: Partnership,
    title: 'Partnership deal',
    text:'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    id: 3,
    src: Subscription,
    title: 'Pro Subscription',
    text:'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    id: 4,
    src: Support,
    title: 'Customer Support',
    text:'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
]


const KeyFeature = () => {
  return (
    <div sx={{ variant: 'section.keyFeature' }} id='feature'>
      <Container sx={styles.section_key_features_container}>
        <SectionHeader
          slogan='WHATS THE FUNCTION'
          title='Meet the feature of product'
        />
        <Grid sx={styles.grid_section_features}>
        {
            keyFeatureData.map((item) => (
              <FeatureCardColumn key={item.id} {...item} isColumn={true} width='96px' height='104px' />
          ))
        }
        </Grid>
      </Container>
    </div>
  )
}

const styles = {
  grid_section_features: {
    placeContent:'center',
    gap: '4rem',
    gridTemplateColumns:'repeat(2,minmax(250px,100%))',
    '@media screen and (min-width:1600px)': {
    gridTemplateColumns:'repeat(4,minmax(250px,400px))'
    },
    '@media screen and (max-width:730px)': {
    gridTemplateColumns:'repeat(1,minmax(250px,400px))'
    }
  },
  section_key_features_container: {
    width: '80%',
    margin:'0 auto'
  }
}

export default KeyFeature