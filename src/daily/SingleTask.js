function SingleTask({ tasks }) {


  const taskItem = tasks.map((task) => {
    return (
      <li key={task.taskId}>

        <span>{task.task}</span>
        <input type='checkbox' checked={tasks.isComplete}></input>
      </li>
    )
  })


  return (<>
    {taskItem}
  </>)
}

export default SingleTask;