import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      [name]: name === 'likescore' ? parseInt(value, 10) : value,
    }));
  }

  const { firstName, lastName, likescore } = player; // Destructuring for clarity

  return (
    <>
      <label>
        Like Score: <b>{likescore}</b>
        {'  '}
        <button onClick={() => handleInputChange({ target: { name: 'likescore', value: likescore + 1 }})}>+1</button>
      </label>
      <br />
      <label>
        First name:
        <input name="firstName" value={firstName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Last name:
        <input name="lastName" value={lastName} onChange={handleInputChange} />
      </label>
    </>
  );
}
