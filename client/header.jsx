import React from 'react';

export const AppNavbar = () => (
  <nav id="main-navigation" className="navbar navbar-default navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <a className="navbar-brand" href="/"><i className="fa fa-twitter"></i></a>
      </div>


      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><a href="/notifications"><i className="fa fa-fw fa-bell"></i> Notifications </a></li>
        <li><a href="/profile"><i className="fa fa-fw fa-user"></i> Me</a></li>
      </ul>

      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><i className="fa fa-fw fa-pencil-square-o"></i> Compose a Tweet</a></li>
      </ul>
      </div>

    </div>
  </nav>
);
