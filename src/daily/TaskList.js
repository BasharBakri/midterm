import SingleTask from "./SingleTask";
import { useRouteLoaderData } from "react-router-dom";
function TaskList() {
  const info = useRouteLoaderData('root');
  const tasks = info.tasks







  return (
    <ul className="checkBoxContainer">
      <SingleTask tasks={tasks} />
    </ul>
  )
}

export default TaskList;