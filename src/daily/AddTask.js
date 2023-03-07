import { Form, useNavigation } from "react-router-dom"
import { useState } from "react";

export default function AddTask() {
  const navigation = useNavigation();
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('1');

  function handleEmployeeChange(event) {
    setSelectedEmployeeId(event.target.value);
  }

  const isSubmitting = navigation.state === 'submitting'


  return <Form method="put" >
    <p>
      <label htmlFor="task"> Add today's task </label>
      <input id="task" type="text" name="task" required />
    </p>
    <input id="employeeId" type="hidden" name="employeeId" value={selectedEmployeeId} readOnly={true} />
    <div>
      <label > Assign Employee by Id </label>
      <select value={selectedEmployeeId} onChange={handleEmployeeChange} required>

        <option value="1" >Blake</option>

        <option value="2">Lucy</option>

        <option value="3">Red</option>

      </select>

    </div>
    <div >
      <button disabled={isSubmitting}>{isSubmitting ? 'Adding' : 'Add'}</button>
    </div>
  </Form>
}