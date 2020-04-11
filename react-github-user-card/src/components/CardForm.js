import React, {Component} from 'react';
import axios from 'axios';


export class CardForm extends Component {
    this.state = {
        inputName: ''
    };

    getNewName = name => {
        this.setState({ inputName: name});
    };

    getApiGitHubUser = async searchName => {

        try {
            const response = await axios.get(
                `https://api.github.com/users/${searchName}`
            );
        }
        catch (err) {

            console.log({
              message: err.response.data.message,
              docsUrl: err.response.data.documentation_url
            });
          }
    };

    handlerFormSubmit = e => {
        event.preventDefault();
        const searchName = this.setState.inputName;
        this.setState({ inputName: ''});

        this.getApiGitHubUser(searchName);
    };

    render() {
        return(
            <form onSubmit={this.handlerFormSubmit}>
                <input 
                    className='input-name'
                    type='text'
                    value={this.state.inputName}
                    onChange={e => this.getNewName(event.target.value)}
                    placeholder='GitHub User'
                />
                <button className='submit-name'>Add User</button>
            </form>
        );
    }
}