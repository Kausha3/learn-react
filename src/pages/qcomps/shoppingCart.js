import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(prevPending => prevPending + 1); // Use functional update for pending
    await delay(3000); // Wait for 3 seconds
    setPending(prevPending => prevPending - 1); // Decrement pending using the latest state
    setCompleted(prevCompleted => prevCompleted + 1); // Increment completed using the latest state
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
