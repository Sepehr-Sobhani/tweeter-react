import React from 'react';
import './Navigation.css';

export const Navigation = () => {
  
  return (
    <nav>

      <span>tweeter</span>

      <div id="compose-button">
        <a href="index" title="Compose Tweet">
          <span>Write</span> a new tweet
          <br />
          <i className="fas fa-angle-double-down"></i>
        </a>
      </div>

    </nav>
  )

}