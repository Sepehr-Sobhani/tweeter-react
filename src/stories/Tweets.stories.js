import React from 'react';
import { Tweets } from '../components/Tweets'

export default {title : "Tweet Container" }

export const emptyTweet = () => <Tweets />

export const populatedTweet = () => {
  const tweets =   [
    {
      name: "Newton",
      handle: "@SirIsaac",
      avatar: "https://i.imgur.com/73hZDYK.png",
      text: "If I have seen further it is by standing on the shoulders of giants",
      date: "10 days ago"
    },
    {
      name: "Descartes",
      handle: "@rd",
      avatar: "https://i.imgur.com/nlhLi3I.png",
      text: "Je pense , donc je suis",
      date: "11 days ago"
    }
  ]

  // return <Tweet name={singleTweet.name} handle={singleTweet.handle} avatar={singleTweet.avatar} text={singleTweet.text} date={singleTweet.date} />

  return <Tweets tweetData={tweets} />
}