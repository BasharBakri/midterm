import FeedBackPost from "./FeedbackPost";
import TaskFeedBack from "./TaskFeedBack";
import { useRouteLoaderData } from "react-router-dom";


function FeedBackGrid() {

  const info = useRouteLoaderData('root');
  const dailyFeedback = info.dayFeedBack;


  const allGeneralRating = dailyFeedback.map((oneFeed) => {
    return parseInt(oneFeed.generalrating)
  });
  const allSocialRating = dailyFeedback.map((oneFeed) => {
    return parseInt(oneFeed.socialrating)
  });

  const avgGeneralRating = allGeneralRating.reduce((sum, rating) => (sum + rating)) / allGeneralRating.length;
  const avgSocialRating = allSocialRating.reduce((sum, rating) => (sum + rating)) / allSocialRating.length;

  return (<>
    <br></br>
    <div>Today's average Social atmosphere rating: {Math.round(avgSocialRating)}/10</div>
    <div>Today's average General atmosphere rating: {Math.round(avgGeneralRating)}/10</div>
    <br></br>
    <br></br>
    <FeedBackPost dailyFeedback={dailyFeedback} />
    <TaskFeedBack />
  </>)
}


export default FeedBackGrid;