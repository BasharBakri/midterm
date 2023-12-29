import { json, redirect } from "react-router-dom";




export const addDayFeedBack = async ({ request, params }) => {
  const sendData = await request.formData();
  console.log(sendData);
  const sentDailyFeedBack = {
    socialrating: sendData.get('socialrating'),
    socialtext: sendData.get('socialtext'),
    generaltext: sendData.get('generaltext'),
    generalrating: sendData.get('generalrating')
  };

  // Fetch the existing data from the API
  const response = await fetch(`https://658dac0d7c48dce947399400.mockapi.io/days/4`);
  const existingData = await response.json();

  const updatedData = {
    ...existingData,
    dayFeedBack: [...existingData.dayFeedBack, sentDailyFeedBack]
  };

  const putResponse = await fetch(`https://658dac0d7c48dce947399400.mockapi.io/days/4`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(updatedData)
  });
  console.log(putResponse);
  if (putResponse.ok) {
    return redirect('../addtaskfeedback');
  } else {
    throw json({ message: 'Could not send feedBack' }, { status: 400 });
  }
};



// export const addDayFeedBack = async ({ request, params }) => {
//   const sendData = await request.formData();
//   console.log(sendData);
//   const sentDailyFeedBack = {
//     socialrating: sendData.get('socialrating'),
//     socialtext: sendData.get('socialtext'),
//     generaltext: sendData.get('generaltext'),
//     generalrating: sendData.get('generalrating')
//   }
//   const response = await fetch(`https://64020dfe3779a86262641f9e.mockapi.io/feedBackSeperate`, {
//     method: 'POST',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(sentDailyFeedBack)
//   });
//   console.log(response);
//   if (response.ok) {
//     return redirect('..');
//   } else {
//     throw json({ message: 'Could not send feedBack' }, { status: 400 })
//   }
// };

