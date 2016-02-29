import moment from 'moment';
const Tweets = new Mongo.Collection('tweets');

Tweets.before.insert(function(userId, doc) {
  doc.tweetedAt = new Date();
  doc.userId = userId;
})

Tweets.helpers({
  user: function() {
    return Meteor.users.findOne({_id: this.userId});
  },
  fullName: function() {
    if (this.user() && this.user().profile) {
      return this.user().profile.name;
    }
  },
  username: function() {
    if (this.user()) {
      return this.user().username;
    }
  },
  tweetedTime: function() {
    return moment(this.tweetedAt).fromNow();
  }
});

Tweets.allow({
  insert: function(userId, doc) {
    return userId;
  },
  update: function(userId, doc, fields, modifier) {
    return false;
  },
  remove: function(userId, doc) {
    return doc.userId === userId;
  }
});

Meteor.methods({
  'followUser': function(followId) {
    Meteor.users.update(this.userId, {$push: {"profile.followingIds": followId}})
  }
});

export default Tweets
