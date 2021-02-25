import React, { useState } from 'react';
import UserData from '../UserData';

const UserDetailsPageHook = () => {
  const [user, setUser] = useState({
    firstName: 'Elena',
    lastName: 'Tsemko',
    age: 15,
    email: 'mail@gmail.com',
    inputValue: '',
  });

  const handleInputChange = e => {
    setUser(prevState => ({
      ...prevState,
      inputValue: e.target.value,
    }));
  };

  const handleButtonClick = () => {
    setUser(prevState => ({
      ...prevState,
      age: prevState.age + 1,
    }));
  };

  return (
    <div className="user-details">
      <h1>User Details</h1>

      <UserData user={user} />

      <input type="text" onChange={handleInputChange} value={user.inputValue} />
      <p>Hello: {user.inputValue}</p>

      <button onClick={handleButtonClick}>Load User Data</button>
    </div>
  );
};

export default UserDetailsPageHook;
