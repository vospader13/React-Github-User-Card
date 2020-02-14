import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      userText: ""
      }
  };
  const Card = props => {
    return (
      <div id="main">
  
          <img src={props.user.avatar_url} alt="img" />
          <h1>name: {props.user.name}</h1>
          <p>login: {props.user.login}</p>
          <p>location: {props.user.location}</p>
          <p>repos: {props.user.public_repos}</p>
          <p>bio: {props.user.bio}</p>
  
      </div>
    );
  };

  const cardList = props => {
    const callBackSelectedName = name => {
      props.onSelectName(name);
    };
  
    return props.profiles.map(profile => (
      <Card key={profile.id} {...profile} onSelectName={callBackSelectedName} />
    ));
  };


  getNewName = name => {
    this.setState({ user: name });
  };



   // github api search call with async axios



  const userForm = ({ img, followers, bio ,public_repos}) => {
    return (
  
      <>
        <img src={img} />
        <h2>{followers}</h2>
        <p>repos: {public_repos}</p>
        <p>{bio}</p>
  
      </>
    );
  };
  componentDidMount() {
    fetch(`https://api.github.com/users/vospader13`)  //${user}
      .then(res => res)
      .catch(err => console.log("User did not come through ", err));

      getApiGitHubUser = async searchName => {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${searchName}`
          );
          console.log(response);
          this.props.searchedUser(response);
    
        } catch (err) {
    
          console.log({
            message: err.response.data.message,
            docsUrl: err.response.data.documentation_url
          });
        }
    
      };

  }


  handlerFormSubmit = event => {
    event.preventDefault();
    const searchName = this.state.user;
    this.setState({ user: "" });


  handleChanges = e => {
    this.setState({ userText: e.target.value });
    console.log(e.target.value);
  };
  this.getApiGitHubUser(searchName);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate running");
  }

  // fetchUser = e => {
  //   e.preventDefault();

  //   fetch(`https://api.github.com/users/${this.state.userText}`)
  //   .then(user => this.setState({ user: user.message}))
  //   .catch(err => console.log("User did not come through ", err));
  // };



  render() {
    return (
      <form onSubmit={this.handlerFormSubmit}>
        <input
        className="input-name"
          type="text"
          value={this.state.user}
          onChange={event => this.getNewName(event.target.value)}
          placeholder="GitHub User"
        />
        <button className="submit-name">Add User</button>
      </form>

      <div>
        <CardHeader title="The GitHub User Card" />
        <CardForm searchedUser={this.callBackSearchUser} />
        <CardList
          profiles={this.state.profiles}
          onSelectName={this.findName}
      />
      <hr />
        <CardMessage msg={this.state.selectedName} />
        <UserForm
          key={this.id}
          img={this.avatar_url}
          followers={this.login}
          bio={this.bio}
      />
      </div>
    );
  }
}




export default App;
