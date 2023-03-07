import EmployeeCard from "./EmployeeCard";
import { useRouteLoaderData } from "react-router-dom";



function EmployeeList() {

  const info = useRouteLoaderData('root');
  console.log(info);



  return (<div>

    <EmployeeCard />

  </div>)
}

export default EmployeeList;