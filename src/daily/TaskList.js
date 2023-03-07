import SingleTask from "./SingleTask";
import { useRouteLoaderData } from "react-router-dom";
function TaskList() {
  const tasks = useRouteLoaderData('tasklist');
  console.log(tasks);







  return (
    <ul>
      <SingleTask tasks={tasks} />
    </ul>
  )
}

export default TaskList;