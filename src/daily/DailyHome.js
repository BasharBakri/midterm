import { useContext } from "react";
import { Link } from "react-router-dom";
import TypeContext from "../context/userType";



function DailyHome() {
  const todayTime = new Date().toLocaleTimeString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
  const type = useContext(TypeContext)


  return (<>
    <p>Check In Time: {todayTime}</p>
    {!type.userType && type.checkInOpen && <button onClick={type.openCheckIn}>Close Check In</button>}
    {!type.userType && !type.checkInOpen && <Link to={'feedback'}>Today's Feedback</Link>}



    {type.userType && !type.checkInOpen && type.isCheckedIn && <Link to={'addfeedback'}>Add feedback for today</Link>}
  </>)
}

export default DailyHome;