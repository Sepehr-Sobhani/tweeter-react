//useState is a hook used to change state
import React, { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { TweetForm } from './components/TweetForm';
import { Tweet } from './components/Tweet';

const initialTweetData = [
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
  },
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

function App() {
  //destructuring the array returned by useState
  //tweetData is the value contained in the state
  //setTweetData is the function to change the state value
  const [ tweetData, setTweetData ] = useState(initialTweetData);

  //the map method returns a new array that contains the changes returned by the method
  const tweets = tweetData.map((tweetData, index) => {
    /* {the name, handle, etc are being passed as props in Tweet.js} */
    return <Tweet key={index} name={tweetData.name} handle={tweetData.handle} avatar={tweetData.avatar} text={tweetData.text} date={tweetData.date}/>
  })

  const addNewTweet = text => {
    const newTweet = {
      name: "Nati Mars",
      handle: "@Nut",
      avatar: "https://i.imgur.com/nlhLi3I.png",
      // this gets updated in the TweetForm compenent
      text,
      date: "5 days ago"
    }

    //using the spread operator (...) ensures that newTweet is prepended to the existing tweets and not replacing them on click
    setTweetData([newTweet, ...tweetData])
  }

  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        {/* below we are giving the addNewTweet function as a prop to the TweetForm component, so that the component can use the function to set the value of newTweet */}
        <TweetForm addNewTweet={addNewTweet}/>
        <section className="tweets">
          {tweets}
        </section>
      </main>
    </div>
  );
}

export default App;
