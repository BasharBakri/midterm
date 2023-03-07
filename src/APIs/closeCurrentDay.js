import { json } from "react-router-dom";




export const closeCurrentDay = async ({ request, params }) => {

  const response = await fetch(`https://64020dfe3779a86262641f9e.mockapi.io/days/2`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ isOpen: false })
  });
  console.log(response);
  if (!response.ok) {
    throw json({ message: 'Could not send close the day' }, { status: 400 })
  }
};
