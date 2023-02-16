import io from "socket.io-client";
import { CREATE_USER, EXTEND_LIST } from "./actionType";
const socket = io.connect("http://localhost:3000", {
  transports: ["websocket"],
});
// define all the required actions to manage the cart state
export function joinroom(userdetails) {
  socket.emit("join_room", userdetails.room);
  return {
    type: CREATE_USER,
    userdetails,
  };
}
export function extendMessageList(messageData) {
  return {
    type: EXTEND_LIST,
    messageData,
  };
}
