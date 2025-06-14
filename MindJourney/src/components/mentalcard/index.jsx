import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const MentalTasks = () => {
  const tasks = [
    "Take a 5-minute deep breathing break",
    "Write 3 things you're grateful for",
    "Drink a full glass of water",
    "Go outside for fresh air",
    "Take a 10-minute mindful walk",
    "Write one positive affirmation"
  ];

  const [completed, setCompleted] = useState([]);
  const [celebrated, setCelebrated] = useState(false);

  const toggleTask = (index) => {
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const allDone = completed.length === tasks.length;

  useEffect(() => {
    if (allDone && !celebrated) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
      setCelebrated(true);
    }
  }, [allDone, celebrated]);

  return (
    <section className="container my-5">
      <h2 className="text-center mb-2">🌿 Daily Mental Wellness Tasks</h2>
      <p className="text-center text-muted mb-4">Tick the tasks that you have completed today</p>
      <div className="row g-3">
        {tasks.map((task, index) => (
          <div key={index} className="col-md-6">
            <div
              className={`task-card card p-3 shadow-sm transition ${
                completed.includes(index) ? 'completed' : ''
              }`}
              onClick={() => toggleTask(index)}
            >
              {task}
            </div>
          </div>
        ))}
      </div>

      {allDone && (
        <div className="alert alert-success mt-4 text-center animate__animated animate__fadeIn">
          ✅ You’ve completed all your tasks for today! Great job!
        </div>
      )}
    </section>
  );
};

export default MentalTasks;
