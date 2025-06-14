import React, { useState } from 'react';

const Quotes = () => {
  const quotes = [
    "Take a deep breath. You are stronger than you think.",
    "One step at a time is still progress.",
    "You are not alone. There’s support around you.",
    "Healing takes time, and that’s okay.",
    "You are doing your best, and that matters.",
    "Your feelings are valid.",
    "Self-care is not selfish. It’s necessary.",
    "You have survived 100% of your worst days.",
    "Progress, not perfection.",
    "Rest is productive too."
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const handleNextQuote = () => {
    const next = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(next);
  };

  return (
    <section className="container text-center my-5 p-4 shadow rounded bg-light">
      <h2 className="mb-4">🧘 Daily Mental Health Quote</h2>
      <blockquote className="blockquote fs-4 fw-semibold text-muted">
        “{currentQuote}”
      </blockquote>
      <button className="btn btn-danger mt-4" onClick={handleNextQuote}>
        Next Quote
      </button>
    </section>
  );
};

export default Quotes;
