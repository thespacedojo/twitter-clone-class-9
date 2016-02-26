import React from 'react';

const Username = ({user}) => (
  <li>
    <a href="#">{user && user.emails && _.first(user.emails).address}</a>
  </li>
)

const LoginButtons = () => (
  <li className="dropdown">
   <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account? <span class="caret"></span></a>
   <ul className="dropdown-menu">
     <li><a href="/sign-in">Sign In</a></li>
     <li><a href="/sign-up">Sign Up</a></li>
   </ul>
  </li>
)

export default AccountButton = ({user}) => {
  var button;
  if (user) {
    button = <Username user={user} />
  } else {
    button = <LoginButtons />
  }
  return button;
}
