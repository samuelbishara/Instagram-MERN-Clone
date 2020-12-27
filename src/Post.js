import React from "react";
import Avatar from "@material-ui/core/Avatar";

export default function Post(props) {
  return (
    <div className="post">

      <div id="post-header">
        {/* Header -> avatar + username */}
        <Avatar
          className="post-avatar"
          alt="🔥"
          src={props.userImg}
        />
        <h3>{props.username}</h3>
      </div>

      {/* image */}
      <img
        className="post-img"
        src={props.postImg}
        alt=""
      />

      {/* uusername + caption */}
      <h4 className="post-text">
        <strong>{props.username}:</strong> {props.caption}</h4> 
    </div>
  );
}
