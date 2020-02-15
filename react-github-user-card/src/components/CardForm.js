import React,{Component} from "react";
import axios from "axios";

export class CardForm extends Component {
  state = {
    inputName: ""
  };

  // update the name state with the new input name
  getNewName = name => {
    this.setState({ inputName: name });
  };


    // fetchUser = e => {
  //   e.preventDefault();

  //   fetch(`https://api.github.com/users/${this.state.userText}`)
  //   .then(user => this.setState({ user: user.message}))
  //   .catch(err => console.log("User did not come through ", err));
  // };

  // githun api search call with async axios
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


  handlerFormSubmit = event => {
    event.preventDefault();
    const searchName = this.state.inputName;
    this.setState({ inputName: "" });


    this.getApiGitHubUser(searchName);
  };

  render() {
    return (
      <form onSubmit={this.handlerFormSubmit}>
        <input
        className="input-name"
          type="text"
          value={this.state.inputName}
          onChange={event => this.getNewName(event.target.value)}
          placeholder="GitHub User"
        />
        <button className="submit-name">Add User</button>
      </form>
    );
  }
}