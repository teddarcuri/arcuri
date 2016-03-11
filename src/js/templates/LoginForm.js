import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class LoginForm extends React.Component {

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
  
  render() {
    let styles = {
      block: {
        background: "#000",
        padding: 10,
        border: "none",
        width: 333
      },
      title: {
        color: "#eee", 
        fontSize: "1em",
        fontWeight: 300,
        fontSize: "0.8em",
        textTransform: "uppercase",
        textAlign:"left",
        letterSpacing: 1,
        padding: 6
      },
      inputs: {
        display: "flex",
        justifyContent: "center",
        alginItems: "center",
        width: "100%"
      },
      input: {
        width: "100%",
        background: "none",
        padding: 5,
        height: 30,
        margin: 5,
        flex: "1 1 50%",
        borderBottom: "solid 1px #fff"
      },
      button: {
        fontSize: "0.8em",
        color: "#fff"
      }
    }
    return (
    <CSSTransitionGroup
     transitionName="menuFade"
     transitionAppear={true}
     transitionAppearTimeout={1000}
     transitionEnterTimeout={1000}
     transitionLeaveTimeout={1000}>
      <form style={styles.block}
            onSubmit={this.handleSubmit.bind(this)}
            >
        <h3 style={styles.title}>
          Hey there. Are you me?
        </h3>
        <div style={styles.inputs}>
          <input style={styles.input} ref="email" type="text" placeholder="email"/>
          <input style={styles.input} ref="password" type="password" placeholder="password"/>
          <button style={{display: "none"}} type="submit"></button>
        </div>
      </form>
    </CSSTransitionGroup>
    );
  }
}

export default Radium(LoginForm);