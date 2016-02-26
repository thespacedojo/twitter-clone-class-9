import {Tweets} from '../lib/collections.js';

Meteor.publish('tweets', function() {
  return Tweets.find();
});
