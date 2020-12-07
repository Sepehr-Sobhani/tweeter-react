import React from 'react';
import { Tweet } from '../components/Tweet'

export default {title : "Singular Tweet" }

export const emptyTweet = () => <Tweet />

export const populatedTweet = () => {
  const singleTweet =   {
    name: "Newton",
    handle: "@SirIsaac",
    avatar: "https://i.imgur.com/73hZDYK.png",
    text: "If I have seen further it is by standing on the shoulders of giants",
    date: "10 days ago"
  }

  // return <Tweet name={singleTweet.name} handle={singleTweet.handle} avatar={singleTweet.avatar} text={singleTweet.text} date={singleTweet.date} />

  return <Tweet {...singleTweet} />
}