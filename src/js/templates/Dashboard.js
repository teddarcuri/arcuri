import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import ProjectIndex from './ProjectIndex';
import Radium from 'radium';
import LoadingOverlay from './LoadingOverlay';

import CSSTransitionGroup from 'react-addons-css-transition-group';

class Dashboard extends React.Component {

  constructor(props) {
  	super(props);
  }

  handleSubmit(ev)  {
    ev.preventDefault();

    this.setState({isLoading: true})

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
        <h3>{this.props.projects.length} Projects</h3>
        <ProjectIndex projects={this.props.projects}>
        </ProjectIndex>
      </div>
    )
  }

  renderUnAuth() {
    var loadingOverlay = this.state.isLoading ? <LoadingOverlay></LoadingOverlay> : null;
    return (
        <CSSTransitionGroup component={"form"}
              style={{position: "relative"}}
              key="login-form"
              onSubmit={this.handleSubmit.bind(this)}
              transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionName="bubbleUp"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>
        {loadingOverlay}
        <h3>
          Are you me?
        </h3>
        <h5>Let's find out.</h5>
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
        border: "solid #000 2px",
        padding: 10,
        margin: "20px 0px",
        ":hover" : {
          background: "#222",
        }
      }
    }
  }

  render() {
    var pageContent = this.props.uid ? this.renderAuth() : this.renderUnAuth();
     return (
       <CSSTransitionGroup component={"div"}
              transitionAppear={true}
              style={{maxWidth: "666px", width: "100%"}}
              transitionAppearTimeout={2000}
              transitionName="bubbleUp"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>
            {pageContent}
      </CSSTransitionGroup>
     )
  }
}

export default Radium(Dashboard);