import CheckIn from "./CheckIn";
import { useContext } from "react";
import TypeContext from "../context/userType";
import EmployeeList from "./EmployeeList";
import { useRouteLoaderData } from "react-router-dom";

function MainHome() {
  const type = useContext(TypeContext);
  const info = useRouteLoaderData('root')
  const openSatus = info.isOpen;

  let name;
  switch (type.userType) {
    case 4:
      name = 'Robert';
      break;
    case 1:
      name = 'Blake';
      break;
    case 2:
      name = 'Lucy';
      break;
    case 3:
      name = 'Red';
      break;
    default:
      name = '';
      break;
  }


  return (<>
    <div>
      <h4>Welcome {name}</h4>
      <p>Today is {new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</p>
      {openSatus && parseInt(type.userType) === 4 && <EmployeeList />}
      <CheckIn></CheckIn>

    </div>
  </>)
}

export default MainHome;