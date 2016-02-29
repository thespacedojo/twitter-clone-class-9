import {composeWithTracker} from 'react-komposer';
import {TweetStream} from '../components/tweet_stream.jsx';
import {Tweets} from '../../lib/collections.js'

function composer(props, onData) {
  const handle = Meteor.subscribe('myTweets');
  if (handle.ready()) {
    const tweets = Tweets.find({}, {sort: {tweetedAt: -1}}).fetch()
    onData(null, {tweets});
  };
}

export default composeWithTracker(composer)(TweetStream)
