import FeedBackPost from "./FeedbackPost";
import { useRouteLoaderData } from "react-router-dom";


function FeedBackGrid() {


  const dailyFeedback = useRouteLoaderData('getDayFeedBack');

  const allGeneralRating = dailyFeedback.map((oneFeed) => {
    return parseInt(oneFeed.generalrating)
  });
  const allSocialRating = dailyFeedback.map((oneFeed) => {
    return parseInt(oneFeed.socialrating)
  });

  const avgGeneralRating = allGeneralRating.reduce((sum, rating) => (sum + rating)) / allGeneralRating.length;
  const avgSocialRating = allSocialRating.reduce((sum, rating) => (sum + rating)) / allSocialRating.length;

  return (<>
    <div>Today's average Social atmosphere rating: {avgSocialRating}/10</div>
    <div>Today's average General atmosphere rating: {avgGeneralRating}/10</div>
    <br></br>
    <br></br>
    <FeedBackPost dailyFeedback={dailyFeedback} />
  </>)
}


export default FeedBackGrid