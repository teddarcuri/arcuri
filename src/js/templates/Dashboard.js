import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import ProjectIndex from './ProjectIndex';
import BounceBall from './BounceBall';
import Radium from 'radium';
import LoadingOverlay from './LoadingOverlay';

import  colors from '../utilities/colors';

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
        <Link to="work/new"
              style={{
                color: "#333",
                textDecoration: "none",
                textAlign: "center",
                fontWeight: 700,
                padding: 10,
                lineHeight: "3em",
                borderRadius: "5px",
                border: "solid 2px #333"
              }}>
          <i className="fa fa-plus" style={{marginRight: 10}}></i>
          Add a new Project
        </Link>
        <hr />
        <h3>{this.props.projects.length} Projects</h3>
        <hr />
        <h3>Edit Projects</h3>
        <ProjectIndex projects={this.props.projects}
                      type="BALLS"
                      uid={this.props.uid}
                      reOrderProjects={this.props.reOrderProjects}>
        </ProjectIndex>
      </div>
    )
  }

  renderUnAuth() {
    var loadingOverlay = this.state.isLoading ? <LoadingOverlay></LoadingOverlay> : null;

    var form = (
      <div>
        <h3 style={{
              color: "#888"
              }}>
          Are you me?
        </h3>
        <h5 style={{
              color: "#888"
              }}>
          Let's find out.
        </h5>
        <input ref="email" type="text" placeholder="email"/>
        <input ref="password" type="password" placeholder="password"/>
        <button style={this.getStyles().button} type="submit">
          Login
        </button>
      </div>
    )

    var success = (
      <div style={{textAlign: "center"}}>
        <span className="fa-lg fa-stack">
          <i style={{color: colors.successGreen}} className="fa fa-circle fa-stack-2x"></i>
          <i className="fa fa-check fa-stack-1x"></i>
        </span> 
        <h3 style={{color: colors.successGreen}}>HOLD ONTO YOUR BUTTS!</h3>
      </div>
    );

    var content = form;
    return (
        <CSSTransitionGroup component={"form"}
              key="login-form"
              style={this.getStyles().form}
              onSubmit={this.handleSubmit.bind(this)}
              transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionName="fadeIn"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>
        {content}
      </CSSTransitionGroup>
    )    
  }

  getStyles() {
    return {
      page: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0px", 
        left: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      form: {
        //background: "#333"
      },
      button: {
        border: "solid #333 2px",
        padding: 10,
        color: "#333",
        textTransform: "uppercase",
        letterSpacing: "4px",
        fontWeight: 700,
        fontSize: "0.7em",
        margin: "20px 0px",
        ":hover" : {
          background: "#333",
          color: "#fff"
        }
      }
    }
  }

  render() {
    var pageContent = this.props.uid ? this.renderAuth() : this.renderUnAuth();
     return (
       <CSSTransitionGroup component={"div"}
              transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionName="bubbleUp"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}
              style={this.getStyles().page}>
            {pageContent}
      </CSSTransitionGroup>
     )
  }
}

export default Radium(Dashboard);