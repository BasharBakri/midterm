function FeedBackPost({ dailyFeedback }) {



  const feedbackCard = dailyFeedback.map((oneFeed, index) => {
    return (<div key={oneFeed.id}>
      {oneFeed.generaltext}
    </div>)
  })

  return <>{feedbackCard}</>




}

export default FeedBackPost;