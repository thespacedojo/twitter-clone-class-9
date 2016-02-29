import React from 'react';
import {mount} from 'react-mounter';

import {AppLayout} from './layout.jsx';

import TweetStream from './containers/tweet_stream.js';
import Profile from './containers/profile.jsx';
import {Notifications} from './components/notifications.jsx';
import SignIn from './components/sign-in.jsx';
import SignUp from './components/sign-up.jsx';
import {clearFlashMessages} from './components/flash_messages.jsx'
FlowRouter.triggers.exit([clearFlashMessages]);

FlowRouter.route("/", {
  name: 'Home',
  action() {
    mount(AppLayout, {
      content: () =>  (<TweetStream />)
    })
  }
});

FlowRouter.route("/u/:username", {
  name: 'Profile',
  action(params) {
    mount(AppLayout, {
      content: () => (<Profile username={params.username}/>)
    })
  }
});

FlowRouter.route("/notifications", {
  name: 'Profile',
  action() {
    mount(AppLayout, {
      content: () => (<Notifications />)
    })
  }
});

FlowRouter.route("/sign-in", {
  name: 'SignIn',
  action() {
    mount(AppLayout, {
      content: () => (<SignIn />)
    })
  }
});

FlowRouter.route("/sign-up", {
  name: 'SignUp',
  action() {
    mount(AppLayout, {
      content: () => (<SignUp />)
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

