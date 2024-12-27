import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <nav>
        <ul>
              <NavLink to="/">home</NavLink>
              <NavLink to="/contact">contact</NavLink>
              <NavLink to="/login">login</NavLink>
             
        </ul>
    </nav>
  )
}

export default Header