import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import QuizEditor from './QuizEditor';
import  QuizList from './QuizList';
import QuizListItem from './QuizListItem';
import Quizzes from './../api/quizzes.js';
import Logout from './Logout';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';



export default () => {
  return(
    <div>
      <h1>Quizzes</h1>
      <div>
        <QuizList/>
        <Logout/>
      </div>
    </div>
  );
}
