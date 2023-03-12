import { json, redirect } from "react-router-dom";




export const openCurrentDay = async ({ request, params }) => {

  const response = await fetch(`https://64020dfe3779a86262641f9e.mockapi.io/days/4`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ isOpen: true })
  });
  console.log(response);
  if (!response.ok) {
    throw json({ message: 'Could not send open the day' }, { status: 400 })
  } else {
    return redirect('/');

  }
};


