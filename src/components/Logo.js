/** @jsxImportSource theme-ui */
import Image from 'next/image';
import { LinkImage } from './Link';

const Logo = ({src,...rest}) => {
  return (
    <LinkImage
      path='/'
      sx={{
        mr: '15px',
        display: 'flex',
        cursor: 'pointer',
        width: '12rem',
        '@media screen and (max-width:420px)': {
         width:'9rem'
        },
        '@media screen and (max-width:350px)': {
         width:'6rem'
        }
      }}
      {...rest}
    >
      <Image src={src} alt='landGuru' />
    </LinkImage>
  )
}

export default Logo