import React, { useState } from "react";

function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        <div className="question">{flashcard.question}</div>
        <div className="flashcard-option">
          {flashcard.options.map((option) => {
            return (
              <div className="flashcard-option" key={option}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}

export default FlashCard;
