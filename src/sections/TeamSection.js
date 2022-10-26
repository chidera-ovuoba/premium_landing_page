/** @jsxImportSource theme-ui */
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/SectionHeader";
import TeamCard from "../components/TeamCard";
const TeamSection = () => {
  return (
    <div>
      <Container sx={styles.teamSection_wrapper}>
        <SectionHeader slogan='OUR TEAM' title='The most qualified and talented individuals' />
        <Grid sx={styles.teamSection_team_cards_grid}>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
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