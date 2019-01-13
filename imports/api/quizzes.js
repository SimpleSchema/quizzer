import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const Quizzes = new Mongo.Collection('quizzes');

if (Meteor.isServer) {
  Meteor.publish('quizzes', function() {
    return Quizzes.find({});
  });
}


Meteor.methods({
  'quizzes.insert'(questionAsked, correctAnswer, answer1, answer2, answer3, userId) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    return Quizzes.insert({
      question: questionAsked,
      correctAnswer: correctAnswer,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      userId: this.userId

    });
  }
});
