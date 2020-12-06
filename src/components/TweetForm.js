import React, { useState } from 'react';
import './TweetForm.css';

export const TweetForm = props => {
  //using object destructuration to fetch information from props, which is passed in App.js
  const { addNewTweet } = props;

  //initial tweetText is "", it updates on every change on thextarea
  const [tweetText, setTweetText] = useState("");

  //counts remaining number of characters for the tweet
  const tweetRemainingLength = 140 - tweetText.length;

  //set the red style on the counter if the character count goes below 0
  const counterStyle = {color: tweetRemainingLength >= 0 ? "#545149" : "red"};

  const submitTweet = event => {
    event.preventDefault();

    if(tweetRemainingLength >= 0 && tweetRemainingLength <140) {
      //comes from props above, passes the updated text of the form to App.js once it's submitted
      addNewTweet(tweetText);

      //resets textarea
      setTweetText("");
    }
  }

  return (
    <section className="new-tweet">
      <section className="error-container">
        <i className="fas fa-exclamation-triangle"></i>
        <h4> </h4>
        <i className="fas fa-exclamation-triangle"></i>
      </section>

      {/* onSubmit calls submitTweet function, which triggers the addNewTweet function in turn, after preventing the default form behavior */}
      <form onSubmit={submitTweet} action="/tweets" method="POST">
        {/* onChange will activate every time there is a change in the textarea - it triggers setTweetText, which changes the value of tweetText, which in turn updates the value of textarea */}
        <textarea value={tweetText} onChange={event => setTweetText(event.target.value)} name="text" id="tweet-text" placeholder="What are you humming about?"></textarea>
        <footer>
          <button type="submit">Tweet</button>
          <output style={counterStyle} id="counter" name="counter" className="counter" for="tweet-text">{140 - tweetText.length}</output>
        </footer>
      </form>
    </section>
  )
}