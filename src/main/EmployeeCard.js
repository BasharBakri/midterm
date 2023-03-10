import { useRouteLoaderData } from "react-router-dom";

function EmployeeCard() {

  const info = useRouteLoaderData('root');

  const employees = info.employees;

  const employeesCard = employees.map((employee) => {
    if (parseInt(employee.employeeId) === 4) {
      return null;
    }
    const timeString = isNaN(new Date(employee.time)) ? '' : new Date(employee.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
      <tr key={employee.employeeId}>
        <td>{employee.name}</td>
        <td><img className="welcomeImage" src={employee.image} alt={employee.name} /></td>
        <td>{timeString}</td>
        <td className={employee.checkedIn ? 'checkedIn' : 'offline'}>{employee.checkedIn ? 'Checked In' : 'Offline'}</td>
      </tr>
    );
  });

  return (
    <table className='employeeTable'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Clock In Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employeesCard}
      </tbody>
    </table>
  );

}

export default EmployeeCard;