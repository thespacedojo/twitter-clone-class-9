import React from 'react';
import {mount} from 'react-mounter';

import {AppLayout} from './layout.jsx';

import {TweetStream} from './components/tweet_stream.jsx';
import {Profile} from './components/profile.jsx';
import {Notifications} from './components/notifications.jsx';
import SignIn from './components/sign-in.jsx';
import SignUp from './components/sign-up.jsx';

FlowRouter.route("/", {
  name: 'Home',
  action() {
    mount(AppLayout, {
      content: <TweetStream />
    })
  }
});

FlowRouter.route("/profile", {
  name: 'Profile',
  action() {
    mount(AppLayout, {
      content: <Profile />
    })
  }
});

FlowRouter.route("/notifications", {
  name: 'Profile',
  action() {
    mount(AppLayout, {
      content: <Notifications />
    })
  }
});

FlowRouter.route("/sign-in", {
  name: 'SignIn',
  action() {
    mount(AppLayout, {
      content: <SignIn />
    })
  }
});

FlowRouter.route("/sign-up", {
  name: 'SignUp',
  action() {
    mount(AppLayout, {
      content: <SignUp />
    })
  }
});

FlowRouter.route("/sign-out", {
  name: 'SignOut',
  action() {
    Meteor.logout((error) => {
      if (error) {
        console.log(error);
      } else {
        FlowRouter.go('/');
      }
    });
  }
});

