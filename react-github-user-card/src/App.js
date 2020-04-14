import React from "react";
import axios from "axios";
import "./components/Card.css";
import {Card} from "./components/Card";
import { UserForm } from "./components/UserForm";
import {CardForm} from "./components/CardForm";

class App extends React.Component {
  state = {
    user: {},
    followers: []
  };

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
        console.log("no data returned" , err);
      });
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <div >
      {/* <CardForm searchedUser={this.callBackSearchUser} /> */}
      <section className="App">
      
      
      <div>
        <Card user={this.state.user} />
        </div>
        </section>
        <section>
        {this.state.followers.map(data => (
              <div className = "followers">
              <div id="flex">
          <UserForm
            className='followers'
            key={data.id}
            public_repos={data.public_repos}
            location={data.location}
            img={data.avatar_url}
            followers={data.login}
            bio={data.bio}
          /></div></div>
        ))}
        </section>

      
      
      </div>
    );
  }
}

export default App;
