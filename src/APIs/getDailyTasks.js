import { json } from "react-router-dom";

export const getDailyTasks = async () => {
  const response = await fetch('https://658dac0d7c48dce947399400.mockapi.io/days/4', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  if (response.ok) {
    const resData = await response.json();
    return resData;
  } else {
    throw json({ message: 'Could not fetch items' }, { status: 500 });
  }
};