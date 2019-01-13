import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import QuizEditor from './QuizEditor';
import QuizList from './QuizList';
import Quizzes from './../api/quizzes.js';


export default class Logout extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  render() {
    return(
      <div>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
    </div>
    )
  }
}
