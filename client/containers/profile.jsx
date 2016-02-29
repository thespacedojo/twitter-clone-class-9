import React from 'react';
import {Profile} from '../components/profile.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Tweets} from '../../lib/collections.js';

class ProfileContainer extends TrackerReact(React.Component) {

  constructor(props) {
    super(props);
    this.currentUser = this.currentUser.bind(this);
    this.userProfile = this.userProfile.bind(this);
    this.tweets = this.tweets.bind(this);
    this.state = {
      subscription: {
        profile: Meteor.subscribe('profile', this.props.username),
        tweets: Meteor.subscribe('profileTweets', this.props.username)
      }
    }
  }
  userProfile() { return Meteor.users.findOne({username: this.props.username}) }
  tweets() { return Tweets.find().fetch() }
  currentUser() { return Meteor.user() }
  render() {
    return <Profile currentUser={this.currentUser()} tweets={this.tweets()} userProfile={this.userProfile()}/>
  }
}

export default ProfileContainer
