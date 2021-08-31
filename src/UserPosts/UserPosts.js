import React from "react";
import { Link } from "react-router-dom";
import "./UserPosts.css";

export default function UserPosts(props) {
  return (
    <div>
      <h2>Posts by name</h2>
      <Link className="back-link" to="/">
        Go back
      </Link>
      <p className="post-no">Number of posts:</p>
      <div className="container">
        <div className="user">
          <h3>Name</h3>
          <p>Email</p>
        </div>
        <div className="list">
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
