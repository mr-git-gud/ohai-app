import React, { useRef, useEffect } from "react";
import Post from "../Post/Post";
import "../townsquare.css";

const ChatBox = ({ posts }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (posts.length) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToBottom, [posts]);

  return (
    <div id="chatBox" className="col">
      {posts
        ? posts.map((pst, i) => {
            return (
              <Post
                key={i}
                user={pst.user}
                message={pst.message}
                whisper={pst.whisper}
                src={pst.src}
                time={pst.time}
                rgb={pst.rgb}
                from={pst.from}
                to={pst.to}
              />
            );
          })
        : ""}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatBox;
