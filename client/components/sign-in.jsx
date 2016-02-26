import React from 'react';

class SignIn extends React.Component {
  signIn(event) {
    event.preventDefault();
    email = this.refs.email.value;
    password = this.refs.password.value;
    Meteor.loginWithPassword(email, password, (error) => {error ? console.log(error) : FlowRouter.go('/')})
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">

          <div className="at-form">

            <div className="at-title">
              <h3>Sign In</h3>
            </div>

            <div className="at-pwd-form">
              <form onSubmit={this.signIn.bind(this)} role="form" id="at-pwd-form" noValidate="" action="#" method="POST">
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

                  <button type="submit" className="at-btn submit btn btn-lg btn-block btn-default" id="at-btn">
                    Sign In
                  </button>
                </fieldset>
              </form>
            </div>
            <div className="at-signup-link">
              <p>
                Don't have an account? &nbsp;
                <a href="/sign-up" id="at-signUp" className="at-link at-signup">Register</a>

              </p>
            </div>


          </div>

        </div>
      </div>
    </div>
    )
  }
}

export default SignIn
