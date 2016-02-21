import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';

class LoginPage extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
    let styles = {
      button: {
        background: "#111"
      }
    }
    return (
      <CSSTransitionGroup component={"form"}
              transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionName="bubbleUp"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>
        <h3>Hi! Are you me?</h3>
        <input type="text"/>
        <input type="text"/>
        <button style={styles.button} type="submit">
          Login
        </button>
      </CSSTransitionGroup>
    );
  }
}

export default LoginPage;