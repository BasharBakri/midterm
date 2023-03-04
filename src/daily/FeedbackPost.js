function FeedBackPost({ dailyFeedback }) {


  const feedBackSocialText = dailyFeedback.map((oneFeed, index) => {
    return (<div key={oneFeed.id}>
      {oneFeed.socialtext}
    </div>)

  })

  const feedBackGeneralText = dailyFeedback.map((oneFeed, index) => {
    return (<div key={oneFeed.id}>
      {oneFeed.generaltext}
    </div>)

  })

  return (<div>
    <h3>Genreral feedback for today:</h3>
    <p>{feedBackGeneralText}</p>
    <h3>Social feedback for today:</h3>
    <p>{feedBackSocialText}</p>
  </div>)




}

export default FeedBackPost;