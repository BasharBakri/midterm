import CheckIn from "./CheckIn";
import { useContext } from "react";
import TypeContext from "../context/userType";
import EmployeeList from "./EmployeeList";
import { useRouteLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useRevalidator } from "react-router-dom";
import Welcome from "./Welcome";
import { Link } from "react-router-dom";
import { GrFormNextLink } from 'react-icons/gr'
function MainHome() {
  // const type = parseInt(localStorage.getItem('userType'));

  const revalidator = useRevalidator();
  const type = useContext(TypeContext);
  const info = useRouteLoaderData('root')
  const openSatus = info.isOpen;
  const currentUserNo = parseInt(type.userType)





  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Interval is running');
      console.log(revalidator.state);
      if (revalidator.state === "idle") {
        revalidator.revalidate();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [revalidator]);

  return (<>
    <Welcome />
    {openSatus && parseInt(type.userType) === 4 && <EmployeeList />}

    <CheckIn></CheckIn>

    {currentUserNo === 4 && !openSatus && <Link className="feedBackLink" to={'daily'}> Add tasks to employees: <GrFormNextLink className="feedBackLink" /></Link>}
  </>)
}

export default MainHome;