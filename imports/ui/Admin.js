import React from 'react';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Router,
         Route,
         Switch
       } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Accounts } from 'meteor/accounts-base';

import QuizEditor from './QuizEditor';
import QuizList from './QuizList';



export default class Admin extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
      return(
        <div className="container">
          <h1>Admin Page</h1>
          <QuizEditor/>
        </div>
      );

    }
  }
