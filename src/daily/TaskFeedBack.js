
import { useRouteLoaderData } from "react-router-dom"

export default function TaskFeedBack() {

  const info = useRouteLoaderData('root');

  const dailyTaskFeedBack = info.taskFeedBack;

  const taskFeedCard = dailyTaskFeedBack.map((task) => {

    return (<div className="managerTasks" key={task.taskTextFeedBack}>
      <p>
        Task Name: {task.taskId}
      </p>
      <p >Task Rating: {task.taskRating}/5</p>
      <p>Thoughts on Task: {task.taskTextFeedBack}</p>

    </div>)
  });


  return (<>
    <h2>Tasks FeedBack:</h2>
    {taskFeedCard}
  </>)
}