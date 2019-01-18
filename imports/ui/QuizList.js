import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Quizzes } from '../api/quizzes.js';

import QuizListItem from './QuizListItem';


// App component - represents the whole app
class QuizList extends Component {
  constructor(props) {
    super(props);

    this.state = {
  };
  }
  renderQuizzes() {
    let filteredQuizzes = this.props.quizzes;
    return filteredQuizzes.map((quiz) => {
      return (
        <QuizListItem
          key={quiz._id}
          quiz={quiz}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <header>



        </header>

        <table>
          {this.renderQuizzes({})}
        </table>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('quizzes');

  return {
    quizzes: Quizzes.find({}).fetch()
  };
})(QuizList);
