import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import createBrowserHistory from 'history/createBrowserHistory';
import { Quizzes } from '../api/quizzes.js';

// Quiz component - represents a single quiz item
export default class QuizListItem extends Component {

  constructor(props) {
    super(props);
  }

  deleteQuiz(quizId) {
    Meteor.call('quizzes.remove', this.props.quiz._id);
  }

  render() {
    const quizClassName = classnames({});

    return (
    <div className="quizTable">
      <table className={quizClassName}>
        <thead>
          <tr>
            <th>Question</th>
            <th>A:</th>
            <th>B:</th>
            <th>C:</th>
            <th>D:</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>{this.props.quiz.question}</td>
              <td>{this.props.quiz.correctAnswer}</td>
              <td>{this.props.quiz.answer1}</td>
              <td>{this.props.quiz.answer2}</td>
              <td>{this.props.quiz.answer3}</td>
            </tr>
          </tbody>
      </table>
      <button className="delete-quiz" onClick={this.deleteQuiz.bind(this)}>Delete Quiz</button>
    </div>
    );
  }
}
