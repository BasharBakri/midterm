import { Link, useRouteLoaderData } from "react-router-dom"
import TypeContext from "../context/userType";
import { useContext } from "react";
import { openCurrentDay } from "../APIs/openCurrentDay";

function CheckIn() {
  const type = useContext(TypeContext)
  const info = useRouteLoaderData('root');
  const openSatus = info.isOpen;





  return (<>
    {(type.userType === 1 || 2 || 3) && openSatus && <Link to='daily'>
      <button onClick={() => { type.handleIsCheckedIn(type.userType) }} >Check In for the day</button>
    </Link>}
    {type.userType === 4 && !openSatus &&
      <button onClick={openCurrentDay} >Open Check In for the day</button>
    }
  </>)
}

export default CheckIn;


