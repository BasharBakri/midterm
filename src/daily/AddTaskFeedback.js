import { Form, useNavigation } from "react-router-dom"
import { useRouteLoaderData } from "react-router-dom";
import { useContext } from "react";
import TypeContext from "../context/userType";

function AddTaskFeedback() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  const info = useRouteLoaderData('tasklist');
  const tasks = info.tasks;
  console.log(tasks);
  const type = useContext(TypeContext)
  const currentUserNumber = parseInt(type.userType);


  const filteredTasks = tasks.filter((task) => parseInt(task.employeeId) === currentUserNumber);

  console.log(filteredTasks);
  const allTaskFeedBacks = filteredTasks.map((task) => {
    return (

      <div className="taskFeedBackContainerNoButton" key={task.taskId}>
        <label className="mainLabel" htmlFor={`taskRating`}>What do you think of this task? </label>
        <hr></hr>
        <p>{task.task}</p>
        <input id={`taskRating-${task.taskId}`} type="range" min={0} max={5} name={`taskRating`} required />
        <hr></hr>
        <label className="mainLabel" htmlFor={`taskTextFeedBack`}>Why?</label>
        <input id={`taskTextFeedBack`} type="text" name={`taskTextFeedBack`} defaultValue='' required />
        <input type="hidden" name="taskId" value={task.task} />
      </div>
    )

  });

  return (<>
    <Form className="dailytaskFeedBack" method="post" >
      {allTaskFeedBacks}
      <div >
        <button className="bodyButtons" disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Save'}</button>
      </div>
    </Form>
  </>
  )
}

export default AddTaskFeedback;