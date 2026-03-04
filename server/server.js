import express from 'express';
import cors from 'cors';
import ollama from 'ollama';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Chat endpoint using Ollama (local AI)
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    console.log('Received message:', message);

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('Calling Ollama API...');

    // Using Ollama with a local model (default: llama3)
    const model = process.env.OLLAMA_MODEL || 'llama3';
    
    const response = await ollama.chat({
      model: model,
      messages: [
        {
          role: 'user',
          content: message
        }
      ],
      options: {
        temperature: 0.7,
        top_p: 0.9,
      }
    });

    console.log('Ollama Response:', response);

    // Extract the bot response
    let botResponse;
    if (response.message && response.message.content) {
      botResponse = response.message.content;
    } else {
      botResponse = 'Sorry, I could not generate a response.';
    }

    res.json({ response: botResponse });

  } catch (error) {
    console.error('Error calling Ollama API:');
    console.error('Message:', error.message);
    
    res.status(500).json({ 
      error: error.message || 'Failed to get response from AI' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

