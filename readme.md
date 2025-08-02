# 📱 ChitChat — Real-Time Chat Application 💬⚡

A blazing-fast and scalable **MERN stack** real-time chat application with modern UI, live messaging via **Socket.IO**, and robust **JWT-based authentication**. Built with modular architecture and full-stack best practices. 🚀✨

---

## 🚀 Features

✅ **Modular MERN Architecture (MVC + MVP Principles)**  
✅ **JWT Authentication** with secure, HTTP-only cookies  
✅ **Real-time Bi-directional Messaging** using **Socket.IO**  
✅ **Live Online User Indicator** (Green Dot) via WebSocket  
✅ **Full Authentication Flow:** Login, Signup, Logout  
✅ **Persistent Sessions** with Cookie-based auth  
✅ **Responsive UI** using **Tailwind CSS** + **DaisyUI**  
✅ **User Search and Dynamic Conversations**  
✅ **React Context API** for global state  
✅ **React Hot Toast** for sleek alerts and feedback  
✅ **Code-Splitting and Custom Hooks** for optimization  

---

## 🛠 Tech Stack

**Frontend:**  
- ⚛️ React  
- 🎨 Tailwind CSS + DaisyUI  
- 📦 React Context API  
- 🔔 React Hot Toast  

**Backend:**  
- 🧠 Node.js + Express.js  
- 💾 MongoDB (via Mongoose)  
- 🔐 JWT + HTTP-only Cookies  
- 📡 Socket.IO for Real-time Communication  

**Protocols & Standards:**  
- RESTful APIs  
- WebSockets  
- CORS Configurations  
- Environment Variable Isolation  

---

## 📁 Project Structure

ChitChat/
├── backend/
│   ├── controllers/        # Business logic
│   ├── models/             # Mongoose schemas (User, Message)
│   ├── routes/             # Auth & message APIs
│   ├── socket/             # Socket.IO setup and events
│   ├── server.js           # Entry point
│   └── .env                # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── sidebar/
│   │   ├── Context/        # Auth and socket providers
│   │   ├── hooks/          # useLogin, useLogout, useConversation
│   │   ├── pages/          # Main UI pages
│   │   └── App.jsx         # Root component
│   ├── index.html
│   └── tailwind.config.js
└── README.md


---

## ⚙️ Getting Started

### 🔄 Clone the Repository

```bash
git clone https://github.com/yourusername/ChatApp.git
cd ChatApp

cd backend
npm install

Create a .env file inside backend/

PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development

Start the server:
npm run dev
```

🎨 Frontend Setup

cd ../frontend
npm install
npm run dev
Visit 👉 http://localhost:3000

## Credits

- [DaisyUI](https://daisyui.com/)
- [Socket.IO](https://socket.io/)
- [Tailwind CSS](https://tailwindcss.com/)

- Thanks for reading till here if you loved the project then Stars 🌟 are appreciated!
