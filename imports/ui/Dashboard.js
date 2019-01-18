import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import QuizEditor from './QuizEditor';
import  QuizList from './QuizList';
import QuizListItem from './QuizListItem';
import { Quizzes } from '../../api/quizzes.js';
import Logout from './Logout';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';



export default () => {
  var bullshit = Quizzes.find({category: 'Personal'}).fetch();
  return(
    <div>
        <h1>Categories</h1>
          <h2>{bullshit}</h2>
          <h2>Celebrity</h2>
          <h2>Tmartn</h2>
      <div>
        <QuizList/>
        <Logout/>
      </div>
    </div>
  );
}
