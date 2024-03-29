import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const TypeContext = React.createContext({
  userType: null,
  typeText: '',
  isCheckedIn: null,
  handleIsCheckedIn: () => { },
  changeType: () => { },
});




export const TypeContextProvider = (props) => {



  const [employees, setEmployees] = useState([]);
  const [userType, setUserType] = useState(false);
  const [typeText, setTypeText] = useState(false);
  // const [isCheckedIn, setIsCheckedIn] = useState(false)
  const handleUserType = (value) => {
    setUserType(value);
    setTypeText(value);
  };
  useEffect(() => {
    fetch('https://658dac0d7c48dce947399400.mockapi.io/days/4')
      .then(response => response.json())
      .then(data => {
        const employees = data.employees;
        console.log(employees);
        setEmployees(employees);
      })
      .catch(error => console.error(error));
  }, []);


  const handleEmployeeClick = (employeeId) => {
    const now = new Date();
    const updatedEmployees = employees.map(employee =>
      parseInt(employee.employeeId) === parseInt(employeeId)
        ? {
          ...employee,
          checkedIn: !employee.checkedIn,
          time: employee.checkedIn ? employee.time : now.toString()
        }
        : employee
    );
    console.log('Updated Employees:', updatedEmployees);
    fetch(`https://658dac0d7c48dce947399400.mockapi.io/days/4`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ employees: updatedEmployees })
    })
      .then(response => response.json())
      .then(data => setEmployees(data.employees))
      .catch(error => console.error(error));
  };



  return <TypeContext.Provider value={{
    userType: userType,
    typeText: typeText,
    // isCheckedIn: isCheckedIn,
    handleIsCheckedIn: handleEmployeeClick,
    changeType: handleUserType
  }}>
    {props.children}
  </TypeContext.Provider>;
};

export default TypeContext;