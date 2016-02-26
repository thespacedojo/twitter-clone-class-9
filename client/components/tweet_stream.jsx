import React from 'react';
import {AddTweet} from './add_tweet.jsx';
import {Tweet} from './tweet.jsx';

export const TweetStream = ({tweets}) => (
  <div id="stream" className="container">
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div id="profile-panel" className="panel panel-default">
          <div className="media panel-body">

            <a className="pull-left" href="#">
              <img className="media-object" src="https://pbs.twimg.com/profile_images/431476628166696960/xQCVJI_u_bigger.jpeg" alt="..." />
            </a>

            <div className="media-body">
              <span className="username"><strong>josh owens</strong></span> <br />
              <span className="handle">@joshowens</span>
            </div>

            <table id="profile-stats" className="table">
              <tbody>
                <tr className="head">
                  <td><strong>Tweets</strong></td>
                  <td><strong>Following</strong></td>
                  <td><strong>Followers</strong></td>
                </tr>
                <tr className="numbers">
                  <td>500</td>
                  <td>240</td>
                  <td>1,600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AddTweet />
        </div>

        <div id="trending" className="panel panel-default">
          <div className="panel-body">
            <h4>Trending Topics</h4>
          </div>
          <ul className="list-group">
            <a href="#" className="list-group-item">#food</a>
            <a href="#" className="list-group-item">#meteorclub</a>
            <a href="#" className="list-group-item">#loremipsumdolor</a>
            <a href="#" className="list-group-item">#dracodormiens</a>
            <a href="#" className="list-group-item">#atmospherejs</a>
          </ul>
        </div>
      </div>

      <div className="col-md-8 col-lg-6">
        <ul id="tweet-stream" className="list-group">
          <li className="list-group-item">
            <h4 className="list-group-item-heading">Tweets</h4>
          </li>

          {
            tweets.map(function(tweet) {
              return <Tweet key={tweet._id} tweet={tweet} />
            })
          }

          <li className="list-group-item load-more">
            <a href="#">Load more tweets</a>
          </li>
        </ul>
      </div>



      <div id="who-to-follow" className="col-md-8 col-md-offset-4 col-lg-3 col-lg-offset-0">
        <div className="panel panel-default">

          <div className="panel-body">
            <h4>Who to follow</h4>
          </div>

          <ul className="list-group">
            <a href="#" className="list-group-item"><strong>Josh Owens</strong> @joshowens</a>
            <a href="#" className="list-group-item"><strong>Sacha Greif</strong> @sachagreif</a>
            <a href="#" className="list-group-item"><strong>Tom Coleman</strong> @tmeasday</a>
          </ul>

          <div className="panel-footer short">
            <p>Find <a href="#">people you know</a>?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);


