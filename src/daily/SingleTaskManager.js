import { useRouteLoaderData, Link } from "react-router-dom";
function SingleTaskManager() {


  const info = useRouteLoaderData('root');
  const tasks = info.tasks



  const taskItems = tasks.map((task) => {
    const assignedTo = parseInt(task.employeeId) === 1
      ? info.employees[0].image
      : parseInt(task.employeeId) === 2
        ? info.employees[1].image
        : parseInt(task.employeeId) === 3
          ? info.employees[2].image
          : '';
    return (
      <Link to={`${task.taskId}`} className="managerTasks" key={task.taskId}>
        <span>{task.task}</span>
        <hr></hr>
        <div className="assignedToContainer">
          <p className="currentDateParagpraph">Assigned to:</p>
          <img src={assignedTo} alt='employee' />
          <hr></hr>
          <p className="currentDateParagpraph">Click to view more details {">"}</p>
        </div>
      </Link>
    );
  });



  return (<>
    {taskItems}
  </>)
}

export default SingleTaskManager;