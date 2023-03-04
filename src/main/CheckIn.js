import { Link } from "react-router-dom"
import TypeContext from "../context/userType";
import { useContext } from "react";

function CheckIn() {
  const type = useContext(TypeContext)




  return (<>
    {type.userType && type.checkInOpen && <Link to='daily'>
      <button >Check In for the day</button>
    </Link>}
    {!type.userType && !type.checkInOpen && <Link to='daily'>
      <button onClick={type.openCheckIn} >Open Check In for the day</button>
    </Link>}
  </>)
}

export default CheckIn;