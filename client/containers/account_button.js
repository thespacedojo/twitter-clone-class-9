import {composeWithTracker} from 'react-komposer';
import AccountButton from '../components/account_button.jsx';

function composer(props, onData) {
  user = Meteor.user();
  if (user) {
    onData(null, {user});
  } else {
    onData(null, {});
  }

};

export default composeWithTracker(composer)(AccountButton)
