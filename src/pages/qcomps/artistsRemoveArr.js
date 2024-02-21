import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  function handlePlusClick() {
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      likescore: prevPlayer.likescore + 1,
    }));
  }

  function handleFirstNameChange(e) {
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      firstName: e.target.value,
    }));
  }

  function handleLastNameChange(e) {
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      lastName: e.target.value,
    }));
  }

  return (
    <>
      <label>
        Like Score: <b>{player.likescore}</b>
        {'  '}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <br />
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
