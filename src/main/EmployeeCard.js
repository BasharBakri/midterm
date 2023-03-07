import { useRouteLoaderData } from "react-router-dom";

function EmployeeCard() {

  const info = useRouteLoaderData('root');
  console.log(info);

  const employees = info.employees;

  const employeesCard = employees.map((employee) => {
    return (<div key={employee.employeeId}>
      <h4>{employee.name}</h4>
      <span>{employee.checkedIn ? 'CheckIn' : 'Not CheckedIn'}</span>

    </div>)
  })


  return (<>
    {employeesCard}
  </>)
}

export default EmployeeCard;