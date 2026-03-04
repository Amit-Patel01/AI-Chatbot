# AI Chatboat - Local AI Chatbot

<p align="center">
  <img src="https://raw.githubusercontent.com/ollama/ollama/main/docs/logo.svg" alt="Ollama Logo" width="200"/>
</p>

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW54eW54eG54eG54eG54eG54eG54eG54eG54eG54eG54eG54eG54eG54eG54eG54eGZlcD12ZGFjd2EvemlwdGMvZ3AtaW8vbG9nb3MtbGlzdC5naWY/bcKmIWkUMCjVm8xt3r/giphy.gif" alt="Chat Animation" width="400"/>
</p>

```
  ╔═══════════════════════════════════════════════════════════════╗
  ║                     🤖 AI CHATBOT 🤖                          ║
  ║                  Powered by Ollama (llama3)                   ║
  ╠═══════════════════════════════════════════════════════════════╣
  ║                                                               ║
  ║    ┌─────────────┐           ┌─────────────┐                 ║
  ║    │   User      │ ────────► │    AI       │                 ║
  ║    │  "Hello!"   │           │ "Hi there!" │                 ║
  ║    └─────────────┘           └─────────────┘                 ║
  ║                                                               ║
  ╚═══════════════════════════════════════════════════════════════╝
```

---

A modern AI-powered chatbot application built with React, Node.js, Express, and Ollama (local AI).

## 🚀 Features

- **Local AI Powered** - Uses Ollama (llama3) for privacy-focused, offline-capable AI conversations
- **Real-time Messaging** - Smooth chat experience with loading indicators
- **Modern Stack** - Built with React, Vite, Tailwind CSS, Node.js, and Express
- **Easy Setup** - Simple installation and configuration

## 📋 Prerequisites

- Node.js v18 or higher
- Ollama installed and running locally
  - Download from: https://ollama.ai

## 🛠️ Installation & Setup

### 1. Install Frontend Dependencies
```bash
cd ai-chatbot
npm install
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
```

## ▶️ Running the Application

### Step 1: Start the Backend Server
```bash
cd server
npm start
```
Server runs on: http://localhost:5000

### Step 2: Start the Frontend
In a new terminal:
```bash
cd ai-chatbot
npm run dev
```
Frontend runs on: http://localhost:5173

## ⚙️ Configuration

Create a `.env` file in the `server` directory:

```env
PORT=5000
OLLAMA_MODEL=llama3
```

## 📁 Project Structure

```
ai-chatboat/
├── ai-chatbot/          # React Frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   │   └── Chatbot.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── server/             # Express Backend

│   ├── server.js
│   └── package.json
└── README.md
```

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/chat` | POST | Send chat message |
| `/api/health` | GET | Health check |

### Chat Request Example
```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!"}'
```

## 🔧 Troubleshooting

- **Ollama model not found**: Run `ollama list` to check installed models
- **Port in use**: Modify PORT in your .env file
- **Ollama not running**: Start Ollama with `ollama serve`

