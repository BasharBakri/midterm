import { useRouteLoaderData, useParams, Link, useNavigate, useSubmit } from "react-router-dom";
import Welcome from "../main/Welcome";

function SingleTaskClicked() {

  const navigate = useNavigate();

  function cancelHandler() {
    navigate(`..`);
  }

  const submit = useSubmit()
  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure you want to delete this task?')
    if (proceed) {
      submit(null, { method: 'put' })
    }
  };



  const params = useParams();
  const currentTask = params.singleTaskId;

  const info = useRouteLoaderData('root');
  const tasks = info.tasks;

  const displayFilteredTasks = tasks.filter((task) => {
    const taskId = task.taskId.toString()
    return taskId === currentTask;
  });


  const taskItems = displayFilteredTasks.map((task) => {
    const assignedTo = parseInt(task.employeeId) === 1
      ? info.employees[0].image
      : parseInt(task.employeeId) === 2
        ? info.employees[1].image
        : parseInt(task.employeeId) === 3
          ? info.employees[2].image
          : '';
    return (
      <div className="singleTaskClicked" key={task.taskId} >
        <span>{task.task}</span>
        <hr></hr>
        <div className="assignedToContainer">
          <p className="currentDateParagpraph">Assigned to:</p>
          <img src={assignedTo} alt='employee' />
        </div>
        <p className="currentDateParagpraph">Task completion status: </p>
        <p className={task.isComplete ? 'checkedIn' : 'offline'}>{task.isComplete ? 'Done' : 'In Progress'}</p>
        <hr></hr>
        <div className="singleTaskButtons" >
          <button onClick={cancelHandler} className="bodyButtons" >Cancel</button>
          <Link to="edit" >Edit</Link>
          <button className="resetBtn" onClick={startDeleteHandler} >Delete</button>
        </div>
      </div >
    );
  });



  return (<>
    <Welcome />
    {taskItems}
  </>)
}

export default SingleTaskClicked;