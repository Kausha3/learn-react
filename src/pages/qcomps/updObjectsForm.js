import { useState } from 'react';

export default function Scoreboard() {
  const [likeScore, setLikeScore] = useState(10);
  const [playerInfo, setPlayerInfo] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
  });

  function handlePlusClick() {
    setLikeScore(prevScore => prevScore + 1);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPlayerInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  return (
    <>
      <label>
        Like Score: <b>{likeScore}</b>
        {'  '}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <br />
      <label>
        First name:
        <input
          name="firstName"
          value={playerInfo.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last name:
        <input
          name="lastName"
          value={playerInfo.lastName}
          onChange={handleInputChange}
        />
      </label>
    </>
  );
}
