import React from "react";
import "./styles.css";
import Header from "./Header";
import Post from "./Post";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Post 
      imgURL="/static/images/avatar/1.jpg"
      username='Kingsamba_'
      postImg="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
      userImg="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
      caption="This is the caption for my instagram post"
      />
      <Post 
      imgURL="/static/images/avatar/1.jpg"
      username='Kingsamba_'
      postImg="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
      userImg="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
      caption="This is the caption for my instagram post"
      />
      <Post 
      imgURL="/static/images/avatar/1.jpg"
      username='Kingsamba_'
      postImg="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
      userImg="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
      caption="This is the caption for my instagram post"
      />
    </div>
  );
}
