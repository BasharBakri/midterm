import { NavLink } from "react-router-dom"
import { useContext } from "react"
import TypeContext from "./context/userType"


export default function MainNav() {




  const type = useContext(TypeContext)

  const mainActiveStyle = {
    color: '#CCC',
    textDecoration: "underline"
  }

  return (<>
    <header className="headerNavBar">
      <nav>
        <ul className="mainNavBar">
          <li>
            <NavLink to='/' style={({ isActive }) =>
              isActive ? mainActiveStyle : undefined
            } end >Home</NavLink>
          </li>
          <li>
            <NavLink to="/daily" style={({ isActive }) =>
              isActive ? mainActiveStyle : undefined
            } >
              Daily
            </NavLink>
          </li>
          <li>
            <NavLink to='/stats' style={({ isActive }) =>
              isActive ? mainActiveStyle : undefined
            }>Stats</NavLink>
          </li>
          <li>
            <NavLink to='/auth' style={({ isActive }) =>
              isActive ? mainActiveStyle : undefined
            }>Authentication</NavLink>
          </li>
          <li>
            <button onClick={() => { type.changeType(4) }} className="mainNavButton">Manager</button>
          </li>
          <li>
            <button onClick={() => { type.changeType(1) }} className="mainNavButton">employee 1</button>
          </li>
          <li>
            <button onClick={() => { type.changeType(2) }} className="mainNavButton">employee 2</button>
          </li>
          <li>
            <button onClick={() => { type.changeType(3) }} className="mainNavButton">employee 3</button>
          </li>
        </ul>
      </nav>
    </header>


  </>)
}