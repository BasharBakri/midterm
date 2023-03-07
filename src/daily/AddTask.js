import { Form, useNavigation } from "react-router-dom"

export default function AddTask() {
  const navigation = useNavigation();


  const isSubmitting = navigation.state === 'submitting'


  return <Form method="put" >
    <p>
      <label htmlFor="task"> Add today's task </label>
      <input id="task" type="text" name="task" required />
    </p>
    <p>
      <label htmlFor="employeeId"> Assign Employee by Id </label>
      <input id="employeeId" type="number" name="employeeId" required />
    </p>
    <div >
      <button disabled={isSubmitting}>{isSubmitting ? 'Adding' : 'Add'}</button>
    </div>
  </Form>
}