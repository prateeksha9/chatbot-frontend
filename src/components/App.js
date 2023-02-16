import io from "socket.io-client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Chat } from ".";
import { joinroom } from "../action/chat";
const socket = io.connect("https://chatbot-sever-production.up.railway.app/", {
  transports: ["websocket"],
});

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const userDetail = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const joinRoom = () => {
    if (userDetail.username !== "" && userDetail.room !== "") {
      let user = {
        username: username,
        room: room,
      };
      dispatch(joinroom(user));
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat
          socket={socket}
          username={userDetail.username}
          room={userDetail.room}
        />
      )}
    </div>
  );
}

export default App;
