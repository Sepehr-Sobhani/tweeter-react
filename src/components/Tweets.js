import React from 'react'
import { Tweet } from './Tweet'

export const Tweets = props => {
  const { tweetData } = props

  const tweets = tweetData ? tweetData.map((tweetData, index) => {
    /* {the name, handle, etc are being passed as props in Tweet.js} */
    return <Tweet key={index} name={tweetData.name} handle={tweetData.handle} avatar={tweetData.avatar} text={tweetData.text} date={tweetData.date}/>
  }) : "There is no tweet here"

  return (
    <section className="tweets">
      { tweets }
    </section>
  )
}