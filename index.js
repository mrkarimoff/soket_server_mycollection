require("dotenv").config();
const PORT = process.env.PORT || 8080;

const io = require("socket.io")(PORT, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

io.on("connection", (socket) => {
  // when connect
  console.log("user connected");

  // send and get comments
  socket.on("sendComment", (comment) => {
    io.emit("getComment", { ...comment });
  });

  // when disconnect
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
