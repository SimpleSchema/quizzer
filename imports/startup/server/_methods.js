import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { Quizzes } from '../../api/quizzes.js';


Meteor.methods({
  'quizzes.insert'(category, questionAsked, correctAnswer, answer1, answer2, answer3, userId) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    return Quizzes.insert({
      category: category,
      question: questionAsked,
      correctAnswer: correctAnswer,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      userId: this.userId

    });
  },
  'quizzes.remove'(quizId) {
    return Quizzes.remove({
        _id: quizId
    });
  }
});
