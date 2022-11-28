/** @jsxImportSource theme-ui */
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/SectionHeader";
import TeamCard from "../components/TeamCard";
 import team1 from '../assets/team1.png'
 import team2 from '../assets/Ellipse 1 (2).png'
 import team3 from '../assets/Ellipse 1 (3).png'
 import team4 from '../assets/Ellipse 1 (4).png'
 import team5 from '../assets/Ellipse 1 (5).png'
 import team6 from '../assets/Ellipse 1.png'
const teamCardData = [
  {
    id:1,
    img: team1,
    name: 'Saimon Harmer',
    title:'CEO and Founder'
  },
  {
    id:2,
    img: team2,
    name: 'Aaron Nunez',
    title:'Founder'
  },
  {
    id:3,
    img: team3,
    name: 'Aaron Nunez',
    title:'Web Designer'
  },
  {
    id:4,
    img: team4,
    name: 'Lina Jutila',
    title:'Web Developer'
  },
  {
    id:5,
    img: team5,
    name: 'Saimon Harmer',
    title:'Web Developer'
  },
  {
    id:6,
    img: team6,
    name: 'Aaron Nunez',
    title:'Web Designer'
  },
]

const TeamSection = () => {
  return (
    <div>
      <Container sx={styles.teamSection_wrapper}>
        <SectionHeader slogan='OUR TEAM' title='The most qualified and talented individuals' />
        <Grid sx={styles.teamSection_team_cards_grid}>
          {teamCardData.map((item) => < TeamCard {...item} key={item.id}/>) }
     
        </Grid>
      </Container>
    </div>
  )
}
const styles = {
  teamSection_wrapper: {
    width: '80%',
    margin: '0 auto',
    p:"3rem 0"
  },
  teamSection_team_cards_grid: {
    gridTemplateColumns: 'repeat(3,1fr)',
    '@media screen and (min-width:1200px)': {
      gap:'2rem'
    },
    '@media screen and (max-width:1100px)': {
      gridTemplateColumns: 'repeat(2,1fr)',
    }
  }
}

export default TeamSection