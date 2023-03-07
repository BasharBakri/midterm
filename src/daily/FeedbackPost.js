function FeedBackPost({ dailyFeedback }) {


  const feedBackSocialText = dailyFeedback.map((oneFeed, index) => {
    return (<p key={Math.random()}>
      {oneFeed.socialtext}
    </p>)

  })

  const feedBackGeneralText = dailyFeedback.map((oneFeed, index) => {
    return (<p key={Math.random()}>
      {oneFeed.generaltext}
    </p>)

  })

  return (<div>
    <h3>Genreral feedback for today:</h3>
    <div>{feedBackGeneralText}</div>
    <h3>Social feedback for today:</h3>
    <div>{feedBackSocialText}</div>
  </div>)




}

export default FeedBackPost;