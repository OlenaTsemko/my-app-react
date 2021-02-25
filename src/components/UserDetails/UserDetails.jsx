import React, { Component } from 'react';
import UserData from './UserData';

class UserDetailsPage extends Component {
  state = {
    firstName: 'Elena',
    lastName: 'Tsemko',
    age: 15,
    email: 'mail@gmail.com',
    inputValue: '',
  };

  handleButtonClick = () => {
    this.setState(({ age }) => ({
      age: age + 1,
    }));
  };

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="user-details">
        <h1>User Details</h1>

        <UserData user={this.state} />

        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.inputValue}
        />
        <p>Hello: {this.state.inputValue}</p>

        <button onClick={this.handleButtonClick}>Load User Data</button>
      </div>
    );
  }
}

export default UserDetailsPage;
