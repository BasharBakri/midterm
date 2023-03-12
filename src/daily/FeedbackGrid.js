import FeedBackPostGeneral from "./FeedbackPostGeneral";
import FeedBackPostSocial from "./FeedbackPostSocial";
import TaskFeedBack from "./TaskFeedBack";
import { useRouteLoaderData } from "react-router-dom";
import RatingPieChart from "../stats/RatingPieChart";
import { useRevalidator } from "react-router-dom";
import { useEffect } from "react";


function FeedBackGrid() {

  const revalidator = useRevalidator();
  const info = useRouteLoaderData('root');
  const dailyFeedback = info.dayFeedBack;


  const allGeneralRating = dailyFeedback.map((oneFeed) => {
    return parseInt(oneFeed.generalrating)
  });
  const allSocialRating = dailyFeedback.map((oneFeed) => {
    return parseInt(oneFeed.socialrating)
  });

  const avgGeneralRating = allGeneralRating.length ? allGeneralRating.reduce((sum, rating) => (sum + rating), 0) / allGeneralRating.length : 0;
  const avgSocialRating = allSocialRating.length ? allSocialRating.reduce((sum, rating) => (sum + rating), 0) / allSocialRating.length : 0;
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Interval is running');
      console.log(revalidator.state);
      if (revalidator.state === "idle") {
        revalidator.revalidate();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [revalidator]);


  return (
    <div className="feedBackGrid">
      <h3>Genreral feedback for today:</h3>
      <ul className="feedBackTextContainer">
        <FeedBackPostGeneral dailyFeedback={dailyFeedback} />
      </ul>
      <RatingPieChart rating={avgGeneralRating}></RatingPieChart>
      <h3>Social feedback for today:</h3>
      <ul className="feedBackTextContainer">
        <FeedBackPostSocial dailyFeedback={dailyFeedback} />
      </ul>
      <RatingPieChart rating={avgSocialRating}></RatingPieChart>
      <br></br>
      <TaskFeedBack />
    </div>
  )
}


export default FeedBackGrid;