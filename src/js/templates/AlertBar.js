import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class AlertBar extends React.Component {

  constructor(props) {
  	super(props);
  }

  componentDidMount(){
    this.props.hideAlertBar(); 
  }

  hideAlertBar() {
    hide = setTimeout(function() {
      this.props.hideAlertBar();
    }.bind(this), 5000);
  }

  render() {
    var bgColor = this.props.config.type === "SUCCESS" ? "#bada55" : "#ff4040";
    let styles = {
      container: {
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 999,
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      },
      bar: {
        width: "auto",
        height: "25px",
        background: bgColor,
        color: "#fff",
        padding: 20,
        zIndex: 9999,
        transition: "all ease 0.5s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: this.props.config.active ? "translateY(0)" : "translateY(-300%)"
      },
      message: {
        margin: 0,
        fontSize: "13px",
        letterSpacing: "3px",
        color: "white"
      }
    }
    return (
    <div style={styles.container}>
      <CSSTransitionGroup 
        style={styles.bar}
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionName="fadeIn"
        transitionEnterTimeout={2000}
        transitionLeaveTimeout={2000}>
        <h1 style={styles.message}>
          <i style={{marginRight: 10}}className={this.props.config.icon}></i>
          {this.props.config.message}
        </h1>
      </CSSTransitionGroup>
    </div>
    );
  }
}

export default AlertBar;