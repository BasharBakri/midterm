import { NavLink } from "react-router-dom"
import { useContext } from "react"
import TypeContext from "./context/userType"


export default function MainNav() {

  // const userType = parseInt(localStorage.getItem('userType'));


  const type = useContext(TypeContext)

  const mainActiveStyle = {
    color: '#9c0000',
    'fontWeight': '600',
  }

  return (
    <header className="headerNavBar">
      <nav>
        <ul className="ulNavBar">
          {type.userType && <>

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
              <button onClick={() => { type.changeType(false) }} className="ulNavButton">LOG OUT</button>
            </li>  </>
          }

          {!type.userType && <>
            <li>
              <button onClick={() => { type.changeType(4) }} className="ulNavButton dread"></button>
              <span className="btnText">Robert</span>
              <span className="btnText"><i className="btnBtnText">'Manager'</i></span>
            </li>
            <li>
              <button onClick={() => { type.changeType(1) }} className="ulNavButton friendly"></button>
              <span className="btnText">Blake</span>
              <span className="btnText"><i className="btnBtnText">'Production'</i></span>
            </li>
            <li>
              <button onClick={() => { type.changeType(2) }} className="ulNavButton lucy"></button>
              <span className="btnText sales"> Lucy</span>
              <span className="btnText sales"><i className="btnBtnText">'Sales'</i></span>
            </li>
            <li>
              <button onClick={() => { type.changeType(3) }} className="ulNavButton red"></button>
              <span className="btnText"> Red</span>
              <span className="btnText"><i className="btnBtnText"> 'Logistics'</i></span>
            </li>
          </>}
        </ul>
      </nav>
    </header>


  )
}