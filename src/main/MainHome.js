import CheckIn from "./CheckIn";
import { useContext } from "react";
import TypeContext from "../context/userType";
import EmployeeList from "./EmployeeList";

function MainHome() {
  const typeName = useContext(TypeContext);



  return (<>
    <div>
      <h3>Welcome team name</h3>
      <h4>Welcome {typeName.typeText}</h4>
      <p>Today is {new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</p>
      <CheckIn></CheckIn>
      <EmployeeList />

    </div>
  </>)
}

export default MainHome;