import CheckIn from "./CheckIn";
import { useContext } from "react";
import TypeContext from "../context/userType";
import EmployeeList from "./EmployeeList";
import { useRouteLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useRevalidator } from "react-router-dom";

function MainHome() {
  // const type = parseInt(localStorage.getItem('userType'));

  const revalidator = useRevalidator();
  const type = useContext(TypeContext);
  const info = useRouteLoaderData('root')
  const openSatus = info.isOpen;




  let name;
  switch (parseInt(type.userType)) {
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
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Interval is running');
      console.log(revalidator.state);
      if (revalidator.state === "idle") {
        revalidator.revalidate();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (<>
    <div>
      <h3>Hey There {name}, Happy to see you here</h3>

      <p className="currentDateParagpraph"> {new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}.</p>
      <hr></hr>
      {openSatus && parseInt(type.userType) === 4 && <EmployeeList />}

      <CheckIn></CheckIn>

    </div>
  </>)
}

export default MainHome;