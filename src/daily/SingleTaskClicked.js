import { useRouteLoaderData } from "react-router-dom";
function SingleTaskClicked() {

  const info = useRouteLoaderData('root');
  const tasks = info.tasks;

  const taskItems = tasks.map((task) => {
    const assignedTo = parseInt(task.employeeId) === 1
      ? info.employees[0].image
      : parseInt(task.employeeId) === 2
        ? info.employees[1].image
        : parseInt(task.employeeId) === 3
          ? info.employees[2].image
          : '';
    return (
      <div to={`${task.taskId}`} className="managerTasks" key={task.taskId}>
        <span>{task.task}</span>
        <hr></hr>
        <div className="assignedToContainer">
          <p className="currentDateParagpraph">Assigned to:</p>
          <img src={assignedTo} alt='employee' />
        </div>
      </div>
    );
  });



  return (<>
    {taskItems}
  </>)
}

export default SingleTaskClicked;