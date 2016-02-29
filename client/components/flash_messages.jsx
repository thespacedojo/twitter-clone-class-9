import React from 'react';
import {Alert} from 'react-bootstrap';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

const FlashMessages = new Mongo.Collection(null);

class FlashDisplay extends TrackerReact(React.Component) {
  messages() { return FlashMessages.find().fetch() }
  dismiss(message, event) { FlashMessages.remove({_id: message._id}) }
  render() {
    return (
      <div className="col-sm-offset-2 col-sm-8">
        {this.messages().map((m) => {
            return <Alert bsStyle={m.type} onDismiss={this.dismiss.bind(this, m)}>{m.message}</Alert>
          }
        )}
      </div>
    )
  }
}

const clearFlashMessages = function() {
  FlashMessages.remove({});
}

export {FlashMessages, FlashDisplay, clearFlashMessages}

