/** @jsxImportSource theme-ui */
import { NavLink as MenuLink, Link as A } from "theme-ui"
import Link  from "next/link"
 export const NavLink = ({path,children,label,...rest}) => {
  return (
    <div>NavLink</div>
  )
}
 export const LinkImage = ({path,children,label,...rest}) => {
  return (
      <A {...rest} href={path}>
          {children || label}
      </A>
  )
}
