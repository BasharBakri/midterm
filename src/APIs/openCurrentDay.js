import { json, redirect } from "react-router-dom";




export const openCurrentDay = async ({ request, params }) => {

  const response = await fetch(`https://658dac0d7c48dce947399400.mockapi.io/days/4`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ isOpen: true })
  });
  console.log(response);
  if (!response.ok) {
    throw json({ message: 'Could not send open the day' }, { status: 400 });
  } else {
    return redirect('/');

  }
};


