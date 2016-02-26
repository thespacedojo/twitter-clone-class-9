import React from 'react';

export const Notifications = () => (
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
            </table>
          </div>

          <div className="panel-footer">
            <input type="text" className="form-control" placeholder="Compose new Tweet..." />
          </div>
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
        <ul id="notification-stream" className="list-group">
          <li className="list-group-item">
            <h4 className="list-group-item-heading">Notifications</h4>
          </li>

          <li className="list-group-item tweet">

            <h5 className="tweet-author">Ned Stark <span className="author-info"><a href="#">@nedstark &middot; 18m</a></span></h5>

            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facere expedita mollitia draco dormiens. #yum #food</p>

            <span className="expand"><a href="#">Expand</a></span>

            <div className="tweet-options pull-right">
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
            </div>
          </li>

          <li className="list-group-item tweet">
            <h5 className="tweet-author">Dana Scully <span className="author-info"><a href="#">@scully &middot; 25m</a></span></h5>

            <p className="list-group-item-text">Dolor sit amet, consectetur adipisicing elit. Voluptates minus rem vero quidem eligendi consectetur harum quod rati.</p>

            <span className="expand"><a href="#">Expand</a></span>

            <div className="tweet-options pull-right">
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
            </div>
          </li>

          <li className="list-group-item tweet">
            <h5 className="tweet-author">Buffy Summers <span className="author-info"><a href="#">@nedstark &middot; 26m</a></span></h5>

            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facere expedita mollitia draco dormiens. #yum #food</p>

            <span className="expand"><a href="#">Expand</a></span>

            <div className="tweet-options pull-right">
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
            </div>
          </li>

          <li className="list-group-item tweet">
            <h5 className="tweet-author">Barney Rubble <span className="author-info"><a href="#">@barneyrubble &middot; 16m</a></span></h5>

            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates minus rem vero quidem eligendi consectetur harum quod ratione debitis. </p>

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

          <div className="panel-footer short">
            <p>Find <a href="#">people you know</a>?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
