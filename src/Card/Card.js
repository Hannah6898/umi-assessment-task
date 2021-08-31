import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <div className="Card">
        <Link to="/userPosts">
          <h3>{props.name}</h3>
          <p>{props.email}</p>
        </Link>
      </div>
    </div>
  );
}
