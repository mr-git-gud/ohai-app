import React from "react";
import OnlineUser from "./OnlineUser";
import SignOut from "../SignOut/SignOut";

const OnlineUsers = ({
  connectedSockets,
  setPmSid,
  setPmUserName,
  pmUserName,
  session_creds,
  changeRoute,
  setSessionCredentials,
  socket
}) => {
  return (
    <div id="activeUsers" className="col-md-auto">
      <h6 id="online-users-header">Online:</h6>
      {connectedSockets.map((cs, i) => {
        return (
          <OnlineUser
            key={i}
            username={cs.username}
            sid={cs.sid}
            setPmUserName={setPmUserName}
            setPmSid={setPmSid}
            currentUser={session_creds.email}
          />
        );
      })}
      <SignOut
        changeRoute={changeRoute}
        setSessionCredentials={setSessionCredentials}
        socket={socket}
      />
    </div>
  );
};

export default OnlineUsers;
