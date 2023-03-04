import { json, redirect } from "react-router-dom";



export const addDayFeedBack = async ({ request, params }) => {
  const sendData = await request.formData();
  const sentDailyFeedBack = {
    socialrating: sendData.get('socialrating'),
    socialtext: sendData.get('socialtext'),
    generaltext: sendData.get('generaltext'),
    generalrating: sendData.get('generalrating')
  }
  const response = await fetch(`https://64020dfe3779a86262641f9e.mockapi.io/feedBackSeperate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(sentDailyFeedBack)
  });
  console.log(response);
  if (response.ok) {
    return redirect('..');
  } else {
    throw json({ message: 'Could not send feedBack' }, { status: 400 })
  }
};