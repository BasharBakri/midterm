import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainHome from './main/MainHome';
import DailyHome from './daily/DailyHome';
import StatsHome from './stats/StatsHome';
import AuthenticationPage from './Authentication/AuthenticationPage';
import RootLayout from './RootLayout';
import FeedBackGrid from './daily/FeedbackGrid';
import AddFeedback from './daily/AddFeedback';
import AddTaskFeedback from './daily/AddTaskFeedback';
import { getOpenState } from './APIs/getOpenState';
import { addTaskfunc } from './APIs/addTaskFunc';
import { addTaskFeedBackFunc } from './APIs/addTaskFeedBackFunc';

import DailyRoot from './DailyRoot';
// import ErrorPage from './ErrorPage';


import { getDayFeedBack } from './APIs/getDayFeedBack';
import { addDayFeedBack } from './APIs/addDayFeedBack';
import { getDailyTasks } from './APIs/getDailyTasks';



const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, loader: getOpenState, id: 'root',

    children: [
      { index: true, element: <MainHome /> },
      { path: 'stats', element: <StatsHome /> },
      { path: 'auth', element: <AuthenticationPage /> },
      {
        path: 'daily', element: <DailyRoot />, loader: getDailyTasks, id: 'tasklist',
        children: [
          { index: true, element: <DailyHome />, action: addTaskfunc, },
          {
            path: 'addfeedback', element: <AddFeedback />, action: addDayFeedBack,
          },
          { path: 'addtaskfeedback', element: <AddTaskFeedback />, action: addTaskFeedBackFunc },
          {
            path: 'feedback', element: <FeedBackGrid />, loader: getDayFeedBack, id: 'getDayFeedBack',
          },
        ]
      },
    ]
  }

]);

//manager createDay, openDay, createTask, assign task to employee 
// worker task: isComplete, isWorking, leavefeedback: (at the end)

function App() {










  return (
    <RouterProvider router={router} />
  );
}

export default App;
