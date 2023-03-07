import { useContext } from "react";
import { Link } from "react-router-dom";
import TypeContext from "../context/userType";
import { closeCurrentDay } from "../APIs/closeCurrentDay";
import { useRouteLoaderData } from "react-router-dom";
import TaskList from "./TaskList";
import AddTask from "./AddTask";


function DailyHome() {
  const type = useContext(TypeContext);
  const currentUserNo = parseInt(type.userType)
  const info = useRouteLoaderData('root')
  const openSatus = info.isOpen;
  const employees = info.employees;
  const currentEmployee = employees.filter(function (employee) {
    return parseInt(employee.employeeId) === currentUserNo;
  });
  let checkInTime = currentEmployee[0].time;

  const displayTime = new Date(checkInTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  console.log(currentUserNo);
  return (<>
    <p>Check In Time: {displayTime}</p>
    {openSatus && type.userType === 4 && <button onClick={closeCurrentDay}>Close Check In</button>}
    {currentUserNo === 4 && !openSatus && <Link to={'feedback'}>Today's Feedback</Link>}


    {currentUserNo === 4 && openSatus && <AddTask />}
    {(currentUserNo === 1 || currentUserNo === 2 || currentUserNo === 3) && openSatus && <TaskList />}

    {currentUserNo && !openSatus && <Link to={'addfeedback'}><button onClick={() => { type.handleIsCheckedIn(false) }}>Check Out for the day</button></Link>}
  </>)
}

export default DailyHome;