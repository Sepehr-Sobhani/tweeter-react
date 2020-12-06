import React from 'react';
import './Tweet.css';

//the props values are coming from App.js when rendering the tweeter element
export const Tweet = props => {
  //destructuring so that we can access the values directly below
  //without doing props.name, props.handle, etc
  const { name, handle, avatar, text, date } = props

  return (
    <article className="tweet">
      <header className="tweet-header">
        <img className="avatar" src={avatar} alt="avatar" />
        <p className="user-name">{name}</p>
        <p className="handle">{handle}</p>
      </header>
      <div className="tweet-content">
        <p>{text}</p>
      </div>
      <footer className="tweet-footer">
        <p>{date}</p>
        <div className="icons">
          <i className="far fa-flag"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i></div>
      </footer>
    </article>
  )
}