# 💬 Real-Time Chat App

This is a full-stack real-time chat application built using:

- ⚛️ React (Frontend)
- 🟢 Node.js + Express (Backend)
- 🔌 Socket.IO for real-time WebSocket communication
- 🛢️ MongoDB for message persistence

---

## 🚀 Features

- Send and receive messages in real time
- Stores chat history in MongoDB
- Clean UI built with React
- Multi-user support using WebSockets

---

## 🛠️ Tech Stack

| Layer        | Technology        |
|--------------|------------------|
| Frontend     | React, JavaScript |
| Backend      | Node.js, Express  |
| Real-time    | Socket.IO         |
| Database     | MongoDB           |

---

## 🔧 Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/meetchauhan1/real-time-chat-app.git
cd real-time-chat-app


# For frontend
cd client
npm install

# For backend
cd ../server
npm install


# Start backend
cd server
node index.js

# Start frontend
cd ../client
npm start
