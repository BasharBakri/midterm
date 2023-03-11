function FeedBackPostSocial({ dailyFeedback }) {


  const feedBackSocialText = dailyFeedback.map((oneFeed, index) => {
    return (<li key={Math.random()}>
      {oneFeed.socialtext}
    </li>)

  })



  return (<>

    {feedBackSocialText}
  </>)




}

export default FeedBackPostSocial;