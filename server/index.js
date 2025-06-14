const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoute");
const messages = require("./routes/messages");
const app = express();
const socket = require("socket.io");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messages);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true });
mongoose.connect(process.env.MONGO_URL, {
   
})
.then(() => {
    console.log("DB connection successful");
})
.catch((err)=>{
    console.log(err.message);
});

const server= app.listen(process.env.PORT,() => {
    console.log(`Server started on PORT ${process.env.PORT}`);
});

const io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });
  
  global.onlineUsers = new Map();
  io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
    });
  
    socket.on("send-msg", (data) => {
      const sendUserSocket = onlineUsers.get(data.to);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-recieve", data.msg);
      }
    });
  });