import React from 'react';
import {Link} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
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

    Accounts.createUser({email, password}, (err) => {
      console.log('Signup callback', err);
    });

  //  this.setState({
    //  error: "Something went wrong."
    //});
  }
  render() {
    return(
      <div className="container">

          <h1>Sign Up</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined }

          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="email" ref="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Join The Club</button>
          </form>
          <Link to="/signin">Have an account?</Link>
      </div>
    );
  }
}
