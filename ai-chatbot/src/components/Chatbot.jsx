import { useState, useRef, useEffect } from "react";
import axios from "axios";

function Message({ msg }) {
  const isUser = msg.sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
        isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      }`}>
        <p className="text-sm">{msg.text}</p>
      </div>
    </div>
  );
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/chat",
        { message: userMessage.text },
        { timeout: 30000 }
      );
      const botMessage = { sender: "bot", text: res.data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      let errorMessage = "Sorry, something went wrong.";
      if (err.response?.data?.error) {
        errorMessage = err.response.data.error;
      } else if (err.code === "ECONNREFUSED") {
        errorMessage = "Cannot connect to server. Make sure backend is running.";
      }
      setError(errorMessage);
      setMessages((prev) => [...prev, { sender: "bot", text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{ sender: "bot", text: "Hello! I'm your AI assistant. How can I help you today?" }]);
    setError(null);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <header className="bg-gray-800 p-4 border-b border-gray-700">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-xl">
              🤖
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">AI Assistant</h1>
            </div>
          </div>
          <button 
            onClick={clearChat}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm"
          >
            Clear
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((msg, index) => (
            <Message key={index} msg={msg} />
          ))}
          {isLoading && (
            <div className="flex justify-start mb-3">
              <div className="bg-gray-200 px-4 py-2 rounded-lg">
                <span className="text-gray-500">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {error && (
        <div className="mx-4 mb-2">
          <div className="bg-red-900 text-red-200 p-3 rounded-lg text-sm">
            {error}
          </div>
        </div>
      )}

      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <input
            className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className={`px-6 py-3 rounded-lg font-semibold ${
              isLoading || !input.trim()
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            {isLoading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}

