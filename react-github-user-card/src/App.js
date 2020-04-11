import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        user: {},
        Followers: []
      };
  }

  fetchUser = () => {
    axios
      .get(`https://api.github.com/users/vospader13`)
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log("no user found", err);
      });
    axios
      .get(`https://api.github.com/users/vospader13/followers`)
      .then(res => {
        this.setState({ ...this.state, followers: res.data });
      })
      .catch(err => {
        console.log("no data returned", err);
      });
  };

  componentDidMount() {
    console.log("component did mount")
    this.fetchUser();
  }

  componentDidUpdate() {

  }








  render() {
    return (
      <section>
        <div user = {this.state.user}>
        <p>render results</p>
        </div>
      </section>      

    );
  }
}

export default App;
