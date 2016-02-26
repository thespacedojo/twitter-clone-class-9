import React from 'react';

export const Tweet = ({tweet}) => (
  <li className="list-group-item tweet">

    <h5 className="tweet-author">{tweet.fullName()} <span className="author-info"><a href="#">@{tweet.username()} &middot; {tweet.tweetedTime()}</a></span></h5>

    <p className="list-group-item-text">{tweet.tweetText}</p>

    <span className="expand"><a href="#">Expand</a></span>

    <div className="tweet-options pull-right">
      <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
      <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
      <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
    </div>
  </li>
)
