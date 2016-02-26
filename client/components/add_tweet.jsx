import React from 'react';
import {Tweets} from '../../lib/collections.js';

export class AddTweet extends React.Component {
  addTweet(event) {
    event.preventDefault();
    form = event.target;
    Tweets.insert({tweetText: this.refs.tweetText.value}, (err, id) => {
      if (err) {
        console.log(err);
      } else {
        form.reset();
      }
    })
  }
  render() {
    return (
      <div className="panel-footer">
        <form id="tweetForm" onSubmit={this.addTweet.bind(this)}>
          <input ref="tweetText" type="text" className="form-control tweet-text" placeholder="Compose new Tweet..." />
          <div className="row">
            <input type="submit" className="btn btn-default btn-xs pull-right tweet-btn" value="Tweet" />
          </div>
        </form>
      </div>
    )
  }
}
