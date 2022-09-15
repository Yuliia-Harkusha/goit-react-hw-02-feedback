import React from 'react';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <div>
        <button onClick={() => onLeaveFeedback('good')}>Good</button>
      </div>
      <div>
        <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      </div>
      <div>
        <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </div>
    </>
  );
};
