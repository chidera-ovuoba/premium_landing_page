/** @jsxImportSource theme-ui */
import { Box,Text,Heading } from "theme-ui"


const SectionHeader = ({ slogan, title, isWhite, isAlign, marginBottom, sxStyles }) => {
  return (
      <Box sx={{
          variant: 'sectionHeader',
          textAlign: isAlign ? isAlign === 'left' ? "left" : 'right' : 'center',
      }}
      style={{ marginBottom}}
      >
          <Text
              sx={{
                  variant: 'sectionHeader.subTitle',
                  color: isWhite ? 'white' : 'primary',
                  opacity:isWhite ? 0.7 : 1
              }}
             children={slogan}
          />
          <Heading
              sx={ sxStyles ? sxStyles :{
                  variant: 'sectionHeader.title',
                  color: isWhite ? 'white' : 'heading',
              }}
             children={title}
          />
      </Box>
  )
}

export default SectionHeader