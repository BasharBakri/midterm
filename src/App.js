import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainHome from './main/MainHome';
import DailyHome from './daily/DailyHome';
import StatsHome from './stats/StatsHome';
import RootLayout from './RootLayout';
import FeedBackGrid from './daily/FeedbackGrid';


import DailyRoot from './DailyRoot';



import { getDayFeedBack } from './APIs/getDayFeedBack';
import { addDayFeedBack } from './APIs/addDayFeedBack';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { index: true, element: <MainHome /> },
      { path: 'stats', element: <StatsHome /> },
      {
        path: 'daily', element: <DailyRoot />,
        children: [
          { index: true, element: <DailyHome />, action: addDayFeedBack },
          { path: 'feedback', element: <FeedBackGrid />, loader: getDayFeedBack, id: 'getDayFeedBack' }
        ]
      },
    ]
  }

]);

function App() {










  return (
    <RouterProvider router={router} />
  );
}

export default App;
