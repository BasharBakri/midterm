import { useContext } from "react";
import { Link } from "react-router-dom";
import TypeContext from "../context/userType";
import { closeCurrentDay } from "../APIs/closeCurrentDay";
import { useRouteLoaderData } from "react-router-dom";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Form } from "react-router-dom";
import SingleTaskManager from "./SingleTaskManager";



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

  let displayTime = new Date(checkInTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (displayTime === 'Invalid Date') {
    displayTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }


  console.log(currentUserNo);
  console.log(openSatus);
  return (<>
    {(currentUserNo === 1 || currentUserNo === 2 || currentUserNo === 3) && openSatus && <p className="currentDateParagpraph">Check In Time: {displayTime}.</p>}

    <hr></hr>


    {currentUserNo === 4 && !openSatus && <Link to={'feedback'}>Today's Feedback</Link>}



    {currentUserNo === 4 && openSatus && <AddTask />}
    {(currentUserNo === 1 || currentUserNo === 2 || currentUserNo === 3) && openSatus && <TaskList />}
    {currentUserNo === 4 && openSatus && <SingleTaskManager />}

    {(currentUserNo === 1 || currentUserNo === 2 || currentUserNo === 3 || currentUserNo === false) && !openSatus && <Link to={'addfeedback'}><button className="bodyButtons" onClick={() => { type.handleIsCheckedIn(false) }}>Check Out for the day</button></Link>}

    {openSatus && type.userType === 4 &&
      <Form>
        <button className="bodyButtons" onClick={closeCurrentDay}>Close Check In &nbsp;  <AiOutlineCloseCircle />
        </button>
      </Form>}

  </>)
}

export default DailyHome;