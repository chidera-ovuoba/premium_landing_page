import { ThemeProvider } from 'theme-ui';
import theme from '../src/themes'
import Layout from '../src/components/Layout';
import SEO from '../src/components/SEO';
import Banner from '../src/sections/Banner';
import KeyFeature from '../src/sections/KeyFeature';
import ServiceSection from '../src/sections/ServiceSection';
import Feature from '../src/sections/Feature';
import CoreFeature from '../src/sections/CoreFeature';
import WorkFlow from '../src/sections/WorkFlow';
import Package from '../src/sections/Package';
import TeamSection from '../src/sections/TeamSection';
import TestimonialCard from '../src/sections/TestimonialCard';
import NewsLetter from '../src/sections/NewsLetter';
import Blog from '../src/sections/Blog';
  
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard />
        <Blog/>
        <NewsLetter/>
      </Layout>
    </ThemeProvider>
    
  )
}
