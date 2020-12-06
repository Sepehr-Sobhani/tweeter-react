import React from 'react';
import './Profile.css';

export const Profile = () => {
  return (
    <aside>
    <div className="profile-pic">
      <img src="profile-hex.png" alt="profile" />
    </div>
    <br />
    <div className="name">
      <h2>Nati <span>Mars</span></h2>
    </div>
  </aside>
  )
}