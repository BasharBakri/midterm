import { useRouteLoaderData } from "react-router-dom";
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
      <div className="managerTasks" key={task.taskId}>
        <span>{task.task}</span>
        <hr></hr>
        <p>
          <p className="currentDateParagpraph">Assigned to:</p>
          <img src={assignedTo} alt='employee' />
        </p>
      </div>
    );
  });



  return (<>
    {taskItems}
  </>)
}

export default SingleTaskManager;