import { json, redirect } from "react-router-dom";


export const addTaskFeedBackFunc = async ({ request, params }) => {
  const sendData = await request.formData();
  console.log(sendData);
  const sentDailyFeedBack = {
    taskId: sendData.get('taskId'),
    taskRating: sendData.get(`taskRating`),
    taskTextFeedBack: sendData.get(`taskTextFeedBack`),
  }

  const response = await fetch(`https://64020dfe3779a86262641f9e.mockapi.io/days/4`);
  const existingData = await response.json();

  const updatedData = {
    ...existingData,
    taskFeedBack: [...existingData.taskFeedBack, sentDailyFeedBack]
  };
  console.log(updatedData);


  const putResponse = await fetch(`https://64020dfe3779a86262641f9e.mockapi.io/days/4`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(updatedData)
  });
  console.log(putResponse);
  if (!putResponse.ok) {
    throw json({ message: 'Could not send Tasks' }, { status: 400 })
  } else {
    return redirect('/')
  }
};

























// export const addTaskFeedBackFunc = async ({ request, params }) => {
//   const sendData = await request.formData();
//   const taskId = sendData.get('taskId');

//   const sentDailyFeedBack = {
//     taskId: taskId,
//     taskRating: sendData.get(`taskRating`),
//     taskTextFeedBack: sendData.get(`taskTextFeedBack`),
//   }
//   console.log(sentDailyFeedBack);

//   const response = await fetch(`https://64020dfe3779a86262641f9e.mockapi.io/Tasks`, {
//     method: 'POST',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(sentDailyFeedBack)
//   });
//   console.log(response);
//   if (response.ok) {
//     return redirect('');
//   } else {
//     throw json({ message: 'Could not send TaskfeedBack' }, { status: 400 })
//   }
// };




