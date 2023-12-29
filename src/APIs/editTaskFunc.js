import { json, redirect } from "react-router-dom";

export const editTaskFunc = async ({ request, params }) => {

  console.log('edit function check');
  const taskId = params.singleTaskId;

  const response = await fetch(`https://658dac0d7c48dce947399400.mockapi.io/days/4`);
  const day = await response.json();

  const taskToEdit = day.tasks.find(task => task.taskId.toString() === taskId);
  console.log(taskToEdit);


  const formData = await request.formData();

  const sentEditData = {
    task: formData.get('task'),
    employeeId: formData.get('employeeId'),
    isComplete: formData.get('isComplete'),
  };

  console.log(sentEditData);

  if (taskToEdit) {
    Object.assign(taskToEdit, sentEditData);
    const putResponse = await fetch(`https://658dac0d7c48dce947399400.mockapi.io/days/4`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(day),
    });
    if (putResponse.ok) {
      return redirect('..');
    } else {
      throw json({ message: 'Could not edit item' }, { status: 400 });
    }
  } else {
    throw json({ message: 'Task not found' }, { status: 404 });
  }
};