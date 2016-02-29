import React from 'react';
import {Tweet} from './tweet.jsx';

class Profile extends React.Component {
  constructor() {
    super();
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
  }
  following() {
    if (this.props.currentUser.profile && this.props.currentUser.profile.followingIds) {
      return _.contains(this.props.currentUser.profile.followingIds, this.props.userProfile._id)
    } else {
      return false
    }
  }
  followUser(event) {
    const userId = this.props.userProfile._id;
    Meteor.call('followUser', userId);
  }
  unfollowUser(event) {
    const userId = this.props.userProfile._id;
    Meteor.call('unfollowUser', userId);
  }
  render() {
    return (
      <div>
        <div id="profile-background"></div>

        <nav id="profile-navigation" className="navbar navbar-default" role="navigation">
          <div className="container no-collapse">
            <ul className="nav navbar-nav">

              <li className="img-mover hidden-xs"></li>

              <li>
                <span className="info">Tweets</span>
                <span className="number">500</span>
              </li>
              <li>
                <span className="info">Following</span>
                <span className="number">240</span>
              </li>
              <li>
                <span className="info">Followers</span>
                <span className="number">1,600</span>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              {this.following() ? <UnfollowButton unfollowUser={this.unfollowUser} /> : <FollowButton followUser={this.followUser} />}
            </ul>


          </div>
        </nav>

        <div id="profile-stream" className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3">

              <div className="profile-information">
                <img src="https://pbs.twimg.com/profile_images/431476628166696960/xQCVJI_u_400x400.jpeg" alt="" className="profile-image" />

                <h3 className="username">{this.props.userProfile.profile.name}</h3>
                <span className="handle">@{this.props.userProfile.username}</span>
                <p className="user-profile-description"></p>

                <ul className="user-profile-info">
                  <li><i className="fa fa-fw fa-map-marker"></i> Cincinnati, OH</li>
                  <li><i className="fa fa-fw fa-link"></i> <a href="http://joshowens.me">joshowens.me</a></li>
                  <li><i className="fa fa-fw fa-clock-o"></i> Joined April 04, 1980</li>
                </ul>
              </div>

            </div>

            <div className="col-md-8 col-lg-6">
              <ul id="tweet-stream" className="list-group">
                <li className="list-group-item">
                  <h4 className="list-group-item-heading">My Latest Tweets</h4>
                </li>

              {
                this.props.tweets.map(function(tweet) {
                  return <Tweet key={tweet._id} tweet={tweet} />
                })
              }

                <li className="list-group-item load-more">
                  <a href="#">Load more tweets</a>
                </li>
              </ul>
            </div>


            <div className="col-md-8 col-md-offset-4 col-lg-3 col-lg-offset-0">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h4>Who to follow</h4>
                </div>
                <ul className="list-group">
                  <a href="#" className="list-group-item"><strong>Josh Owens</strong> @joshowens</a>
                  <a href="#" className="list-group-item"><strong>Sacha Greif</strong> @sachagreif</a>
                  <a href="#" className="list-group-item"><strong>Tom Coleman</strong> @tmeasday</a>
                </ul>

                <div className="panel-footer">
                  <p>Find <a href="#">people you know</a>?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const FollowButton = ({followUser}) => (
  <li className="follow-me"><button onClick={followUser} className="btn btn-primary"><i className="fa fa-plus"></i>&nbsp; Follow</button></li>
);

const UnfollowButton = ({unfollowUser}) => (
  <li className="follow-me"><button onClick={unfollowUser} className="btn btn-danger"><i className="fa fa-minus"></i>&nbsp; Unfollow</button></li>
);

export {Profile}
