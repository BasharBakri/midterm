import { useRouteLoaderData, useNavigate } from "react-router-dom"
import TypeContext from "../context/userType";
import { useContext } from "react";
import { openCurrentDay } from "../APIs/openCurrentDay";
import { Form } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

function CheckIn() {
  const type = useContext(TypeContext);
  const navigate = useNavigate();



  const currentUserNo = parseInt(type.userType);
  const info = useRouteLoaderData('root');
  const openSatus = info.isOpen;

  const employees = info.employees;
  const currentEmployee = employees.filter(function (employee) {
    return parseInt(employee.employeeId) === currentUserNo;
  });
  let isCheckedIn = currentEmployee[0].checkedIn;
  console.log(isCheckedIn);



  return (<>
    {(currentUserNo === 1 || currentUserNo === 2 || currentUserNo === 3) && openSatus && !isCheckedIn &&
      <button className="bodyButtons" onClick={() => { type.handleIsCheckedIn(currentUserNo); navigate("daily") }} >Check In for the day</button>
    }
    {currentUserNo === 4 && !openSatus &&
      <Form method="get">
        <button className="bodyButtons" id="openCheckIn" onClick={openCurrentDay} >Open Check In for the day &nbsp;  <AiOutlineCheckCircle /> </button>
      </Form>
    }
  </>)
}

export default CheckIn;


