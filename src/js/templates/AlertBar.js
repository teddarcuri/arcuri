import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class AlertBar extends React.Component {

  constructor(props) {
  	super(props);
  }

  componentDidMount(){
    this.hideAlertBar(); 
  }

  componentDidUpdate(){
    this.hideAlertBar();
  }

  hideAlertBar() {
    var hide = setTimeout(function() {
      this.props.hideAlertBar();
    }.bind(this), 5000);
  }

  render() {
    var bgColor = this.props.config.type === "SUCCESS" ? "#bada55" : "#ff4040";
    let styles = {
      bar: {
        width: "100%",
        height: "25px",
        background: bgColor,
        color: "#fff",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        transition: "all ease 0.5s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: this.props.config.active ? "translateY(0)" : "translateY(-100%)"
      },
      message: {
        margin: 0,
        fontSize: "13px",
        letterSpacing: "3px",
        textShadow: "2px 2px 2px rgba(0,0,0,0.25)",
        color: "#fff"
      }
    }
    return (
    <CSSTransitionGroup style={styles.bar}
              transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionName="fadeIn"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>
      <h1 style={styles.message}>
        <i className={this.props.config.icon}></i>
        {this.props.config.message}
      </h1>
    </CSSTransitionGroup>
    );
  }
}

export default AlertBar;