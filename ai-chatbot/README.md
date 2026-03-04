# AI Chatbot

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW54eW54eG54eG54eG54eG54eG54eG54eG54eG54eG54eG54eG54eG54eG54eG54eGZlcD12ZGFjd2EvemlwdGMvZ3AtaW8vbG9nb3MtbGlzdC5naWY/bcKmIWkUMCjVm8xt3r/giphy.gif" alt="Chat Animation" width="300"/>
</p>

```
  ┌─────────────────────────────────────────────────────────────┐
  │                    🤖 AI CHATBOT 🤖                        │
  ├─────────────────────────────────────────────────────────────┤
  │                                                             │
  │   👤 User          ──────►     💬 Assistant              │
  │                                                             │
  │   "Hello"                      "Hello! How can I         │
  │                                    help you today?"        │
  │                                                             │
  │   ┌─────────────────────────────────────────────────┐     │
  │   │  💭 Thinking...  ████████████░░░░░░░  80%      │     │
  │   └─────────────────────────────────────────────────┘     │
  │                                                             │
  └─────────────────────────────────────────────────────────────┘
```

---

A modern AI-powered chatbot built with React, Vite, and Ollama (local AI).

## Features

- 🤖 **Local AI** - Powered by Ollama (llama3 model) - runs locally on your machine
- 💬 **Real-time Chat** - Smooth messaging experience
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS
- 🔄 **Loading States** - Visual feedback during AI responses
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Backend**: Node.js + Express
- **AI**: Ollama (llama3)

## Prerequisites

Before running this project, make sure you have:

1. **Node.js** (v18 or higher) installed
2. **Ollama** installed and running locally
   - Download from: https://ollama.ai
   - Make sure the Ollama server is running (default: http://localhost:11434)

## Installation

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

## Running the Application

### Start the Backend Server

```bash
cd server
npm start
```

The server will run on http://localhost:5000

### Start the Frontend Development Server

In a new terminal:

```bash
cd ai-chatbot
npm run dev
```

The frontend will run on http://localhost:5173

## Configuration

### Environment Variables

Create a `.env` file in the `server` directory:

```env
# Server Port (optional, default: 5000)
PORT=5000

# Ollama Model (optional, default: llama3)
OLLAMA_MODEL=llama3
```

### Available Ollama Models

You can use any model installed in Ollama. To list available models:

```bash
ollama list
```

Popular models:
- llama3 (default)
- llama2
- mistral
- codellama
- neural-chat

To install a new model:

```bash
ollama pull <model-name>
```

## API Endpoints

### POST /api/chat

Send a message to the AI chatbot.

**Request:**
```json
{
  "message": "Hello, how are you?"
}
```

**Response:**
```json
{
  "response": "Hello! I'm doing great, thank you for asking..."
}
```

### GET /api/health

Check if the server is running.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Project Structure

```
ai-chatboat/
├── ai-chatbot/           # Frontend React application
│   ├── src/
│   │   ├── components/   # React components
│   │   │   └── Chatbot.jsx
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # App entry point
│   ├── package.json
│   └── vite.config.js
├── server/               # Backend Express server
│   ├── server.js         # Main server file
│   ├── package.json
│   └── node_modules/
└── README.md
```

## Troubleshooting

### Ollama not found error

Make sure Ollama is installed and running:
```bash
ollama --version
```

### Port already in use

If port 5000 or 5173 is already in use, you can change the port:
- Backend: Modify `PORT` in `.env`
- Frontend: Modify `port` in `vite.config.js`

### Model not found

Make sure the Ollama model is installed:
```bash
ollama list
ollama pull llama3
```


