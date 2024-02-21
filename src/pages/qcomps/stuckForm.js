import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState(''); // State variable for the first name
  const [lastName, setLastName] = useState(''); // State variable for the last name

  function handleFirstNameChange(e) {
    setFirstName(e.target.value); // Update the first name state
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value); // Update the last name state
  }

  function handleReset() {
    setFirstName(''); // Reset the first name state
    setLastName(''); // Reset the last name state
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}
