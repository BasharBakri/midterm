import { json, redirect } from "react-router-dom";

export const deleteTask = async ({ request, params }) => {

  console.log('delete function check');
  const taskId = params.singleTaskId;

  const response = await fetch(`https://64020dfe3779a86262641f9e.mockapi.io/days/4`);
  const day = await response.json();

  day.tasks = day.tasks.filter(task => task.taskId.toString() !== taskId);
  console.log(day.tasks);


  const updateResponse = await fetch('https://64020dfe3779a86262641f9e.mockapi.io/days/4', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(day),
  });

  if (updateResponse.ok) {
    return redirect('/daily');
  } else {
    throw json({ message: 'Could not delete item' }, { status: 400 });
  }
};
