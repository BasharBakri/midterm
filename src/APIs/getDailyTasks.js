import { json } from "react-router-dom";

export const getDailyTasks = async () => {
  const response = await fetch('https://64020dfe3779a86262641f9e.mockapi.io/days/4', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  if (response.ok) {
    const resData = await response.json();
    return resData;
  } else {
    throw json({ message: 'Could not fetch items' }, { status: 500 })
  }
};