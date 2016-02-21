import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import ProjectIndex from './ProjectIndex';

import CSSTransitionGroup from 'react-addons-css-transition-group';

class Dashboard extends React.Component {

  constructor(props) {
  	super(props);
  }

  handleSubmit(ev)  {
    ev.preventDefault();

    var loginCredentials = {
      email : this.refs.email.value,
      password: this.refs.password.value
    }

    this.props.authenticate(loginCredentials);
  }

  logout() {
    this.props.unauthenticate();
  }

  renderAuth() {
    return (
      <div key="dashboard">
        <h1>Dashboard</h1>
        <ProjectIndex projects={this.props.projects}>
        </ProjectIndex>
        <a onClick={this.logout.bind(this)}>
          Logout
        </a>
      </div>
    )
  }

  renderUnAuth() {
    return (
        <CSSTransitionGroup component={"form"}
              key="login-form"
              onSubmit={this.handleSubmit.bind(this)}
              transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionName="bubbleUp"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>
        <h3>
          Hi! Are you me?
          <span>Let's find out.</span>
        </h3>
        <input ref="email" type="text"/>
        <input ref="password" type="password"/>
        <button style={this.getStyles().button} type="submit">
          Login
        </button>
      </CSSTransitionGroup>
    )    
  }

  getStyles() {
    return {
      button: {
        background: "#111"
      }
    }
  }

  render() {
    var pageContent = this.props.uid ? this.renderAuth() : this.renderUnAuth();
     return (
       <CSSTransitionGroup component={"div"}
              transitionAppear={true}
              style={{width: "100%"}}
              transitionAppearTimeout={2000}
              transitionName="bubbleUp"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>
            {pageContent}
      </CSSTransitionGroup>
     )
  }
}

export default Dashboard;