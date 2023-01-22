/** @jsxImportSource theme-ui */

import Image from "next/future/image"
import { Container, Flex, Heading, Text } from "theme-ui"

const FeatureCardColumn = ({src,title,text,isWhite,isColumn,width,height}) => {
  return (
    <Flex sx={{
      minWidth: '250px',
      flex: 1,
      maxWidth:'100%',
      flexDirection: isColumn ? 'column' : 'row',
      gap: isColumn ? '0' : '1rem',
      '@media screen and (max-width:400px)': {
        flexDirection:'column'
      }
    }}>
      <Image src={src} sx={{width,height,aspectRatio:'1/1'}} alt={title} />
      <Flex sx={{justifyContent:'space-between',flexDirection:'column'}}>
      <Heading as='h2' variant="featureCardHeading"  sx={{
        color: isWhite ? 'white' : 'heading',
        mb: 2,
      
      }}
      >{title}</Heading>
      <Text
        variant="featureCardText"
      sx={{
       color: isWhite ? 'white' : 'heading',
       opacity:isWhite ? 0.7 : 1,
        }}
        >{text}</Text>
        </Flex>
    </Flex>
  )
}

export default FeatureCardColumn