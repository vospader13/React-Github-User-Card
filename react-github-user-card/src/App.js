import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      userText: ""
      }
  };


  componentDidMount() {
    fetch(`https://api.github.com/users/vospader13`)  //${user}
      .then(res => res)
      .catch(err => console.log("User did not come through ", err));

  }

  handleChanges = e => {
    this.setState({ userText: e.target.value });
    console.log(e.target.value);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate running");
  }

  fetchUser = e => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${this.state.userText}`)
    .then(user => this.setState({ user: user.message}))
    .catch(err => console.log("User did not come through ", err));
  };




  render() {
    console.log("rendering") 
    return(
      <div className="App">
        <h1>Some Text</h1>
        <input 
          type='text'
          value={this.state.fetchUser}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchUser}>Fetch users</button>
        {/* <div>
          {this.state.user.map(user => (

          ))}
        </div> */}
      
      </div>

    );
  }
}




export default App;
