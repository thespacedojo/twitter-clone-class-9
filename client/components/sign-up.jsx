import React from 'react';

class SignUp extends React.Component {
  signUp(event) {
    event.preventDefault();
    email = this.refs.email.value;
    password = this.refs.password.value;
    username = this.refs.username.value;
    name = this.refs.name.value;
    profile = {name, followingIds: []}
    Accounts.createUser({email, password, username, profile}, (error) => {error ? console.log(error) : FlowRouter.go('/')})
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">

          <div className="at-form">

            <div className="at-title">
              <h3>Sign Up</h3>
            </div>

            <div className="at-pwd-form">
              <form onSubmit={this.signUp.bind(this)} role="form" id="at-pwd-form" noValidate="" action="#" method="POST">
                <fieldset>
                  <div className="at-input form-group has-feedback">
                    <label className="control-label" htmlFor="at-field-email">
                      Email
                    </label>
                    <input ref="email" type="email" className="form-control" id="at-field-email" name="at-field-email" placeholder="Email" autoCapitalize="none" autoCorrect="off" />

                    <span className="help-block hide"></span>
                  </div>
                  <div className="at-input form-group has-feedback">
                    <label className="control-label" htmlFor="at-field-password">
                      Password
                    </label>
                    <input ref="password" type="password" className="form-control" id="at-field-password" name="at-field-password" placeholder="Password" autoCapitalize="none" autoCorrect="off" />

                    <span className="help-block hide"></span>
                  </div>

                  <div className="at-input form-group has-feedback">
                    <label className="control-label" htmlFor="at-field-username">
                      Username
                    </label>
                    <input ref="username" type="text" className="form-control" id="at-field-username" name="at-field-username" placeholder="Username" autoCapitalize="none" autoCorrect="off" />

                    <span className="help-block hide"></span>
                  </div>

                  <div className="at-input form-group has-feedback">
                    <label className="control-label" htmlFor="at-field-name">
                      Full Name
                    </label>
                    <input ref="name" type="text" className="form-control" id="at-field-name" name="at-field-name" placeholder="Your Name" autoCapitalize="none" autoCorrect="off" />

                    <span className="help-block hide"></span>
                  </div>
                  <button type="submit" className="at-btn submit btn btn-lg btn-block btn-default" id="at-btn">
                    Sign Up
                  </button>
                </fieldset>
              </form>
            </div>

            <div className="at-signup-link">
              <p>
                Have an account? &nbsp;
                <a href="/sign-in" id="at-signUp" className="at-link at-signup">Sign In</a>

              </p>
            </div>


          </div>

        </div>
      </div>
    </div>
    )
  }
}

export default SignUp
