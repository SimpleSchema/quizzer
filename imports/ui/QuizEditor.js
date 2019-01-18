import React from 'react';
import { Quizzes } from './../api/quizzes.js';
import { withTracker } from 'meteor/react-meteor-data';
import QuizList from './QuizList';

var ReactDOM = require('react-dom');

 export default class QuizEditor extends React.Component {
   constructor(props) {
     super(props);
     this.state = { value: '' };
     this.handleChange = this.handleChange.bind(this);
   }
   handleChange(e) {
     e.preventDefault();
     this.setState({value: e.target.value});

   }
  handleSubmit(e) {
    e.preventDefault();
    const quizCategory = ReactDOM.findDOMNode(this.refs.selectCategory).value;
    console.log("quizCategory: " + quizCategory);
    let questionAsked = e.target.questionAsked.value;
    let correctAnswer = e.target.correctAnswer.value;
    let answer1 = e.target.answer1.value;
    let answer2 = e.target.answer2.value;
    let answer3 = e.target.answer3.value;

    if (questionAsked) {

      e.target.questionAsked.value = '';
      e.target.correctAnswer.value= '';
      e.target.answer1.value= '';
      e.target.answer2.value= '';
      e.target.answer3.value= '';

    }

    Meteor.call('quizzes.insert', quizCategory, questionAsked, correctAnswer, answer1, answer2, answer3);
  }

  render() {
    return(
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <select name="category" ref="selectCategory">
            <option value="Select Category" selected disabled>Select Category</option>
            <option value="music">Music</option>
            <option value="celebrity">Celebrity</option>
            <option value="tmartn">TmarTn</option>
            <option value="history">History</option>
            <option value="personal">Personal</option>
          </select>
          <input type="text" name="questionAsked" placeholder="Question"/>
          <input type="text" name="correctAnswer" placeholder="A"/>
          <input type="text" name="answer1" placeholder="B"/>
          <input type="text" name="answer2" placeholder="C"/>
          <input type="text" name="answer3" placeholder="D"/>
        <button className="button">Add Quizz</button>
        </form>
      <QuizList/>
      </div>
    );
  }
}
