import { useContext } from "react";
import { Link } from "react-router-dom";
import TypeContext from "../context/userType";
import { closeCurrentDay } from "../APIs/closeCurrentDay";
import { useRouteLoaderData } from "react-router-dom";
import TaskList from "./TaskList";
import AddTask from "./AddTask";


function DailyHome() {
  const todayTime = new Date().toLocaleTimeString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
  const type = useContext(TypeContext)
  const info = useRouteLoaderData('root')
  const openSatus = info.isOpen;


  return (<>
    <p>Check In Time: {todayTime}</p>
    {openSatus && type.userType === 4 && <button onClick={closeCurrentDay}>Close Check In</button>}
    {type.userType === 4 && !openSatus && <Link to={'feedback'}>Today's Feedback</Link>}


    {type.userType === 4 && openSatus && <AddTask />}
    {(type.userType === 1 || 2 || 3) && openSatus && <TaskList />}

    {(type.userType === 1 || 2 || 3) && !openSatus && <Link to={'addfeedback'}><button onClick={() => { type.handleIsCheckedIn(type.userType) }}>Check Out for the day</button></Link>}
  </>)
}

export default DailyHome;