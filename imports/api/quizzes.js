import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const Quizzes = new Mongo.Collection('quizzes');

if (Meteor.isServer) {
  Meteor.publish('quizzes', function() {
    return Quizzes.find({});
  });
}
