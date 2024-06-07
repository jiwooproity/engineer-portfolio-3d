import { io } from "socket.io-client";
import { getRuntimeMode } from "../utils";

const ioURL = getRuntimeMode("http://localhost:8080", "https://api.jiwoo.so");

const socket = io(ioURL, {
  forceNew: false,
});

export default socket;
