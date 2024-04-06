import { io } from "socket.io-client";

const local = "http://localhost:8080";
const prod = "https://api.jiwoo.so";

const socket = io(import.meta.env.MODE === "development" ? local : prod, {
  forceNew: false,
});

export default socket;
