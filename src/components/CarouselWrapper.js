/** @jsxImportSource theme-ui */
import { Box, Container, Flex } from "theme-ui";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
// import Carousel from "react-multi-carousel";

const ButtonGroup = ({removeButton }) => {
 
  return <Flex sx={{
    width: "100%", justifyContent: 'center', alignItems: 'center', height: "100%", mt: "60px",
   '@media screen and (min-width:1350px)': {
      display: removeButton ? 'none':'flex'
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

const CarouselWrapper = ({ children,removeButton }) => {

  const containerRef = useRef(null);
   const buttonGroupRef = useRef(null);
  const [startScroll, setStartScroll] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  
  useEffect(() => {
    const container = containerRef.current;
    buttonGroupRef.current.children[1].children[0].children[0].children[1].addEventListener('mousedown', () => {
      container.scrollLeft += 0.15 * Number(container.firstChild.clientWidth)
      !startScroll && setStartScroll(true)
      setScrollLeft(false);
    })
      buttonGroupRef.current.children[1].children[0].children[0].children[0].addEventListener('mousedown', () => {
        container.scrollLeft -= 40
        !startScroll && setStartScroll(true)
        setScrollLeft(true)
      })
  }, [])
  

  // let thresholdQuery= window.innerWidth < 420 ? [0.6,1]:[1]
    useEffect(() => {
    const container = containerRef.current;
      container.scrollLeft -= container.scrollLeft - 11;
      window.addEventListener('resize',()=>setWindowWidth(window.innerWidth))
    }, [])
  useEffect(() => {
  const container = containerRef.current
  const galleryItems = containerRef.current.querySelectorAll('.testimonial')
  const blogItems = containerRef.current.querySelectorAll('.blog')
  var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting !== true) {
      console.log('Element has just become invisible in screen',entries[0].target);
      if (entries[0].target === container.firstChild) {
        // console.log('Element has just become invisible in screen');
        container.removeChild(entries[0].target);
        container.appendChild(entries[0].target);
        container.scrollLeft -= container.scrollLeft - 11;
        }
    }
    }, { threshold: [0],root:container });
  
  var observerLeft = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true && scrollLeft) {
        // console.log('Element has just become visible in screen');
        if (container.scrollLeft <= 0 || 10 && entries[0].target === container.firstChild && scrollLeft) {
          // console.log('Element has just ');
         entries[0].target.insertAdjacentElement("beforebegin", entries[0].target.nextSibling.nextSibling.nextSibling);
        container.scrollLeft += entries[0].target.clientWidth + 10;
        } 
      }
  }, { threshold: windowWidth < 420 ? [0.6,1]:[1],root:container});
  
  startScroll && galleryItems.forEach(item=>observer.observe(item))
  startScroll && galleryItems.forEach(item=>observerLeft.observe(item))
  startScroll && blogItems.forEach(item=>observer.observe(item))
  startScroll && blogItems.forEach(item=>observerLeft.observe(item))
  

    
  },[startScroll,scrollLeft])
  return (
    <Box ref={buttonGroupRef} >
    <Box sx={styles.carouselWrapper} ref={containerRef} className='testimonial-container-card'>
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
  },
  carouselWrapper: {
    width: '85%',
    height: '100%',
    display: 'flex',
    overflowX: 'scroll',
    margin: '0 auto',
    '@media screen and (min-width:1700px)': {
      width:'80%'
    },
    '@media screen and (min-width:2000px)': {
      width:'75%'
    },
    '@media screen and (min-width:2100px)': {
      width:'100%'
    },
    '@media screen and (max-width:600px)': {
      width:'100%'
    }
    
  }
};
export default CarouselWrapper