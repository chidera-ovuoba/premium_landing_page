/** @jsxImportSource theme-ui */
import { Box } from "theme-ui"
import RcDrawer from 'rc-drawer';
import { keyframes } from "@emotion/react";

const Drawer = ({
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    onClose,
    onOpen,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle,
    windowWidth,
    ...props
}) => {
    return (
      <>
      { windowWidth <= 950 && <RcDrawer
        open={open}
        onClose={onClose}
        width={width}
        placement={placement}
        className={`drawer ${className || ""}`.trim()}
        handler={false}
        level={null}
        duration={`0.6s`}
        {...props}
        
        >
      {
        closeButton && (
            <Box onClick={onClose} sx={closeBtnStyle}>
            {closeButton}      
            </Box>         
        )}
          <Box sx={drawerStyle}>{children}</Box>
      </RcDrawer>}
      <Box onClick={onOpen}>
      {drawerHandler}
      </Box>
      </>
  )
}
Drawer.defaultProps = {
    width: '320px',
    placement:'left'
}

const animation = keyframes`
 0%{
    width:0%;
 }
 100%{
    width:100%;
 }
`

const styles = {
    drawerRc: {
        animation:`${animation} 0.5s ease`
    }    
}


export default Drawer