import { json, redirect } from "react-router-dom";



export const addTaskfunc = async ({ request, params }) => {
  const sendData = await request.formData();
  console.log(sendData);
  const sentDailyFeedBack = {
    task: sendData.get('task'),
    employeeId: sendData.get('employeeId'),
    managerId: 1,
    taskId: Math.random(),
    isComplete: false,
  };

  const response = await fetch(`https://658dac0d7c48dce947399400.mockapi.io/days/4`);
  const existingData = await response.json();

  const updatedData = {
    ...existingData,
    tasks: [...existingData.tasks, sentDailyFeedBack]
  };
  console.log(updatedData);


  const putResponse = await fetch(`https://658dac0d7c48dce947399400.mockapi.io/days/4`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(updatedData)
  });
  console.log(putResponse);
  if (!putResponse.ok) {
    throw json({ message: 'Could not send Tasks' }, { status: 400 });
  } else {
    return redirect('');
  }
};