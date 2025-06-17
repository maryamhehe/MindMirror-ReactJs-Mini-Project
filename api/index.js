const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Allow CORS from your frontend deployed domain:
app.use(cors({
  origin: process.env.FRONTEND_URL || '*'  // safer: replace '*' with your frontend vercel URL
}));

app.use(express.json());

app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192',
        messages,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('Groq error:', error.message);
    res.status(500).json({ error: 'Oopsie! Something went wrong with Groq.' });
  }
});

// ❌ REMOVE app.listen()
// ✅ Export the express app for Vercel
module.exports = app;
