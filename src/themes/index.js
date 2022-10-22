export default {
  colors: {
    text: '#343D48',
    text_secondary: '#02073E',
    heading: '#0F2137',
    background: '#fff',
    background_secondary: '#f9fbfd',
    border_color: '#e5ecf4',
    yellow: '#ffa740',
    primary: '#ea3a60',
    secondary: '#2563FF',
    muted: '#E4E4E4',
    accent: '#609',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      }
    }
  },
  breakpoints: [
    '480px',
    '640px',
    '768px',
    '960px',
    '1024px',
    '1220px',
    '1366px',
    '1620px',
  ],
  fonts: {
    heading: "'DM Sans',sans-serif"
  },
  fontSizes: [12, 15, 16, 20, 22, 24, 28, 32, 36, 42, 48],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    nav: 1.2,
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  buttons: {
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '1rem 2.5rem'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0,
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px',
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px',
      }
    },
    secondary: {
      color: 'primary',
      bg: 'transparent',
      fontSize: '14px',
      letterSpacing: '-0.15px',
      p: '0.8rem 1.3rem',
      cursor: 'pointer',
      transition: 'all 0.8s',
      fontWeight: 500,
      border: '2px solid #EA3A60',
      borderRadius: '3rem',
      '&:hover': {
        color: 'background',
        bg: 'primary'
      },
      '@media screen and (min-width:520px)': {
        p: '0.7rem 2.2rem'
      },
      '@media screen and (max-width:300px)': {
        p: '0.4rem 0.8rem',
        fontSize: '11px'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2,
      }
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading',
    },
    heroPrimary: {
      color: 'heading',
      fontSize: [
        '32px',
        '36px',
        '42px',
        '40px',
        '42px',
        '52px',
        '58px',
        '66px',
      ],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb:'1rem',
    },
    heroSecondary: {
      fontSize: [2, null, '17px', null, null, '19px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: '1rem',
      color: 'heading',
    },
    featureCardHeading: {
    letterSpacing: '-.55px',
    fontSize: '18px',
    color: 'secondary',
    lineHeight: 1.4,
    fontWeight: 700,
    },
    featureCardText: {
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: 1.9
    }
   
  },
  section: {
    keyFeature: {
      py: '10rem',
    },
    feature: {
      pb: '3rem',
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
    },
    coreFeature: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
      overflow: 'hidden',
    },
    testimonial: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '190px'],
      overflow: 'hidden',
    },
    services: {
      pb: ['90px', null, 9, null, null, 10, null, '150px'],
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px'],
    },
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'column',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      fontWeight: '700',
      letterSpacing: '-.5px',
    },

    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5,
    }
  },
  styles: {
    root: {
    fontFamily: '"DM Sans", sans-serif',
    lineHeight: 1.8,
    fontWeight: 'normal',
    }
  }

}
