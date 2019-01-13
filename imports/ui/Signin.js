import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      
    });
  }
  render() {
    return(
      <div className="container">
          <h1>Sign In</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="email" ref="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Enter</button>
          </form>
          <Link to="/signup">Create an account</Link>
      </div>
    );
  }
}
