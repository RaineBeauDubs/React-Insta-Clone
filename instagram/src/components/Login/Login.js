import React, { Component } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div `
  background: lightgrey;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;`

const LoginInputs = styled.input`
   width: 300px;
   height: 30px;
   font-size: 20px;
   text-align: center;
   margin: 10px;`

const LoginWelcome =styled.h2 `
  margin-top: 0;
  padding-top: 50px;
  margin-bottom: 0;
  font-size: 40px;`

const LoginPlease =styled.h3 `
  padding: 25px;`

const LoginIgLogo = styled.img `
  width: 500px;`

const LoginButton = styled.input `
  margin: 10px;
  width: 50px;`

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
      <LoginContainer>
        <LoginWelcome>Welcome back to</LoginWelcome>
        <LoginIgLogo src="https://techcrunch.com/wp-content/uploads/2014/06/instagram_topic.png?w=600" alt="instagram" />
        <LoginPlease>Please log in...</LoginPlease>
        <LoginForm>
          <LoginInputs
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleLoginChange}
            required
          />
          <LoginInputs
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleLoginChange}
            required
          />
          <LoginButton
            type="submit"
            value="Log In"
            onClick={this.handleLoginInput}>
          </LoginButton>
        </LoginForm>
      </LoginContainer>
    )
  }
}

export default Login;