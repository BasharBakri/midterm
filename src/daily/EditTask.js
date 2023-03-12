import { useState } from "react";
import { useNavigation, Form, useRouteLoaderData, useParams, useNavigate } from "react-router-dom";
import Welcome from "../main/Welcome";

export default function EditTask() {
  const info = useRouteLoaderData('root');
  const navigation = useNavigation();
  const params = useParams();
  const currentTask = params.singleTaskId;

  const navigate = useNavigate();

  function cancelHandler() {
    navigate(`..`);
  }


  function handleEmployeeChange(event) {
    setSelectedEmployeeId(event.target.value);
  }



  const isSubmitting = navigation.state === 'submitting';





  const tasks = info.tasks;

  const displayFilteredTasks = tasks.find((task) => {
    const taskId = task.taskId.toString()
    return taskId === currentTask;
  });

  console.log(displayFilteredTasks);

  const [selectedEmployeeId, setSelectedEmployeeId] = useState(displayFilteredTasks.employeeId);


  const [isChecked, setIsChecked] = useState(Boolean(displayFilteredTasks.isComplete));


  const handleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
  }

  return (<>
    <Welcome />
    <Form className="addTaskForm" method="put" >
      <p>
        <label htmlFor="task"> Edit task: </label>
        <input id="task" type="text" name="task" defaultValue={displayFilteredTasks.task} required />
      </p>
      <input id="employeeId" type="hidden" name="employeeId" value={selectedEmployeeId} readOnly={true} />
      <div>
        <label > Change Assigned Employee: </label>
        <select className="selectEmployee" value={selectedEmployeeId} defaultValue={selectedEmployeeId} onChange={handleEmployeeChange} required>

          <option value="1" >Blake</option>

          <option value="2">Lucy</option>

          <option value="3">Red</option>

        </select>
        <div>
          <label htmlFor="isComplete"> Mark Task as complete:</label>
          <input type='checkbox' name="isComplete" id="isComplete" checked={isChecked}
            value={isChecked} onChange={handleCheckboxChange} />
        </div>
      </div>
      <hr></hr>
      <div className="singleTaskButtons" >
        <button onClick={cancelHandler} className="bodyButtons" disabled={isSubmitting}>{isSubmitting ? 'Adding...' : 'Cancel'}</button>
        <button className="bodyButtons" disabled={isSubmitting}>{isSubmitting ? 'Please Wait...' : `Edit`}</button>
      </div>
    </Form>
  </>)
}