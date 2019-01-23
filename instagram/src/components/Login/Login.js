import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleLoginChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLoginInput = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          name="username" 
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleLoginChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={this.state.password}
          onChange={this.handleLoginChange} 
          required 
        />
        <input 
          type="submit" 
          value="Login" 
          onClick={this.handleLoginInput}>
        </input>
      </form>
    )
  }
}

export default Login;