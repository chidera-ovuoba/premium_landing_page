/** @jsxImportSource theme-ui */
import { Box, Container, Flex } from "theme-ui";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Carousel from "react-multi-carousel";

const ButtonGroup = ({next,previous}) => (
    <Flex sx={{ width: "100%" }}>
      <Container>
        <Box className="button__group" sx={styles.buttonGroup}>
          <button onClick={previous} aria-label="Previous">
            <IoIosArrowRoundBack />
          </button>
          <button onClick={next} aria-label="Next">
            <IoIosArrowRoundForward />
          </button>
        </Box>
      </Container>
    </Flex>
)

// const responsive = {
//   desktop: {
//     breakpoint: { max: 2000, min: 1619 },
//     items: 3,
//     slidesToSlide: 4,
//   },
//   laptop: {
//     breakpoint: { max: 1619, min: 1024 },
//     items: 3,
//     slidesToSlide: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 640 },
//     items: 2,
//     slidesToSlide: 2,
//   },
//   mobile: {
//     breakpoint: { max: 639, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

// const carouselParams = {
//   additionalTransfrom: 0,
//   arrows: false,
//   autoPlaySpeed: 3000,
//   centerMode: false,
//   className: "",
//   containerClass: "carousel-container",
//   customButtonGroup: <ButtonGroup />,
//   dotListClass: "",
//   draggable: true,
//   focusOnSelect: false,
//   infinite: true,
//   itemClass: "",
//   keyBoardControl: true,
//   minimumTouchDrag: 80,
//   renderButtonGroupOutside: true,
//   renderDotsOutside: false,
//   responsive: responsive,
//   showDots: false,
//   sliderClass: "",
//   slidesToSlide: 1,
// };

const CarouselWrapper = ({children}) => {
  return (
    <Carousel {...carouselParams}>
    {children}
    </Carousel>
  )
}


const styles = {
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    mb: -4,
    button: {
      bg: "transparent",
      border: "0px solid",
      fontSize: 40,
      cursor: "pointer",
      px: "2px",
      color: "#BBC7D7",
      transition: "all 0.25s",
      "&:hover": {
        color: "text",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
export default CarouselWrapper