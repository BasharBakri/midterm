
import { useRouteLoaderData } from "react-router-dom"

export default function TaskFeedBack() {

  const info = useRouteLoaderData('taskFeed')
  console.log(info);

  const taskFeedCard = info.map((task) => {

    return (<div key={task.id}>
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