import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./Header";
import Post from "./Post";
import { db } from "./firebase.js";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  });

  return (
    <div className="App">
      <Header />

      {posts.map((post) => {
        return (
          <Post
          
            imgURL={post.imgURL}
            username={post.username}
            postImg={post.postImg}
            userImg={post.userImg}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
}
