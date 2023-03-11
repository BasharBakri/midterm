import { NavLink } from "react-router-dom"
import { useContext } from "react"
import TypeContext from "./context/userType"
import Login from "./Login"


export default function MainNav() {

  // const userType = parseInt(localStorage.getItem('userType'));


  const type = useContext(TypeContext)

  const mainActiveStyle = {
    color: '#9c0000',
    'fontWeight': '600',
  }

  return (<>

    {type.userType && <header className="headerNavBar">
      <nav>
        <ul className="ulNavBar">
          <>

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
              <button onClick={() => { type.changeType(false) }} className="resetBtn">Log out</button>
            </li>  </>

        </ul>
      </nav>
    </header>}
    {!type.userType && <Login></Login>}

  </>
  )
}