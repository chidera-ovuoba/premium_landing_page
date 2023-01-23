/** @jsxImportSource theme-ui */
import { Box, Container, Flex } from "theme-ui";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useCallback, useEffect, useRef, useState } from "react";
// import Carousel from "react-multi-carousel";

const ButtonGroup = ({removeButton }) => {
 
  return <Flex sx={{
    width: "100%", justifyContent: 'center', alignItems: 'center', height: "100%", mt: "60px",
   '@media screen and (min-width:1350px)': {
     display: removeButton ? 'none' : 'flex'

    },
    '@media screen and (min-width:2100px)': {
       display:'none'
    }
  }} >
      <Container>
        <Box className="button__group" sx={styles.buttonGroup}>
          <button  aria-label="Previous">
            <IoIosArrowRoundBack />
          </button>
          <button  aria-label="Next">
            <IoIosArrowRoundForward />
          </button>
        </Box>
      </Container>
    </Flex>
}

const CarouselWrapper = ({ children,removeButton,style }) => {

  const containerRef = useRef(null);
   const buttonGroupRef = useRef(null);
  const [startScroll, setStartScroll] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  
  useEffect(() => {
    const container = containerRef.current;
    const clickRight = () => {
      container.scrollLeft += 30
      // !startScroll && setStartScroll(true)
      // setScrollLeft((prev) =>!prev)
    }
    const clickLeft = () => {
      const container = containerRef.current;
      container.scrollLeft -= 40
      // !startScroll && setStartScroll(true)
      // setScrollLeft((prev) =>!prev)
    }
    buttonGroupRef.current.children[1].children[0].children[0].children[1].addEventListener('click', () => {
     clickRight()
    })
      buttonGroupRef.current.children[1].children[0].children[0].children[0].addEventListener('click', () => {
       clickLeft()
      })
  }, [])
  
  
  useEffect(() => { 
      const container = containerRef.current;
    container.scrollLeft -= container.scrollLeft - 11;
    // setWindowWidth(window.innerWidth)
    // // window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    // // return () => {
    //   // window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
      
    // // }
    }, [])
  
  useEffect(() => {
    
    const container = containerRef.current
    const galleryItems = containerRef.current.querySelectorAll('.testimonial')
    const blogItems = containerRef.current.querySelectorAll('.blog')
    // const observer = new IntersectionObserver(function (entries) {
    //   if (entries[0].isIntersecting !== true) {
    //     // console.log(Math.abs(container.scrollLeft) > entries[0].target.clientWidth)
    //     if (entries[0].target === container.firstChild) {
    //          entries[0].target.nextSibling.nextSibling.nextSibling.insertAdjacentElement("afterend",entries[0].target );
    //       container.scrollLeft -= entries[0].target.clientWidth;
    //       }
    //   }
    //   }, { threshold: [0],root:container });
    
    const observerLeft = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
          if (container.scrollLeft <= 0 || 10 && entries[0].target === container.firstChild) {
           entries[0].target.insertAdjacentElement("beforebegin", entries[0].target.nextSibling.nextSibling.nextSibling);
          container.scrollLeft += entries[0].target.clientWidth + 10;
          } 
        if (container.scrollLeft >= container.scrollLeft - entries[0].target.clientWidth + 20 && entries[0].target === container.lastChild) {
          entries[0].target.insertAdjacentElement("afterend", entries[0].target.previousSibling.previousSibling.previousSibling);
          container.scrollLeft -= entries[0].target.clientWidth;
          } 
        }
    }, { threshold: window.innerWidth < 420 ? [0.6,1]:[1],root:container});
    
    //  galleryItems.forEach(item=>observer.observe(item))
    window.innerWidth < 2000 &&  galleryItems.forEach(item=>observerLeft.observe(item))
    //  blogItems.forEach(item=>observer.observe(item))
     window.innerWidth < 2000 && blogItems.forEach(item=>observerLeft.observe(item))
    
  },[])


  return (
    <Box ref={buttonGroupRef} >
    <Box sx={styles.carouselWrapper} ref={containerRef} className='testimonial-container-card' style={style}>
    {children}
    </Box>
      <ButtonGroup removeButton={removeButton} />
      </Box>
  )
}


const styles = {
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    height:'fit-content',
    button: {
      bg: "primary",
      border: "0px solid red",
      fontSize: 40,
      cursor: "pointer",
      p: "8px 10px",
      mx:'10px',
      borderRadius:'8px',
      color: "#BBC7D7",
      transition: "all 0.25s",
      "&:hover": {
        // color: "text",
        bg:"rgba(0,0,0,0.8)"
      },
      "&:focus": {
        outline: 0,
        bg:"rgba(0,0,0,0.8)"
      },
    },
    '@media screen and (min-width:2000px)': {
      display:'none'
    },
  },
  carouselWrapper: {
    width: '85%',
    height: '100%',
    display: 'flex',
    overflowX: 'scroll',
    margin: '0 auto',
    '@media screen and (min-width:1700px)': {
      width:'75%'
    },
    '@media screen and (min-width:2000px)': {
      width:'110%'
    },
    '@media screen and (min-width:2100px)': {
      width:'100%'
    },
    '@media screen and (max-width:600px)': {
      width:'100%'
    },
  }
};
export default CarouselWrapper