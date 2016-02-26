import React from 'react';

export const Profile = () => (
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
          <li className="follow-me"><button className="btn btn-primary"><i className="fa fa-plus"></i>&nbsp; Follow</button></li>
        </ul>


      </div>
    </nav>

    <div id="profile-stream" className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3">

          <div className="profile-information">
            <img src="https://pbs.twimg.com/profile_images/431476628166696960/xQCVJI_u_400x400.jpeg" alt="" className="profile-image" />

            <h3 className="username">josh owens</h3>
            <span className="handle">@joshowens</span>
            <p className="user-profile-description">designs &amp; develops websites. spends a lot of time in photoshop. likes science, cats, and magic the gathering.</p>

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

            <li className="list-group-item tweet">
              <h5 className="tweet-author">amanda saffer <span className="author-info"><a href="#">@12pixels &middot; 16m</a></span></h5>
              <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates minus rem vero quidem eligendi consectetur harum quod ratione debitis. </p>

              <span className="expand"><a href="#">Expand</a></span>

              <div className="tweet-options pull-right">
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
              </div>
            </li>

            <li className="list-group-item tweet">
              <h5 className="tweet-author">amanda saffer <span className="author-info"><a href="#">@12pixels &middot; 18m</a></span></h5>
              <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facere expedita mollitia draco dormiens. #yum #food</p>

              <span className="expand"><a href="#">Expand</a></span>

              <div className="tweet-options pull-right">
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
              </div>
            </li>

            <li className="list-group-item tweet">
              <h5 className="tweet-author">amanda saffer <span className="author-info"><a href="#">@12pixels &middot; 25m</a></span></h5>
              <p className="list-group-item-text">Dolor sit amet, consectetur adipisicing elit. Voluptates minus rem vero quidem eligendi consectetur harum quod rati.</p>

              <span className="expand"><a href="#">Expand</a></span>

              <div className="tweet-options pull-right">
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
              </div>
            </li>

            <li className="list-group-item tweet">
              <h5 className="tweet-author">amanda saffer <span className="author-info"><a href="#">@12pixels &middot; 26m</a></span></h5>
              <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facere expedita mollitia draco dormiens. #yum #food</p>

              <span className="expand"><a href="#">Expand</a></span>

              <div className="tweet-options pull-right">
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
              </div>
            </li>

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
);
