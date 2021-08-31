import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Card from "./Card/Card";
import UserPosts from "./UserPosts/UserPosts";

function App() {
  const [userData, setUserData] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error loading data", error);
      });
  }, []);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setUserPosts(response.data);
      })
      .catch((error) => {
        console.error("Error loading data", error);
      });
  }, []);

  //Working on formatting data for the user posts

  // userPosts.map((user, index) => {
  //   console.log(user.userId);
  //   if (user.userId === userData.id) {
  //     console.log(user.title);
  //   }
  // });

  return (
    <div className="App">
      <h1>Umi React Assessment</h1>
      <Switch>
        <Route exact path="/">
          <div className="cards">
            {userData.map((user, index) => {
              return <Card key={index} name={user.name} email={user.email} />;
            })}
          </div>
        </Route>
        <Route path="/userPosts">
          {" "}
          <UserPosts user={userPosts} />{" "}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
