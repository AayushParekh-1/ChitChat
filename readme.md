# ChatApp

A real-time chat application built with React, Node.js, Express, MongoDB, Socket.IO, and Tailwind CSS (with DaisyUI).

---

## Features
- **Followed the mvp structure of mern stack applications**
- **User Authentication** (Login/Signup with JWT & cookies)
- **Real-time Messaging** (Socket.IO)
- **Online User Status** (Green dot indicator)
- **Responsive UI** (Tailwind CSS + DaisyUI)
- **User Search**
- **Logout Functionality**

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express, MongoDB (Mongoose), Socket.IO
- **Authentication:** JWT, HTTP-only cookies
- **Other:** React Context API, React Hot Toast

---

## Folder Structure

```
ChatApp/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── sidebar/
│   │   ├── Context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── index.html
│   └── tailwind.config.js
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ChatApp.git
cd ChatApp
```

### 2. Setup Backend

```bash
cd backend
npm install
# Create a .env file with your MongoDB URI, JWT secret, and other configs
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Environment Variables

Create a `.env` file in the `backend/` directory:

```
PORT=5001
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

---

## Usage

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Register or log in.
- Start chatting with other users in real time!

---

## Key Files

- **Backend**
  - `server.js` — Express app and Socket.IO server
  - `models/` — Mongoose models (User, Message)
  - `routes/` — Auth and message routes
  - `socket/socket.js` — Socket.IO logic

- **Frontend**
  - `src/Context/SocketContext.jsx` — Socket.IO client context
  - `src/Context/AuthContext.jsx` — Auth context
  - `src/components/sidebar/Conversation.jsx` — User list & online status
  - `src/hooks/useLogin.js`, `useLogout.js` — Auth hooks

---

## Troubleshooting

- **Online status not showing:**  
  Ensure Socket.IO server is running and event names match on both client and server.

- **Login issues:**  
  Check backend `/api/auth/login` route and MongoDB connection.

- **Green dot not visible:**  
  Make sure DaisyUI is installed and the correct HTML structure is used for avatars.

---

## License

MIT

---

## Credits

- [DaisyUI](https://daisyui.com/)
- [Socket.IO](https://socket.io/)
- [Tailwind CSS](https://tailwindcss.com/)