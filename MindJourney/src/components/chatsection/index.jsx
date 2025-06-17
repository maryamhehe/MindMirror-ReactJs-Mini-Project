import React, { useState, useRef, useEffect } from 'react';

export default function ChatSection() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hey there, I’m really glad you’re here🧡. Whether you're feeling low, overwhelmed, or just need someone to talk to; I’m here to listen and support you. How are you feeling right now?",
    },
  ]);
  const [input, setInput] = useState('');
  const chatBoxRef = useRef(null);
const handleSend = async () => {
  if (!input.trim()) return;
  const userMessage = input;

  // Update UI immediately
  setMessages((prev) => [...prev, { type: 'user', text: userMessage }]);
  setInput('');
  setMessages((prev) => [...prev, { type: 'bot', text: 'Typing...' }]);

  // Convert chat messages to OpenAI format
  const formattedMessages = [
    {
      role: 'system',
      content: `You are a warm, emotionally supportive companion.

Your primary job is to provide emotional support and comfort. Only if the user directly asks for a fun fact, history fact, science fact, or a joke — then share one short real example (2-3 lines). Never give a fun fact randomly.

If the user does not ask for a fact or joke, do not include one.

Be gentle, kind, and empathetic. After sharing a fact (only when asked), always guide the user back to their emotions with a warm, caring follow-up question.`
    },
    ...messages.map((msg) => ({
      role: msg.type === 'user' ? 'user' : 'assistant',
      content: msg.text,
    })),
    { role: 'user', content: userMessage },
  ];

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: formattedMessages }),
    });
      const data = await response.json();
         setMessages((prev) => {
      const updated = [...prev];
      updated.pop(); 
      return [...updated, { type: 'bot', text: data.reply }];
    });
     
    }
    catch (error) {
    console.error('Error communicating with backend:', error);
    setMessages((prev) => [
      ...prev,
      { type: 'bot', text: "Oops, I couldn't respond right now. Please try again later." }
    ]);
  }
  };

  useEffect(() => {
    const chatBox = chatBoxRef.current;
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll only the messages box
    }
  }, [messages]);

  return (
    <section className="chat-container container mt-5 p-4 shadow-sm rounded">
      <div className="chat-messages" ref={chatBoxRef}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.type === 'user' ? 'chat-user' : 'chat-bot'}`}
          >
            <div className={`message-bubble ${msg.type === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
              <p className="mb-0">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="btn btn-send" onClick={handleSend}>
          Send
        </button>
      </div>

    </section>
  );
}
