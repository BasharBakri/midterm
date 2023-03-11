function FeedBackPostGeneral({ dailyFeedback }) {



  const feedBackGeneralText = dailyFeedback.map((oneFeed, index) => {
    return (<li key={Math.random()}>
      {oneFeed.generaltext}
    </li>)

  })

  return (
    <>
      {feedBackGeneralText}
    </>
  )




}

export default FeedBackPostGeneral;