import { useContext } from "react";
import TypeContext from "../context/userType";

function SingleTask({ tasks }) {

  const info = useContext(TypeContext);
  const currentUserNumber = parseInt(info.userType)


  const filteredTasks = tasks.filter((task) => parseInt(task.employeeId) === parseInt(currentUserNumber));

  const taskItems = filteredTasks.map((task) => {
    // const assignedTo = parseInt(task.employeeId) === 1
    //   ? 'Blake'
    //   : parseInt(task.employeeId) === 2
    //     ? 'Lucy'
    //     : parseInt(task.employeeId) === 3
    //       ? 'Red'
    //       : '';
    return (
      <li key={task.taskId}>
        <span>{task.task}</span>
      </li>
    );
  });



  return (<>
    <span className="currentDateParagpraph">Tasks:</span>
    {taskItems}
  </>)
}

export default SingleTask;