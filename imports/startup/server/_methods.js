import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {check} from 'meteor/check';
Meteor.methods({
  'quizzes.insert'() {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    return Quizzes.insert({
      question:''
    });
  },
  'quizzes.remove'(quizId) {

    return Quizzes.remove({
        quizId: this.props.quiz._id
    });
  }
});
