import { Form, useNavigation } from "react-router-dom"
import { useState } from "react";

export default function AddTask() {
  const navigation = useNavigation();
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('1');

  function handleEmployeeChange(event) {
    setSelectedEmployeeId(event.target.value);
  }

  const isSubmitting = navigation.state === 'submitting'


  return <Form className="addTaskForm" method="put" >
    <p>
      <label htmlFor="task"> Add a task: </label>
      <input id="task" type="text" name="task" required />
    </p>
    <input id="employeeId" type="hidden" name="employeeId" value={selectedEmployeeId} readOnly={true} />
    <div>
      <label > Assign task to employee: </label>
      <select className="selectEmployee" value={selectedEmployeeId} onChange={handleEmployeeChange} required>

        <option value="1" >Blake</option>

        <option value="2">Lucy</option>

        <option value="3">Red</option>

      </select>

    </div>
    <div >
      <button className="bodyButtons" disabled={isSubmitting}>{isSubmitting ? 'Adding' : `Add >`}</button>
    </div>
  </Form>
}