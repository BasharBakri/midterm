import { Form, useNavigation } from "react-router-dom"
import { useRouteLoaderData } from "react-router-dom";
function AddTaskFeedback() {
  const navigation = useNavigation();
  const tasks = useRouteLoaderData('tasklist');
  console.log(tasks);


  const isSubmitting = navigation.state === 'submitting'

  const allTaskFeedBacks = tasks.map((task) => {
    return (

      <p key={task.taskId}>
        <label htmlFor={`taskRating`}>Please rate this Task: {task.task}</label>
        <input id={`taskRating-${task.taskId}`} type="range" min={0} max={5} name={`taskRating`} required />
        <input id={`taskTextFeedBack`} type="text" name={`taskTextFeedBack`} required />
        <input type="hidden" name="taskId" value={task.taskId} />
      </p>
    )

  });

  return (<>
    <Form method="post" >
      {allTaskFeedBacks}
      <div >
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Save'}</button>
      </div>
    </Form>
  </>
  )
}

export default AddTaskFeedback;